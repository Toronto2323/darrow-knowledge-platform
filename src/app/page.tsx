import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { InteractiveLabPreview } from "@/components/home/InteractiveLabPreview";
import { LearningPillars } from "@/components/home/LearningPillars";
import { MaterialSimulatorPreview } from "@/components/home/MaterialSimulatorPreview";
import { TechnicalLibraryPreview } from "@/components/home/TechnicalLibraryPreview";
import { Container } from "@/components/ui/Container";

const audiencePaths = [
  {
    audience: "Ingenieros",
    title: "Selecciona materiales con criterio técnico",
    description:
      "Compara comportamiento frente a temperatura, presión, movimiento y compatibilidad química antes de definir una solución de sellado.",
    href: "/simuladores",
    cta: "Abrir simuladores",
  },
  {
    audience: "Técnicos",
    title: "Diagnostica fallas en campo",
    description:
      "Identifica causas frecuentes de desgaste, extrusión, endurecimiento, hinchamiento, fuga o mala instalación.",
    href: "/laboratorio",
    cta: "Explorar laboratorio",
  },
  {
    audience: "Compradores",
    title: "Compra entendiendo el riesgo",
    description:
      "Aprende por qué dos empaquetaduras visualmente similares pueden tener desempeños totalmente diferentes según el material y la aplicación.",
    href: "/materiales",
    cta: "Comparar materiales",
  },
  {
    audience: "Estudiantes",
    title: "Aprende desde fundamentos",
    description:
      "Construye una base clara sobre o-rings, retenedores, sellos hidráulicos, elastómeros, termoplásticos y modos de falla.",
    href: "/aprender",
    cta: "Comenzar ruta",
  },
];

const knowledgeMap = [
  "Materiales elastoméricos y termoplásticos",
  "Compatibilidad química y térmica",
  "Presión, movimiento y fricción",
  "Diagnóstico de fallas de sellado",
  "Buenas prácticas de instalación",
  "Selección técnica por aplicación",
];

const faqs = [
  {
    question: "¿Cómo elegir el material correcto para una empaquetadura?",
    answer:
      "La selección depende de temperatura, fluido o químico de contacto, presión, tipo de movimiento, dureza requerida y condiciones reales de operación. Por eso DARROW prioriza herramientas educativas y simuladores antes que una recomendación aislada.",
  },
  {
    question: "¿Por qué falla un sistema de sellado industrial?",
    answer:
      "Las fallas suelen originarse por incompatibilidad química, temperatura fuera de rango, presión excesiva, mala instalación, desgaste por fricción, extrusión o selección incorrecta del perfil y material.",
  },
  {
    question: "¿Qué diferencia hay entre NBR, FKM, EPDM, PTFE, PU y silicona?",
    answer:
      "Cada familia de material responde de forma distinta al aceite, vapor, combustibles, ácidos, temperatura, presión y movimiento. La plataforma permite comparar estas diferencias de manera educativa.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <Hero />

      <KnowledgeIntroSection />

      <LearningPillars />

      <AudiencePathsSection />

      <InteractiveLabPreview />

      <MaterialSimulatorPreview />

      <KnowledgeMapSection />

      <TechnicalLibraryPreview />

      <FaqSection />
    </>
  );
}

