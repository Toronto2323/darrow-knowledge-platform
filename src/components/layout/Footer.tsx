import Link from "next/link";
import { BrandMark } from "@/components/brand/BrandMark";
import { mainNavigation } from "@/data/navigation";

const footerColumns = [
  {
    title: "Aprendizaje",
    links: [
      { label: "Aprender", href: "/aprender" },
      { label: "Materiales", href: "/materiales" },
      { label: "Glosario", href: "/glosario" },
    ],
  },
  {
    title: "Herramientas",
    links: [
      { label: "Simuladores", href: "/simuladores" },
      { label: "Laboratorio", href: "/laboratorio" },
      { label: "Biblioteca", href: "/biblioteca" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[#F2F2F2]/10 bg-[#262626]/72 text-[#F2F2F2]">
      <div className="mx-auto grid w-full max-w-[1680px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-10 2xl:px-12">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#F2F2F2]/70">
            Plataforma educativa para comprender sistemas de sellado industrial, materiales, fallas, instalación, mantenimiento y aplicaciones reales.
          </p>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#12A646]">{column.title}</p>
            <nav className="mt-5 grid gap-3 text-sm font-semibold text-[#F2F2F2]/74" aria-label={column.title}>
              {column.links.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-[#12A646]">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        ))}

        <div className="rounded-3xl border border-[#F2F2F2]/10 bg-[#0B0F1A]/50 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#12A646]">Seguridad de contenido</p>
          <p className="mt-4 text-sm leading-7 text-[#F2F2F2]/70">
            Divulgamos conocimiento técnico sin exponer precios internos, datos privados de clientes ni documentación confidencial de DARROW.
          </p>
        </div>
      </div>

      <div className="border-t border-[#F2F2F2]/10 py-5">
        <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-3 px-5 text-xs font-semibold text-[#F2F2F2]/55 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 2xl:px-12">
          <span>DARROW Knowledge Platform</span>
          <span>{mainNavigation.length} módulos educativos conectados</span>
        </div>
      </div>
    </footer>
  );
}
