import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-transparent py-14 sm:py-18 lg:py-20">
      <div className="absolute inset-0 darrow-grid opacity-14" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-[58%] divider opacity-35" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/12 to-[#085924]/10"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className={`grid gap-10 ${children ? "xl:grid-cols-[1.05fr_0.95fr] xl:items-end" : ""}`}>
          <div className="max-w-5xl">
            <p className="inline-flex rounded-full border border-[#12A646] bg-[#085924]/70 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#F2F2F2] shadow-[0_0_34px_rgba(18,166,70,0.18)]">
              {eyebrow}
            </p>
            <h1 className="mt-6 text-balance text-4xl font-black leading-[0.95] tracking-tight text-[#F2F2F2] sm:text-6xl xl:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-4xl text-pretty text-base leading-8 text-[#F2F2F2]/76 sm:text-lg">
              {description}
            </p>
          </div>

          {children && (
            <div className="rounded-[2rem] border border-[#F2F2F2]/10 bg-[#262626]/70 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.32)] backdrop-blur">
              {children}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
