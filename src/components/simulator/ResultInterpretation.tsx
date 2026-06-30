import { Container } from "@/components/ui/Container";

const steps = [
  {
    title: "1. Usa la recomendación como filtro inicial",
    description:
      "El simulador organiza materiales por afinidad técnica, pero no conoce todavía dimensiones, tolerancias, acabado superficial, concentración química ni ciclo real de trabajo.",
  },
  {
    title: "2. Revisa advertencias antes de decidir",
    description:
      "Un material recomendado puede tener restricciones ante vapor, hidrocarburos, presión alta, movimiento rotativo o temperatura sostenida.",
  },
  {
    title: "3. Valida el modo de falla esperado",
    description:
      "Si la condición crítica es extrusión, desgaste, hinchamiento o endurecimiento, el diseño del sello y el alojamiento son tan importantes como el elastómero.",
  },
  {
    title: "4. Documenta la aplicación",
    description:
      "Antes de solicitar soporte técnico, recopila fluido, temperatura, presión, velocidad, medidas del alojamiento, material actual y fotografía de la falla.",
  },
];

export function ResultInterpretation() {
  return (
    <section className="bg-transparent py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
          <div className="xl:sticky xl:top-36">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#12A646]">
              Cómo interpretar el resultado
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-tight text-[#F2F2F2] sm:text-6xl">
              Una recomendación técnica también debe explicar sus límites.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#F2F2F2]/72">
              El objetivo de esta herramienta es educar, no emitir una selección definitiva sin contexto de aplicación. La selección final debe validarse con datos reales del equipo.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {steps.map((step) => (
              <article key={step.title} className="rounded-[1.75rem] border border-[#F2F2F2]/10 bg-[#262626]/72 p-6">
                <h3 className="text-xl font-black leading-tight text-[#F2F2F2]">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#F2F2F2]/72">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
