"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import {
  hydraulicCylinderComponents,
  type LabComponent,
} from "../../data/lab-models";

const failureModes = [
  {
    label: "Fuga externa",
    componentId: "rod-seal",
  },
  {
    label: "Pérdida de fuerza",
    componentId: "piston-seal",
  },
  {
    label: "Material extruido",
    componentId: "backup-ring",
  },
  {
    label: "Vástago rayado",
    componentId: "wiper",
  },
  {
    label: "Desgaste irregular",
    componentId: "guide-ring",
  },
  {
    label: "Hinchamiento",
    componentId: "o-ring",
  },
];

export function InteractiveSealLab() {
  const [selectedId, setSelectedId] = useState("rod-seal");

  const selectedComponent = useMemo(() => {
    return (
      hydraulicCylinderComponents.find(
        (component) => component.id === selectedId,
      ) ?? hydraulicCylinderComponents[0]
    );
  }, [selectedId]);

  return (
    <section className="relative py-10 sm:py-12 lg:py-16">
      <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <div className="rounded-[2rem] border border-[#F2F2F2]/10 bg-[#07110d]/58 p-4 shadow-[0_16px_54px_rgba(0,0,0,0.24)] backdrop-blur-md sm:p-5">
          <div className="mb-5 flex flex-col gap-3 border-b border-[#F2F2F2]/10 pb-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#12A646]">
                Modelo activo
              </p>
              <h2 className="mt-2 text-2xl font-black leading-[1.02] tracking-[-0.035em] text-[#F2F2F2] sm:text-3xl">
                Cilindro hidráulico de doble efecto
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-[#F2F2F2]/68">
              Haz clic en un componente para ver función, fallas, causas y
              revisión recomendada.
            </p>
          </div>

          <HydraulicCylinderVisual
            selectedId={selectedId}
            onSelect={setSelectedId}
          />

          <div className="mt-5 rounded-[1.5rem] border border-[#F2F2F2]/10 bg-[#0B1118]/64 p-4">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#12A646]">
              Diagnóstico rápido por síntoma
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {failureModes.map((failure) => (
                <button
                  key={failure.label}
                  type="button"
                  onClick={() => setSelectedId(failure.componentId)}
                  className="rounded-full border border-[#F2F2F2]/10 bg-[#262626]/40 px-3 py-2 text-xs font-bold text-[#F2F2F2]/76 transition hover:border-[#12A646]/60 hover:bg-[#085924]/50 hover:text-white"
                >
                  {failure.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <LabInsightPanel component={selectedComponent} />
      </div>
    </section>
  );
}

function HydraulicCylinderVisual({
  selectedId,
  onSelect,
}: {
  selectedId: string;
  onSelect: (componentId: string) => void;
}) {
  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-[1.7rem] border border-[#12A646]/20 bg-[#0B1118]/76 p-4 sm:p-6">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute left-[8%] top-[44%] h-24 w-[78%] rounded-full border border-[#F2F2F2]/12 bg-[#262626]/42" />
        <div className="absolute left-[14%] top-[48%] h-12 w-[68%] rounded-full bg-gradient-to-r from-[#085924]/80 via-[#12A646]/80 to-[#03A62C]/70 shadow-[0_0_50px_rgba(18,166,70,0.22)]" />
        <div className="absolute left-[76%] top-[51%] h-5 w-[20%] rounded-full bg-[#F2F2F2]/52" />
        <div className="absolute left-[35%] top-[37%] h-36 w-5 rounded-full bg-[#F2F2F2]/22" />
        <div className="absolute left-[32%] top-[35%] h-40 w-20 rounded-[2rem] border border-[#F2F2F2]/12 bg-[#111827]/70" />
      </div>

      {hydraulicCylinderComponents.map((component) => {
        const isSelected = selectedId === component.id;

        return (
          <button
            key={component.id}
            type="button"
            onClick={() => onSelect(component.id)}
            className={`absolute ${component.positionClass} z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-2 text-xs font-black transition focus:outline-none focus:ring-2 focus:ring-[#12A646] ${
              isSelected
                ? "border-[#12A646] bg-[#12A646] text-white shadow-[0_0_34px_rgba(18,166,70,0.55)]"
                : "border-[#F2F2F2]/14 bg-[#07110d]/86 text-[#F2F2F2]/78 hover:border-[#12A646]/70 hover:bg-[#085924]"
            }`}
            aria-pressed={isSelected}
          >
            {component.shortName}
          </button>
        );
      })}

      <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-[#F2F2F2]/10 bg-[#07110d]/78 p-4 backdrop-blur-md">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#12A646]">
          Lectura del modelo
        </p>
        <p className="mt-2 text-sm leading-6 text-[#F2F2F2]/70">
          El objetivo no es reemplazar una ficha técnica. Es enseñar cómo se
          relacionan componente, función, síntoma y causa probable.
        </p>
      </div>
    </div>
  );
}

function LabInsightPanel({ component }: { component: LabComponent }) {
  return (
    <aside className="rounded-[2rem] border border-[#12A646]/22 bg-[#07110d]/68 p-5 shadow-[0_16px_54px_rgba(0,0,0,0.24)] backdrop-blur-md">
      <p className="text-xs font-black uppercase tracking-[0.24em] text-[#12A646]">
        Componente seleccionado
      </p>

      <h2 className="mt-3 text-3xl font-black leading-[1.02] tracking-[-0.04em] text-[#F2F2F2]">
        {component.name}
      </h2>

      <p className="mt-2 text-sm font-bold text-[#F2F2F2]/54">
        Sistema: {component.system}
      </p>

      <div className="mt-6 space-y-4">
        <InsightBlock title="Función técnica">
          <p>{component.function}</p>
        </InsightBlock>

        <InsightBlock title="Materiales típicos">
          <TagList items={component.typicalMaterials} />
        </InsightBlock>

        <InsightBlock title="Fallas visibles">
          <BulletList items={component.visibleFailures} />
        </InsightBlock>

        <InsightBlock title="Causas probables">
          <BulletList items={component.probableCauses} />
        </InsightBlock>

        <InsightBlock title="Qué revisar antes de reemplazar">
          <BulletList items={component.inspectionChecklist} />
        </InsightBlock>

        <InsightBlock title="Conceptos relacionados">
          <TagList items={component.relatedConcepts} />
        </InsightBlock>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Link
          href={component.simulatorHref}
          className="inline-flex items-center justify-center rounded-full bg-[#12A646] px-4 py-3 text-sm font-black text-white transition hover:bg-[#03A62C]"
        >
          Simular condiciones
        </Link>

        <Link
          href={component.materialsHref}
          className="inline-flex items-center justify-center rounded-full border border-[#F2F2F2]/12 bg-[#0B1118]/70 px-4 py-3 text-sm font-black text-[#F2F2F2] transition hover:border-[#12A646]/60 hover:bg-[#085924]/40"
        >
          Ver materiales
        </Link>
      </div>
    </aside>
  );
}

function InsightBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-[#F2F2F2]/10 bg-[#0B1118]/58 p-4">
      <h3 className="text-xs font-black uppercase tracking-[0.18em] text-[#12A646]">
        {title}
      </h3>
      <div className="mt-3 text-sm leading-6 text-[#F2F2F2]/72">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#12A646]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-[#12A646]/18 bg-[#085924]/34 px-3 py-1.5 text-xs font-bold text-[#F2F2F2]/78"
        >
          {item}
        </span>
      ))}
    </div>
  );
}