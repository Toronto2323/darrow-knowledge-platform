"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  type ChemicalContact,
  type MaterialCondition,
  type MovementType,
  type PressureLevel,
  evaluateMaterials,
} from "@/data/materials";
import { Container } from "@/components/ui/Container";

const chemicalOptions: { value: ChemicalContact; label: string }[] = [
  { value: "aceite", label: "Aceite" },
  { value: "agua", label: "Agua" },
  { value: "vapor", label: "Vapor" },
  { value: "acido", label: "Ácido" },
  { value: "combustible", label: "Combustible" },
];

const movementOptions: { value: MovementType; label: string }[] = [
  { value: "estatico", label: "Estático" },
  { value: "alternativo", label: "Alternativo" },
  { value: "rotativo", label: "Rotativo" },
];

const pressureOptions: { value: PressureLevel; label: string }[] = [
  { value: "baja", label: "Baja" },
  { value: "media", label: "Media" },
  { value: "alta", label: "Alta" },
];

export function MaterialSelector() {
  const searchParams = useSearchParams();

  const initialTemperature = readTemperature(searchParams.get("temperature"));
  const initialChemical = readChemical(searchParams.get("chemical"));
  const initialMovement = readMovement(searchParams.get("movement"));
  const initialPressure = readPressure(searchParams.get("pressure"));
  const presetMaterial = searchParams.get("material")?.toUpperCase();

  const [temperature, setTemperature] = useState(initialTemperature);
  const [chemical, setChemical] = useState<ChemicalContact>(initialChemical);
  const [movement, setMovement] = useState<MovementType>(initialMovement);
  const [pressure, setPressure] = useState<PressureLevel>(initialPressure);

  const condition: MaterialCondition = {
    temperature,
    chemical,
    movement,
    pressure,
  };

  const evaluations = useMemo(() => evaluateMaterials(condition), [temperature, chemical, movement, pressure]);
  const best = evaluations[0];
  const recommended = evaluations.filter((item) => item.status === "recomendado");
  const conditioned = evaluations.filter((item) => item.status === "condicionado");
  const discarded = evaluations.filter((item) => item.status === "descartado");

  if (!best) {
    return null;
  }

  return (
    <section id="selector-materiales" className="bg-transparent py-14 sm:py-18 lg:py-20">
      <Container>
        <div className="grid gap-6 xl:grid-cols-[0.86fr_1.14fr] 2xl:grid-cols-[0.78fr_1.22fr]">
          <aside className="rounded-[2rem] border border-[#F2F2F2]/12 bg-[#262626]/72 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:p-7 xl:sticky xl:top-36 xl:self-start">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#12A646]">Simulador educativo</p>
            <h2 className="mt-4 text-balance text-3xl font-black leading-tight text-[#F2F2F2] sm:text-4xl">Selección preliminar de material</h2>
            <p className="mt-4 text-sm leading-7 text-[#F2F2F2]/72">
              Ajusta condiciones de operación. El resultado no reemplaza una ingeniería de aplicación, pero explica por qué un material funciona, se condiciona o se descarta.
            </p>

            {presetMaterial && (
              <div className="mt-5 rounded-2xl border border-[#12A646]/35 bg-[#085924]/45 p-4">
                <p className="text-sm font-black text-[#F2F2F2]">Escenario precargado desde materiales</p>
                <p className="mt-1 text-sm leading-6 text-[#F2F2F2]/74">
                  Llegaste desde una ficha de {presetMaterial}. Puedes modificar los valores para comparar condiciones reales.
                </p>
              </div>
            )}

            <div className="mt-7 space-y-7">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <label htmlFor="temperature" className="text-sm font-black text-[#F2F2F2]">Temperatura de operación</label>
                  <span className="rounded-full bg-[#085924] px-4 py-2 text-sm font-black text-[#F2F2F2]">{temperature} °C</span>
                </div>
                <input
                  id="temperature"
                  type="range"
                  min="-60"
                  max="220"
                  step="5"
                  value={temperature}
                  onChange={(event) => setTemperature(Number(event.target.value))}
                  className="mt-4 w-full accent-[#12A646]"
                />
                <div className="mt-2 flex justify-between text-xs font-semibold text-[#F2F2F2]/45">
                  <span>-60 °C</span>
                  <span>220 °C</span>
                </div>
              </div>

              <OptionGroup title="Contacto químico" options={chemicalOptions} value={chemical} onChange={setChemical} />
              <OptionGroup title="Tipo de movimiento" options={movementOptions} value={movement} onChange={setMovement} />
              <OptionGroup title="Presión" options={pressureOptions} value={pressure} onChange={setPressure} />
            </div>
          </aside>

          <div className="space-y-5">
            <section className="overflow-hidden rounded-[2rem] border border-[#12A646]/45 bg-[#085924] shadow-[0_32px_120px_rgba(8,89,36,0.28)]">
              <div className="grid gap-0 2xl:grid-cols-[0.9fr_1.1fr]">
                <div className="border-b border-[#F2F2F2]/10 p-6 sm:p-8 2xl:border-b-0 2xl:border-r">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.28em] text-[#F2F2F2]/76">Mejor resultado preliminar</p>
                      <h2 className="mt-4 text-5xl font-black leading-none text-[#F2F2F2]">{best.name}</h2>
                      <p className="mt-2 text-sm font-semibold text-[#F2F2F2]/72">{best.fullName}</p>
                    </div>
                    <div className="rounded-3xl bg-[#12A646] px-6 py-4 text-center text-[#F2F2F2] shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                      <p className="text-xs font-black uppercase">Afinidad</p>
                      <p className="text-4xl font-black leading-none">{best.score}%</p>
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-[#F2F2F2]/84">{best.shortDescription}</p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <SmallResult title="Vida útil estimada" value={best.estimatedLife} />
                    <SmallResult title="Rango térmico" value={`${best.temperatureRange[0]} °C a ${best.temperatureRange[1]} °C`} />
                    <SmallResult title="Dureza / tipo" value={best.hardness} />
                  </div>
                </div>

                <div className="grid gap-4 p-6 sm:p-8">
                  <ResultList title="Por qué funciona" items={best.reasons} fallback="No hay razones técnicas suficientes para recomendarlo sin validación adicional." />
                  <ResultList title="Advertencias técnicas" items={best.warnings} fallback="No se detectan advertencias críticas preliminares." />
                </div>
              </div>
            </section>

            <section className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
              {recommended.slice(0, 4).map((item) => (
                <MaterialMiniCard key={item.id} material={item} />
              ))}
              {conditioned.slice(0, 2).map((item) => (
                <MaterialMiniCard key={item.id} material={item} />
              ))}
            </section>

            {discarded.length > 0 && (
              <section className="rounded-[2rem] border border-[#F2F2F2]/10 bg-[#111827]/58 p-5 sm:p-7">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#12A646]">Materiales descartados o de alto riesgo</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {discarded.map((item) => (
                    <div key={item.id} className="rounded-2xl border border-[#F2F2F2]/10 bg-[#262626]/72 p-4">
                      <p className="font-black text-[#F2F2F2]">{item.name}</p>
                      <p className="mt-2 text-sm leading-6 text-[#F2F2F2]/68">
                        {item.rejectionReasons[0] ?? "Requiere validación adicional antes de usarse."}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

type Option<T extends string> = {
  value: T;
  label: string;
};

type OptionGroupProps<T extends string> = {
  title: string;
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
};

function OptionGroup<T extends string>({ title, options, value, onChange }: OptionGroupProps<T>) {
  return (
    <div>
      <p className="text-sm font-black text-[#F2F2F2]">{title}</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 2xl:grid-cols-3">
        {options.map((option) => {
          const active = option.value === value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`min-h-12 rounded-full border px-4 py-3 text-sm font-black transition ${
                active
                  ? "border-[#12A646] bg-[#085924] text-[#F2F2F2] shadow-[0_0_22px_rgba(18,166,70,0.14)]"
                  : "border-[#F2F2F2]/10 bg-[#0B0F1A]/72 text-[#F2F2F2]/78 hover:border-[#12A646]/70 hover:text-[#F2F2F2]"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ResultList({ title, items, fallback }: { title: string; items: string[]; fallback: string }) {
  return (
    <div className="rounded-2xl border border-[#F2F2F2]/10 bg-[#262626]/55 p-5">
      <p className="font-black text-[#12A646]">{title}</p>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-[#F2F2F2]/78">
        {(items.length > 0 ? items : [fallback]).map((item) => (
          <li key={item} className="grid grid-cols-[auto_1fr] gap-2">
            <span className="mt-2 size-1.5 rounded-full bg-[#12A646]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SmallResult({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#F2F2F2]/10 bg-[#0B0F1A]/65 p-4">
      <p className="text-xs font-black uppercase tracking-[0.14em] text-[#12A646]">{title}</p>
      <p className="mt-2 text-sm leading-6 text-[#F2F2F2]/78">{value}</p>
    </div>
  );
}

function MaterialMiniCard({ material }: { material: ReturnType<typeof evaluateMaterials>[number] }) {
  const statusLabel = material.status === "recomendado" ? "Recomendado" : material.status === "condicionado" ? "Condicionado" : "Descartado";
  return (
    <article className="rounded-[1.75rem] border border-[#F2F2F2]/10 bg-[#262626]/72 p-5 transition hover:border-[#12A646]/55">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-2xl font-black leading-none text-[#F2F2F2]">{material.name}</h3>
          <p className="mt-2 text-xs font-semibold text-[#F2F2F2]/60">{material.fullName}</p>
        </div>
        <span className="rounded-full bg-[#085924] px-3 py-1 text-xs font-black text-[#F2F2F2]">{statusLabel}</span>
      </div>
      <p className="mt-4 text-sm leading-6 text-[#F2F2F2]/72">{material.shortDescription}</p>
      <p className="mt-4 text-sm font-black text-[#12A646]">Afinidad: {material.score}%</p>
    </article>
  );
}

function readTemperature(value: string | null) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return 65;
  return Math.max(-60, Math.min(220, Math.round(numeric)));
}

function readChemical(value: string | null): ChemicalContact {
  if (value === "agua" || value === "vapor" || value === "acido" || value === "combustible") return value;
  return "aceite";
}

function readMovement(value: string | null): MovementType {
  if (value === "estatico" || value === "rotativo") return value;
  return "alternativo";
}

function readPressure(value: string | null): PressureLevel {
  if (value === "baja" || value === "alta") return value;
  return "media";
}
