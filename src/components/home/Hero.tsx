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
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(10,15,31,0.72)_0%,rgba(10,15,31,0.38)_48%,rgba(10,15,31,0.2)_100%)]" />

      <Container className="relative z-10 flex min-h-[calc(100vh-120px)] items-center py-6 lg:py-7">
        <div className="grid w-full items-center gap-7 lg:grid-cols-[0.98fr_0.82fr] xl:gap-10">
          <div className="max-w-[820px]">
            <p className="mb-4 inline-flex rounded-full border border-[#12A646]/80 bg-[#085924]/72 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-[#F2F2F2] shadow-[0_0_28px_rgba(18,166,70,0.22)]">
              {brandIdentity.concept}
            </p>

            <h1 className="text-[clamp(2.35rem,3.82vw,5.05rem)] font-black leading-[0.94] tracking-[-0.052em] text-[#F2F2F2]">
              No fabricamos solamente empaquetaduras.
              <span className="mt-3 block text-[#12A646]">
                Ayudamos a entender por qué fallan los sistemas de sellado.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-[#F2F2F2]/78 sm:text-base lg:text-[1.05rem] lg:leading-7">
              Aprende sobre sellos hidráulicos, o-rings, retenedores, materiales,
              presión, temperatura, compatibilidad química, instalación y diagnóstico
              de fallas.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/aprender">Comenzar a aprender</PrimaryButton>
              <PrimaryButton href="/laboratorio" variant="secondary">
                Explorar laboratorio
              </PrimaryButton>
            </div>
          </div>

          <aside className="rounded-[1.7rem] border border-[#F2F2F2]/12 bg-[#07110d]/70 p-4 shadow-[0_16px_46px_rgba(0,0,0,0.24)] backdrop-blur-md sm:p-5 lg:p-5 xl:p-6">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#12A646]">
              DARROW Academy
            </p>

            <h2 className="mt-3 max-w-xl text-[clamp(1.65rem,2.28vw,2.95rem)] font-black leading-[0.99] tracking-[-0.042em] text-[#F2F2F2]">
              Explora, compara y comprende antes de seleccionar.
            </h2>

            <div className="mt-5 grid gap-2.5">
              {academyActions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className="group flex min-h-12 items-center justify-between rounded-2xl border border-[#F2F2F2]/10 bg-[#0B1118]/76 px-4 py-2.5 text-sm font-black text-[#F2F2F2] transition hover:border-[#12A646]/70 hover:bg-[#085924]/45"
                >
                  <span>{action.label}</span>
                  <span className="flex size-7 items-center justify-center rounded-full bg-[#12A646] text-sm text-[#F2F2F2] transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-[#12A646]/18 bg-[#085924]/38 p-3.5"
                >
                  <p className="text-xl font-black leading-none text-[#F2F2F2]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-[11px] font-semibold leading-4 text-[#F2F2F2]/68">
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