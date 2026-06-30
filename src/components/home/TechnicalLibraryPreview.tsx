import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const resources = [
  "Normas técnicas",
  "Tablas de materiales",
  "Manuales de instalación",
  "Calculadoras",
  "Glosario técnico",
  "Casos reales",
];

export function TechnicalLibraryPreview() {
  return (
    <Section className="bg-transparent">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#12A646]">
            Biblioteca técnica
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#F2F2F2] sm:text-5xl">
            Contenido indexable, útil y seguro.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#F2F2F2]/75">
            La biblioteca no debe publicar información privada. Debe contener
            conocimiento técnico curado, documentos públicos, guías educativas,
            recursos descargables y páginas optimizadas para SEO semántico.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <article
              key={resource}
              className="rounded-2xl border border-[#F2F2F2]/10 bg-[#262626]/72 p-5"
            >
              <p className="font-black text-[#F2F2F2]">{resource}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