function KnowledgeIntroSection() {
  return (
    <section className="relative py-10 sm:py-12 lg:py-14">
      <Container>
        <div className="grid gap-6 rounded-[2rem] border border-[#F2F2F2]/10 bg-[#07110d]/62 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.26)] backdrop-blur-md sm:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#12A646]">
              Plataforma educativa DARROW
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-black leading-[1.02] tracking-[-0.04em] text-[#F2F2F2] sm:text-4xl lg:text-5xl">
              Explora el conocimiento técnico detrás de cada sistema de sellado.
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <p className="max-w-3xl text-base leading-7 text-[#F2F2F2]/78 lg:text-lg">
              Esta plataforma no está diseñada como un catálogo tradicional.
              Está pensada para que ingenieros, técnicos, compradores y
              estudiantes comprendan por qué un material funciona, cuándo puede
              fallar y cómo tomar mejores decisiones en aplicaciones reales.
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              <Metric value="Educación" label="antes que venta" />
              <Metric value="Criterio" label="antes que referencia" />
              <Metric value="Contexto" label="antes que ficha técnica" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function AudiencePathsSection() {
  return (
    <section className="relative py-10 sm:py-12 lg:py-16">
      <Container>
        <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#12A646]">
              Rutas de aprendizaje
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-[1.02] tracking-[-0.04em] text-[#F2F2F2] sm:text-4xl lg:text-5xl">
              Cada usuario llega con una pregunta distinta. La plataforma debe
              responder con claridad.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-[#F2F2F2]/70 lg:text-base">
            Organizamos el conocimiento por intención de uso, no únicamente por
            producto. Esto mejora la experiencia, la comprensión técnica y el
            posicionamiento orgánico.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {audiencePaths.map((path) => (
            <article
              key={path.audience}
              className="group flex min-h-[280px] flex-col justify-between rounded-[1.6rem] border border-[#F2F2F2]/10 bg-[#07110d]/58 p-5 shadow-[0_14px_44px_rgba(0,0,0,0.22)] backdrop-blur-md transition hover:-translate-y-1 hover:border-[#12A646]/45 hover:bg-[#085924]/42"
            >
              <div>
                <p className="inline-flex rounded-full border border-[#12A646]/35 bg-[#12A646]/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#12A646]">
                  {path.audience}
                </p>

                <h3 className="mt-5 text-2xl font-black leading-[1.04] tracking-[-0.03em] text-[#F2F2F2]">
                  {path.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#F2F2F2]/72">
                  {path.description}
                </p>
              </div>

              <Link
                href={path.href}
                className="mt-6 inline-flex items-center justify-between rounded-2xl border border-[#F2F2F2]/10 bg-[#0B1118]/70 px-4 py-3 text-sm font-black text-[#F2F2F2] transition group-hover:border-[#12A646]/70 group-hover:bg-[#12A646] group-hover:text-white"
              >
                {path.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function KnowledgeMapSection() {
  return (
    <section className="relative py-10 sm:py-12 lg:py-16">
      <Container>
        <div className="grid gap-6 rounded-[2rem] border border-[#12A646]/16 bg-[#0B1118]/64 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-md sm:p-7 lg:grid-cols-[0.85fr_1.15fr] lg:p-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#12A646]">
              Mapa de conocimiento
            </p>

            <h2 className="mt-4 text-3xl font-black leading-[1.02] tracking-[-0.04em] text-[#F2F2F2] sm:text-4xl lg:text-5xl">
              La autoridad técnica se construye conectando conceptos.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#F2F2F2]/72">
              Cada módulo debe enlazar con otros contenidos para que el usuario
              pueda pasar de una duda básica a una decisión técnica más completa.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {knowledgeMap.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-[#F2F2F2]/10 bg-[#07110d]/58 p-4"
              >
                <span className="text-xs font-black text-[#12A646]">
                  0{index + 1}
                </span>
                <p className="mt-3 text-base font-black leading-5 text-[#F2F2F2]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="relative py-10 pb-16 sm:py-12 sm:pb-20 lg:py-16 lg:pb-24">
      <Container>
        <div className="mb-7 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.26em] text-[#12A646]">
            Preguntas frecuentes
          </p>

          <h2 className="mt-3 text-3xl font-black leading-[1.02] tracking-[-0.04em] text-[#F2F2F2] sm:text-4xl lg:text-5xl">
            Respuestas claras para decisiones técnicas más seguras.
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-[1.5rem] border border-[#F2F2F2]/10 bg-[#07110d]/58 p-5 shadow-[0_14px_44px_rgba(0,0,0,0.2)] backdrop-blur-md"
            >
              <h3 className="text-lg font-black leading-6 text-[#F2F2F2]">
                {faq.question}
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#F2F2F2]/72">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-[#12A646]/18 bg-[#085924]/34 p-4">
      <p className="text-lg font-black leading-none text-[#F2F2F2]">{value}</p>
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#F2F2F2]/58">
        {label}
      </p>
    </div>
  );
}