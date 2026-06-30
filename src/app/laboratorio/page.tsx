import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { TopicList } from "@/components/page/TopicList";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Laboratorio interactivo de sellado",
  description:
    "Laboratorio interactivo DARROW para explorar cilindros hidráulicos, motores, bombas y componentes de sellado industrial.",
};

export default function LaboratorioPage() {
  return (
    <>
      <PageHero
        eyebrow="Laboratorio interactivo"
        title="Explora máquinas y componentes como una herramienta educativa."
        description="El laboratorio será la diferencia competitiva de DARROW: modelos interactivos donde el usuario hace clic, identifica componentes y aprende función, desgaste, material y aplicación."
      />

      <Section className="bg-transparent">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <TopicList
              title="Primer modelo recomendado: cilindro hidráulico"
              items={[
                "Pistón",
                "Sello de pistón",
                "Sello de vástago",
                "Limpiador",
                "Guía",
                "O-ring",
                "Back-up ring",
                "Zona de presión",
              ]}
            />

            <div className="rounded-[2rem] border border-[#12A646]/35 bg-[#262626]/72 p-6">
              <div className="rounded-[1.5rem] border border-[#F2F2F2]/10 bg-[#0B0F1A]/72 p-6">
                <div className="h-16 rounded-full bg-gradient-to-r from-[#085924] via-[#12A646] to-[#03A62C]" />
                <div className="mt-6 grid gap-3">
                  {["Función", "Material típico", "Desgaste visible", "Falla probable", "Aplicación"].map((item) => (
                    <div key={item} className="rounded-2xl bg-[#262626]/72 px-4 py-3 text-sm font-semibold text-[#F2F2F2]/78">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
