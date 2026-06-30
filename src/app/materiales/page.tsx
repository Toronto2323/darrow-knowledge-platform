import Link from "next/link";
import { MaterialComparisonTable } from "@/components/materials/MaterialComparisonTable";
import { MaterialProfileCard } from "@/components/materials/MaterialProfileCard";
import { SimulatorPresetGrid } from "@/components/materials/SimulatorPresetGrid";
import { Container } from "@/components/ui/Container";
import { materialKnowledgeBase } from "@/data/materials";

export const metadata = {
  title: "Materiales técnicos de sellado",
  description:
    "Aprende sobre NBR, FKM, EPDM, PTFE, poliuretano y silicona para aplicaciones de sellado industrial.",
};

const criteria = [
  {
    title: "Temperatura",
    description: "Rango térmico real, picos de operación y ciclos de arranque/parada.",
  },
  {
    title: "Fluido",
    description: "Aceite, agua, vapor, combustible, ácido o mezcla química específica.",
  },
  {
    title: "Movimiento",
    description: "Estático, alternativo o rotativo; cada caso exige lectura distinta.",
  },
  {
    title: "Presión",
    description: "Riesgo de extrusión, necesidad de respaldo y dureza requerida.",
  },
  {
    title: "Falla esperada",
    description: "Hinchamiento, endurecimiento, desgaste, corte, fuga o ataque químico.",
  },
  {
    title: "Aplicación",
    description: "Hidráulica, neumática, alimentos, minería, automotriz o mantenimiento.",
  },
];

export default function MaterialesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-transparent py-14 sm:py-20 lg:py-24">
        <div className="absolute inset-0 darrow-grid opacity-12" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-[52%] divider opacity-30" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/34 via-black/14 to-[#085924]/12" aria-hidden="true" />

        <Container className="relative z-10">
          <div className="grid gap-10 xl:grid-cols-[1.06fr_0.94fr] xl:items-end">
            <div className="max-w-5xl">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#12A646]">
                Materiales DARROW
              </p>
              <h1 className="mt-5 text-balance text-5xl font-black leading-[0.94] tracking-tight text-[#F2F2F2] sm:text-7xl 2xl:text-8xl">
                Aprende cómo se comporta cada material antes de seleccionarlo.
              </h1>
              <p className="mt-7 max-w-4xl text-pretty text-base leading-8 text-[#F2F2F2]/78 sm:text-lg">
                Cada ficha explica fortalezas, limitaciones, riesgos de falla y escenarios de uso. Desde cada material puedes abrir el simulador con condiciones precargadas.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/simuladores#selector-materiales"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#12A646] bg-[#12A646] px-7 py-3 text-sm font-black text-[#F2F2F2] transition hover:bg-[#03A62C]"
                >
                  Ir al simulador
                </Link>
                <Link
                  href="#fichas-materiales"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#12A646] px-7 py-3 text-sm font-black text-[#F2F2F2] transition hover:bg-[#085924]"
                >
                  Ver fichas técnicas
                </Link>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-[#F2F2F2]/10 bg-[#262626]/70 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#12A646]">Criterios de selección</p>
                  <h2 className="mt-3 text-2xl font-black text-[#F2F2F2]">Lectura técnica antes del material.</h2>
                </div>
                <span className="rounded-full border border-[#12A646]/50 bg-[#085924]/70 px-4 py-2 text-xs font-black text-[#F2F2F2]">
                  6 variables base
                </span>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {criteria.map((item) => (
                  <article key={item.title} className="rounded-2xl border border-[#F2F2F2]/10 bg-[#0B0F1A]/70 p-4">
                    <h3 className="text-sm font-black text-[#F2F2F2]">{item.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-[#F2F2F2]/65">{item.description}</p>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <SimulatorPresetGrid />

      <section id="fichas-materiales" className="bg-transparent py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#12A646]">
                Fichas educativas
              </p>
              <h2 className="mt-4 text-balance text-4xl font-black leading-tight text-[#F2F2F2] sm:text-6xl">
                Material por material, con lectura técnica clara.
              </h2>
            </div>
            <p className="max-w-4xl text-base leading-8 text-[#F2F2F2]/72 lg:justify-self-end">
              Estas fichas son orientativas. La selección final debe validar geometría, fluido real, presión, temperatura, velocidad, acabado superficial y montaje.
            </p>
          </div>

          <div className="mt-10 grid gap-6">
            {materialKnowledgeBase.map((material) => (
              <MaterialProfileCard key={material.id} material={material} />
            ))}
          </div>
        </Container>
      </section>

      <MaterialComparisonTable materials={materialKnowledgeBase} />
    </>
  );
}
