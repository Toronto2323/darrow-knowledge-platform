import { Container } from "@/components/ui/Container";

const pillars = [
  {
    title: "Aprende conceptos técnicos",
    description:
      "Explicaciones claras sobre sellos hidráulicos, empaquetaduras, retenedores, o-rings, Shore A, NBR, FKM, EPDM, PTFE y poliuretano.",
  },
  {
    title: "Comprende por qué fallan",
    description:
      "Diagnóstico educativo de fugas, extrusión, desgaste, ataque químico, temperatura excesiva y errores de montaje.",
  },
  {
    title: "Explora aplicaciones reales",
    description:
      "Casos técnicos por industria, máquina y condición de operación sin exponer información sensible de clientes.",
  },
];

export function LearningPillars() {
  return (
    <section className="bg-transparent py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#12A646]">
            Aprende
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#F2F2F2] sm:text-5xl">
            Una plataforma educativa, no solo un catálogo.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#F2F2F2]/75">
            El objetivo es convertir el conocimiento técnico de DARROW en una
            experiencia de aprendizaje clara, visual e indexable por Google.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-3xl border border-[#F2F2F2]/12 bg-[#1b1b1b] p-6"
            >
              <h3 className="text-xl font-black text-[#F2F2F2]">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[#F2F2F2]/68">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
