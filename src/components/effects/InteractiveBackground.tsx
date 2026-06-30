"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
};

const PARTICLE_COUNT_DESKTOP = 26;
const PARTICLE_COUNT_MOBILE = 10;
const MAX_CONNECTION_DISTANCE = 95;
const FRAME_SKIP = 3;
const MAX_DEVICE_PIXEL_RATIO = 1.25;

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const pointerFrameRef = useRef<number | null>(null);
  const frameRef = useRef(0);
  const particlesRef = useRef<Particle[]>([]);
  const isVisibleRef = useRef(true);
  const reducedMotionRef = useRef(false);
  const pointerRef = useRef({ x: "50vw", y: "50vh" });

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d", { alpha: true });

    if (!context) {
      return;
    }

    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let isMobile = window.innerWidth < 768;
    let particleCount = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;

    const resizeCanvas = () => {
      const devicePixelRatio = Math.min(
        window.devicePixelRatio || 1,
        MAX_DEVICE_PIXEL_RATIO,
      );

      canvas.width = Math.floor(window.innerWidth * devicePixelRatio);
      canvas.height = Math.floor(window.innerHeight * devicePixelRatio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const createParticles = () => {
      isMobile = window.innerWidth < 768;
      particleCount = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;

      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        size: Math.random() * 1.1 + 0.45,
        opacity: Math.random() * 0.28 + 0.12,
      }));
    };

    const syncPointerVariables = () => {
      pointerFrameRef.current = null;

      document.documentElement.style.setProperty("--mouse-x", pointerRef.current.x);
      document.documentElement.style.setProperty("--mouse-y", pointerRef.current.y);
    };

    const updatePointer = (event: PointerEvent) => {
      pointerRef.current = {
        x: `${event.clientX}px`,
        y: `${event.clientY}px`,
      };

      if (pointerFrameRef.current === null) {
        pointerFrameRef.current = window.requestAnimationFrame(syncPointerVariables);
      }
    };

    const draw = () => {
      if (!isVisibleRef.current) {
        animationRef.current = window.requestAnimationFrame(draw);
        return;
      }

      frameRef.current += 1;

      if (frameRef.current % FRAME_SKIP !== 0) {
        animationRef.current = window.requestAnimationFrame(draw);
        return;
      }

      const width = window.innerWidth;
      const height = window.innerHeight;
      const particles = particlesRef.current;

      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        if (!reducedMotionRef.current) {
          particle.x += particle.vx;
          particle.y += particle.vy;
        }

        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1;
        }

        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1;
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(242, 242, 242, ${particle.opacity})`;
        context.fill();
      }

      if (!isMobile && !reducedMotionRef.current) {
        for (let i = 0; i < particles.length; i += 1) {
          for (let j = i + 1; j < particles.length; j += 1) {
            const first = particles[i];
            const second = particles[j];
            const dx = first.x - second.x;
            const dy = first.y - second.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < MAX_CONNECTION_DISTANCE) {
              const opacity = (1 - distance / MAX_CONNECTION_DISTANCE) * 0.09;

              context.beginPath();
              context.moveTo(first.x, first.y);
              context.lineTo(second.x, second.y);
              context.strokeStyle = `rgba(18, 166, 70, ${opacity})`;
              context.lineWidth = 1;
              context.stroke();
            }
          }
        }
      }

      animationRef.current = window.requestAnimationFrame(draw);
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    const handleVisibilityChange = () => {
      isVisibleRef.current = document.visibilityState === "visible";
    };

    resizeCanvas();
    createParticles();

    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    animationRef.current = window.requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }

      if (pointerFrameRef.current) {
        window.cancelAnimationFrame(pointerFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="interactive-background" aria-hidden="true">
      <div className="interactive-background__gradient" />
      <div className="interactive-background__cursor" />
      <canvas ref={canvasRef} className="interactive-background__particles" />
      <div className="interactive-background__vignette" />
    </div>
  );
}
