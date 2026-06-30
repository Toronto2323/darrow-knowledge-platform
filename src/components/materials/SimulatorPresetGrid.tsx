import Link from "next/link";
import { buildSimulatorHref, simulatorPresets } from "@/lib/simulator-presets";
import { Container } from "@/components/ui/Container";

export function SimulatorPresetGrid() {
  return (
    <section className="bg-transparent py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-36">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#12A646]">
              Aprender probando
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-tight text-[#F2F2F2] sm:text-5xl">
              Lleva cada material al simulador con un escenario técnico.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#F2F2F2]/72">
              Estos accesos conectan la ficha educativa con condiciones de operación precargadas para comparar resultados y entender riesgos.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
            {simulatorPresets.map((preset) => (
              <Link
                key={preset.materialId}
                href={buildSimulatorHref(preset)}
                className="group rounded-[1.75rem] border border-[#F2F2F2]/10 bg-[#0B0F1A]/72 p-5 transition hover:-translate-y-1 hover:border-[#12A646]/70 hover:bg-[#182014]/74"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#12A646]">
                    Escenario {preset.materialId.toUpperCase()}
                  </p>
                  <span className="grid size-8 place-items-center rounded-full bg-[#085924] text-sm font-black text-[#F2F2F2] transition group-hover:bg-[#12A646]">→</span>
                </div>
                <h3 className="mt-4 text-xl font-black leading-tight text-[#F2F2F2]">{preset.label}</h3>
                <p className="mt-4 text-sm leading-6 text-[#F2F2F2]/72">{preset.description}</p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#F2F2F2]/70">
                  <span className="rounded-full bg-[#262626]/72 px-3 py-2">{preset.temperature} °C</span>
                  <span className="rounded-full bg-[#262626]/72 px-3 py-2">{preset.chemical}</span>
                  <span className="rounded-full bg-[#262626]/72 px-3 py-2">{preset.movement}</span>
                  <span className="rounded-full bg-[#262626]/72 px-3 py-2">presión {preset.pressure}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
