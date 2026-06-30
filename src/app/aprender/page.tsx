import type { Metadata } from "next";
import { FeatureGrid } from "@/components/page/FeatureGrid";
import { PageHero } from "@/components/page/PageHero";
import { TechnicalBand } from "@/components/page/TechnicalBand";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { learningModules } from "@/data/education";

export const metadata: Metadata = {
  title: "Aprender sobre sellado industrial",
  description:
    "Centro educativo de DARROW para aprender sobre empaquetaduras, sellos, o-rings, retenedores, materiales, fallas, instalación y mantenimiento.",
};

export default function AprenderPage() {
  return (
    <>
      <PageHero
        eyebrow="Academia técnica"
        title="Aprende sellado industrial desde fundamentos hasta diagnóstico."
        description="Esta sección organiza el conocimiento de DARROW en rutas educativas para técnicos, ingenieros, compradores y estudiantes. La prioridad es explicar, no vender."
      />

      <Section className="bg-transparent">
        <Container>
          <FeatureGrid items={learningModules} />
        </Container>
      </Section>

      <TechnicalBand
        title="Cada tema debe responder una pregunta real."
        description="La arquitectura educativa debe partir de dudas frecuentes: por qué aparece una fuga, cuándo falla un o-ring, qué significa Shore A, cómo elegir material y qué errores de instalación reducen vida útil."
        metrics={[
          { value: "4", label: "niveles de aprendizaje" },
          { value: "SEO", label: "contenido semántico" },
          { value: "0", label: "datos sensibles expuestos" },
        ]}
      />
    </>
  );
}
