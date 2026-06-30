import type { Metadata } from "next";
import { FeatureGrid } from "@/components/page/FeatureGrid";
import { PageHero } from "@/components/page/PageHero";
import { TopicList } from "@/components/page/TopicList";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { libraryResources } from "@/data/education";

export const metadata: Metadata = {
  title: "Biblioteca técnica DARROW",
  description:
    "Biblioteca técnica educativa con guías, tablas, normas, recursos descargables y casos técnicos anonimizados sobre sellado industrial.",
};

export default function BibliotecaPage() {
  return (
    <>
      <PageHero
        eyebrow="Biblioteca técnica"
        title="Documentación pública, segura e indexable."
        description="La biblioteca debe transformar el conocimiento técnico en recursos útiles para Google y para el usuario, sin exponer precios, clientes, fichas internas o información confidencial."
      />

      <Section className="bg-transparent">
        <Container>
          <FeatureGrid items={libraryResources} />
        </Container>
      </Section>

      <Section className="bg-transparent">
        <Container>
          <TopicList
            title="Criterios de publicación segura"
            items={[
              "Solo documentos públicos o autorizados",
              "Sin precios internos",
              "Sin nombres de clientes",
              "Sin información SAP o comercial privada",
              "Sin planos propietarios",
              "Sin fichas confidenciales de proveedores",
              "Casos anonimizados",
              "Revisión antes de indexar",
            ]}
          />
        </Container>
      </Section>
    </>
  );
}
