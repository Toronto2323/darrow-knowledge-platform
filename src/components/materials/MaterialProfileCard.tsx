import Link from "next/link";
import type { MaterialKnowledge } from "@/data/materials";
import { buildSimulatorHref, getPresetByMaterial } from "@/lib/simulator-presets";

type MaterialProfileCardProps = {
  material: MaterialKnowledge;
};

export function MaterialProfileCard({ material }: MaterialProfileCardProps) {
  const preset = getPresetByMaterial(material.id);

  return (
    <article className="overflow-hidden rounded-[2rem] border border-[#F2F2F2]/10 bg-[#111827]/58 shadow-[0_22px_80px_rgba(0,0,0,0.22)] transition hover:border-[#12A646]/60">
      <div className="grid gap-0 xl:grid-cols-[0.72fr_1.28fr]">
        <div className="border-b border-[#F2F2F2]/10 bg-[#0B0F1A]/70 p-6 sm:p-7 xl:border-b-0 xl:border-r">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#12A646]">
            Perfil técnico educativo
          </p>
          <h2 className="mt-4 text-4xl font-black leading-none text-[#F2F2F2]">{material.name}</h2>
          <p className="mt-2 text-sm font-semibold text-[#F2F2F2]/65">{material.fullName}</p>
          <p className="mt-5 text-sm leading-7 text-[#F2F2F2]/76">{material.shortDescription}</p>

          {preset && (
            <Link
              href={buildSimulatorHref(preset)}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#12A646] bg-[#085924] px-5 py-3 text-sm font-black text-[#F2F2F2] transition hover:bg-[#12A646] sm:w-auto"
            >
              Probar en simulador
            </Link>
          )}
        </div>

        <div className="p-6 sm:p-7">
          <div className="grid gap-4 md:grid-cols-3">
            <Metric title="Rango térmico" value={`${material.temperatureRange[0]} °C a ${material.temperatureRange[1]} °C`} />
            <Metric title="Dureza / tipo" value={material.hardness} />
            <Metric title="Costo relativo" value={material.costLevel} />
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-3">
            <InfoList title="Fortalezas" items={material.strengths} />
            <InfoList title="Limitaciones" items={material.limitations} />
            <InfoList title="Riesgos de falla" items={material.risks} />
          </div>

          {preset && (
            <div className="mt-5 rounded-2xl border border-[#12A646]/35 bg-[#085924]/45 p-5">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm font-black text-[#F2F2F2]">Escenario recomendado para practicar</p>
                  <p className="mt-2 text-sm leading-6 text-[#F2F2F2]/78">{preset.description}</p>
                </div>
                <p className="shrink-0 rounded-full bg-[#0B0F1A]/60 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#F2F2F2]/76">
                  {preset.temperature} °C · {preset.chemical} · {preset.movement} · presión {preset.pressure}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#F2F2F2]/10 bg-[#262626]/72 p-4">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#12A646]">{title}</p>
      <p className="mt-2 text-base font-black leading-tight text-[#F2F2F2]">{value}</p>
    </div>
  );
}

type InfoListProps = {
  title: string;
  items: string[];
};

function InfoList({ title, items }: InfoListProps) {
  return (
    <div className="rounded-2xl border border-[#F2F2F2]/10 bg-[#262626]/72 p-5">
      <h3 className="text-xs font-black uppercase tracking-[0.18em] text-[#12A646]">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-[#F2F2F2]/74">
        {items.map((item) => (
          <li key={item} className="grid grid-cols-[auto_1fr] gap-2">
            <span className="mt-2 size-1.5 rounded-full bg-[#12A646]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
