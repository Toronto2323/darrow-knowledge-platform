import { failureLevelStyles, failureRisks } from "@/data/failure-risks";
import { Container } from "@/components/ui/Container";

export function FailureRiskMap() {
  return (
    <section className="bg-transparent py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#12A646]">
              Mapa de riesgos de falla
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-tight text-[#F2F2F2] sm:text-6xl">
              El material correcto no evita fallas si la aplicación está mal definida.
            </h2>
          </div>
          <p className="max-w-4xl text-base leading-8 text-[#F2F2F2]/72 lg:justify-self-end">
            Este mapa ayuda a interpretar modos de falla comunes. La selección preliminar debe complementarse con revisión de alojamiento, fluido, presión, temperatura, acabado superficial y montaje.
          </p>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-3">
          {failureRisks.map((risk) => (
            <article
              key={risk.id}
              className={`rounded-[1.75rem] border p-6 shadow-[0_16px_48px_rgba(0,0,0,0.18)] ${failureLevelStyles[risk.level]}`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-black leading-tight text-[#F2F2F2]">{risk.title}</h3>
                <span className="rounded-full border border-[#F2F2F2]/20 bg-[#262626]/50 px-3 py-1 text-xs font-black uppercase text-[#F2F2F2]">
                  {risk.level}
                </span>
              </div>

              <p className="mt-4 text-sm font-semibold leading-6 text-[#F2F2F2]/82">
                {risk.trigger}
              </p>

              <div className="mt-5 rounded-2xl bg-[#0B0F1A]/45 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#12A646]">
                  Síntomas visibles
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-[#F2F2F2]/76">
                  {risk.symptoms.map((symptom) => (
                    <li key={symptom} className="grid grid-cols-[auto_1fr] gap-2">
                      <span className="mt-2 size-1.5 rounded-full bg-[#12A646]" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-5 text-sm leading-6 text-[#F2F2F2]/72">
                {risk.technicalCause}
              </p>

              <div className="mt-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#12A646]">
                  Prevención
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-[#F2F2F2]/72">
                  {risk.prevention.map((item) => (
                    <li key={item} className="grid grid-cols-[auto_1fr] gap-2">
                      <span className="mt-2 size-1.5 rounded-full bg-[#12A646]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
