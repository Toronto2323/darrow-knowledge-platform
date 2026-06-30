import { Suspense } from "react";
import { MaterialSelector } from "@/components/simulator/MaterialSelector";
import { ResultInterpretation } from "@/components/simulator/ResultInterpretation";
import { FailureRiskMap } from "@/components/simulator/FailureRiskMap";
import { MaterialComparisonMatrix } from "@/components/simulator/MaterialComparisonMatrix";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Simuladores técnicos de sellado",
  description:
    "Simulador educativo para selección preliminar de materiales de sellado según temperatura, químico, movimiento y presión.",
};

const metrics = [
  { value: "6", label: "materiales evaluados" },
  { value: "4", label: "variables operativas" },
  { value: "3", label: "niveles de lectura" },
];

export default function SimuladoresPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-transparent py-14 sm:py-20 lg:py-24">
        <div className="absolute inset-0 darrow-grid opacity-12" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-[50%] divider opacity-28" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/34 via-black/14 to-[#085924]/12" aria-hidden="true" />

        <Container className="relative z-10">
          <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr] xl:items-end">
            <div className="max-w-5xl">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#12A646]">
                Simuladores DARROW
              </p>
              <h1 className="mt-5 text-balance text-5xl font-black leading-[0.94] tracking-tight text-[#F2F2F2] sm:text-7xl 2xl:text-8xl">
                Selección preliminar de materiales y lectura técnica de fallas.
              </h1>
              <p className="mt-7 max-w-4xl text-pretty text-base leading-8 text-[#F2F2F2]/78 sm:text-lg">
                Ajusta condiciones de operación para entender qué materiales pueden funcionar, cuáles quedan condicionados y qué riesgos de falla deben revisarse antes de una selección final.
              </p>
            </div>

            <aside className="rounded-[2rem] border border-[#F2F2F2]/10 bg-[#262626]/70 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.35)] backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#12A646]">Lectura del simulador</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-[#F2F2F2]/10 bg-[#0B0F1A]/70 p-5">
                    <p className="text-4xl font-black text-[#F2F2F2]">{metric.value}</p>
                    <p className="mt-1 text-sm font-semibold text-[#F2F2F2]/66">{metric.label}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <Suspense fallback={<SimulatorFallback />}>
        <MaterialSelector />
      </Suspense>

      <ResultInterpretation />
      <FailureRiskMap />
      <MaterialComparisonMatrix />
    </>
  );
}

function SimulatorFallback() {
  return (
    <section className="bg-transparent py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="rounded-[2rem] border border-[#F2F2F2]/10 bg-transparent p-8 text-[#F2F2F2]">
          Cargando simulador técnico...
        </div>
      </Container>
    </section>
  );
}
