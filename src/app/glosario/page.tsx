import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { TopicList } from "@/components/page/TopicList";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { glossaryTopics } from "@/data/education";

export const metadata: Metadata = {
  title: "Glosario técnico de sellado industrial",
  description:
    "Glosario educativo sobre o-rings, extrusión, Shore A, back-up rings, sellado dinámico, sellado estático y compatibilidad química.",
};

export default function GlosarioPage() {
  return (
    <>
      <PageHero
        eyebrow="Glosario técnico"
        title="Cada término técnico puede convertirse en una página educativa."
        description="El glosario será uno de los motores SEO de DARROW Academy: definiciones claras, ejemplos, aplicaciones, errores comunes y enlaces internos hacia materiales, fallas y simuladores."
      />

      <Section className="bg-transparent">
        <Container>
          <TopicList title="Primeros términos priorizados" items={glossaryTopics} />
        </Container>
      </Section>

      <Section className="bg-transparent">
        <Container>
          <div className="rounded-[2rem] border border-[#12A646]/35 bg-[#085924] p-8 text-[#F2F2F2]">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#F2F2F2]/70">
              Estructura SEO recomendada
            </p>
            <h2 className="mt-3 text-3xl font-black">Definición + aplicación + falla + enlace interno.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#F2F2F2]/78">
              Cada entrada debe explicar qué significa el término, dónde se usa, qué errores lo afectan y qué páginas relacionadas debe visitar el usuario para seguir aprendiendo.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
