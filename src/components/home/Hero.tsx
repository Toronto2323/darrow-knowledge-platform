import Link from "next/link";
import { brandIdentity } from "@/lib/brand";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const academyActions = [
  {
    label: "Explorar materiales",
    href: "/materiales",
  },
  {
    label: "Aprender conceptos",
    href: "/aprender",
  },
  {
    label: "Simular condiciones",
    href: "/simuladores",
  },
  {
    label: "Ver casos técnicos",
    href: "/biblioteca",
  },
];

const heroMetrics = [
  {
    value: "6",
    label: "familias de materiales",
  },
  {
    value: "4",
    label: "variables de simulación",
  },
  {
    value: "100%",
    label: "enfoque educativo",
  },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Container className="relative z-10 flex min-h-[calc(100vh-118px)] items-center py-6 lg:py-8">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1.04fr_0.96fr] xl:gap-12">
          <div className="max-w-215">
            <p className="mb-5 inline-flex rounded-full border border-[#12A646] bg-[#085924]/70 px-5 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#F2F2F2] shadow-[0_0_40px_rgba(18,166,70,0.28)]">
              {brandIdentity.concept}
            </p>

            <h1 className="text-[clamp(2.6rem,4.25vw,5.65rem)] font-black leading-[0.93] tracking-tighter text-[#F2F2F2]">
              No fabricamos solamente empaquetaduras.
              <span className="mt-4 block text-[#12A646]">
                Ayudamos a entender por qué fallan los sistemas de sellado.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#F2F2F2]/82 lg:text-lg">
              Aprende sobre sellos hidráulicos, o-rings, retenedores, materiales,
              presión, temperatura, compatibilidad química, instalación y diagnóstico
              de fallas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/aprender">Comenzar a aprender</PrimaryButton>
              <PrimaryButton href="/laboratorio" variant="secondary">
                Explorar laboratorio
              </PrimaryButton>
            </div>
          </div>

          <aside className="rounded-4xl border border-[#F2F2F2]/12 bg-[#07110d]/72 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-md lg:p-6 xl:p-7">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#12A646]">
              DARROW Academy
            </p>

            <h2 className="mt-3 max-w-xl text-[clamp(1.75rem,2.65vw,3.35rem)] font-black leading-[0.98] tracking-[-0.04em] text-[#F2F2F2]">
              Explora, compara y comprende antes de seleccionar.
            </h2>

            <div className="mt-6 grid gap-3">
              {academyActions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className="group flex min-h-14 items-center justify-between rounded-2xl border border-[#F2F2F2]/10 bg-[#0B1118]/78 px-5 py-3 text-sm font-black text-[#F2F2F2] transition hover:border-[#12A646]/70 hover:bg-[#085924]/45"
                >
                  <span>{action.label}</span>
                  <span className="flex size-8 items-center justify-center rounded-full bg-[#12A646] text-[#F2F2F2] transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-[#12A646]/18 bg-[#085924]/40 p-4"
                >
                  <p className="text-2xl font-black leading-none text-[#F2F2F2]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs font-semibold leading-4 text-[#F2F2F2]/70">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}