import Link from "next/link";
import { Container } from "@/components/ui/Container";

const pillars = [
  {
    number: "01",
    eyebrow: "Fundamentos",
    title: "Aprende conceptos técnicos",
    description:
      "Comprende qué es un o-ring, cómo trabaja una empaquetadura, qué significa Shore A y por qué materiales como NBR, FKM, EPDM, PTFE o PU responden diferente en operación.",
    href: "/aprender",
    cta: "Ir a conceptos",
  },
  {
    number: "02",
    eyebrow: "Diagnóstico",
    title: "Comprende por qué fallan",
    description:
      "Explora fallas por fuga, extrusión, desgaste, endurecimiento, ataque químico, temperatura excesiva, presión fuera de rango o errores de instalación.",
    href: "/laboratorio",
    cta: "Ver laboratorio",
  },
  {
    number: "03",
    eyebrow: "Aplicación",
    title: "Explora aplicaciones reales",
    description:
      "Relaciona condiciones de trabajo con selección de materiales, geometría del sello, movimiento, fluido, presión y buenas prácticas sin exponer información sensible de clientes.",
    href: "/biblioteca",
    cta: "Abrir biblioteca",
  },
];

export function LearningPillars() {
  return (
    <section className="relative py-10 sm:py-12 lg:py-16">
      <Container>
        <div className="grid gap-7 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#12A646]">
              Aprende con criterio técnico
            </p>

            <h2 className="mt-3 text-3xl font-black leading-[1.02] tracking-[-0.04em] text-[#F2F2F2] sm:text-4xl lg:text-5xl">
              Una plataforma educativa, no solo un catálogo.
            </h2>
          </div>

          <p className="max-w-3xl text-base leading-7 text-[#F2F2F2]/72 lg:text-lg">
            El objetivo es convertir el conocimiento técnico de DARROW en una
            experiencia clara, visual e indexable. Cada sección debe ayudar al
            usuario a entender, comparar y tomar mejores decisiones de sellado.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="group flex min-h-[310px] flex-col justify-between rounded-[1.7rem] border border-[#F2F2F2]/10 bg-[#07110d]/58 p-5 shadow-[0_14px_44px_rgba(0,0,0,0.2)] backdrop-blur-md transition hover:-translate-y-1 hover:border-[#12A646]/45 hover:bg-[#085924]/38"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-black text-[#12A646]">
                    {pillar.number}
                  </span>

                  <span className="rounded-full border border-[#12A646]/28 bg-[#12A646]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#12A646]">
                    {pillar.eyebrow}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-black leading-[1.02] tracking-[-0.03em] text-[#F2F2F2]">
                  {pillar.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#F2F2F2]/70">
                  {pillar.description}
                </p>
              </div>

              <Link
                href={pillar.href}
                className="mt-6 inline-flex items-center justify-between rounded-2xl border border-[#F2F2F2]/10 bg-[#0B1118]/72 px-4 py-3 text-sm font-black text-[#F2F2F2] transition group-hover:border-[#12A646]/70 group-hover:bg-[#12A646] group-hover:text-white"
              >
                {pillar.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}