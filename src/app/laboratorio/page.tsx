import type { Metadata } from "next";
import { InteractiveSealLab } from "@/components/lab/InteractiveSealLab";
import { PageHero } from "@/components/page/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Laboratorio interactivo de sellado | DARROW",
  description:
    "Laboratorio interactivo DARROW para explorar componentes de sellado, diagnosticar fallas visibles y comprender causas probables en sistemas hidráulicos.",
};

const labObjectives = [
  "Identificar componentes de un sistema de sellado.",
  "Comprender la función técnica de cada pieza.",
  "Relacionar síntomas visibles con causas probables.",
  "Conectar el diagnóstico con materiales y simuladores.",
];

export default function LaboratorioPage() {
  return (
    <>
      <PageHero
        eyebrow="Laboratorio interactivo"
        title="Diagnostica sistemas de sellado haciendo clic sobre sus componentes."
        description="Explora un modelo técnico de cilindro hidráulico, selecciona cada componente y aprende función, materiales típicos, fallas visibles, causas probables y revisiones recomendadas antes de reemplazar una pieza."
      />

      <Container>
        <section className="relative -mt-8 rounded-[2rem] border border-[#F2F2F2]/10 bg-[#07110d]/58 p-5 shadow-[0_16px_54px_rgba(0,0,0,0.22)] backdrop-blur-md sm:p-6 lg:p-7">
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#12A646]">
                Finalidad del laboratorio
              </p>
              <h2 className="mt-3 text-2xl font-black leading-[1.05] tracking-[-0.035em] text-[#F2F2F2] sm:text-3xl">
                Convertir una máquina en una experiencia de aprendizaje técnico.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {labObjectives.map((objective) => (
                <div
                  key={objective}
                  className="rounded-2xl border border-[#F2F2F2]/10 bg-[#0B1118]/58 p-4 text-sm font-semibold leading-6 text-[#F2F2F2]/72"
                >
                  {objective}
                </div>
              ))}
            </div>
          </div>
        </section>

        <InteractiveSealLab />
      </Container>
    </>
  );
}