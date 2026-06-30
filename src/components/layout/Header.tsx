import Link from "next/link";
import { BrandMark } from "@/components/brand/BrandMark";
import { mainNavigation } from "@/data/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#F2F2F2]/10 bg-[#0B0F1A]/72 text-[#F2F2F2] shadow-[0_18px_60px_rgba(0,0,0,0.26)] backdrop-blur-md">
      <div className="border-b border-[#F2F2F2]/10 bg-[#0B0F1A]/56">
        <div className="mx-auto flex min-h-8 w-full max-w-[1760px] items-center justify-between px-4 text-xs sm:px-6 lg:px-10 2xl:px-14">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-5 items-center justify-center rounded-full bg-[#085924] text-[10px] font-black text-[#F2F2F2]">W</span>
            <span>+57 317 575 6121</span>
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <span>Centro de Ingeniería del Sellado</span>
            <span className="h-4 w-px bg-[#F2F2F2]/15" />
            <span className="inline-flex gap-2">
              <span className="rounded-full bg-[#111827]/58 px-2 py-1">F</span>
              <span className="rounded-full bg-[#111827]/58 px-2 py-1">T</span>
              <span className="rounded-full bg-[#111827]/58 px-2 py-1">IG</span>
            </span>
            <span>@darrowsas</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex min-h-14.5 w-full max-w-[1760px] items-center justify-between px-4 sm:px-6 lg:px-10 2xl:px-14">
        <Link href="/" aria-label="Ir al inicio" className="inline-flex items-center">
          <BrandMark />
        </Link>

        <nav className="hidden justify-center md:flex" aria-label="Navegación principal">
          <div className="flex items-center gap-1 rounded-full border border-[#F2F2F2]/8 bg-[#0B0F1A]/38 p-1">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-black text-[#F2F2F2]/86 transition hover:bg-[#085924] hover:text-[#F2F2F2]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="hidden items-center justify-end gap-3 sm:flex">
          <Link
            href="/biblioteca"
            className="rounded-full border border-[#F2F2F2]/16 bg-[#111827]/58 px-5 py-3 text-sm font-black text-[#F2F2F2] transition hover:border-[#12A646]/70 hover:bg-[#1C2A20]/72"
          >
            Biblioteca técnica
          </Link>
          <Link
            href="/simuladores"
            className="rounded-full border border-[#12A646] bg-[#085924] px-5 py-3 text-sm font-black text-[#F2F2F2] shadow-[0_0_26px_rgba(18,166,70,0.18)] transition hover:bg-[#12A646]"
          >
            Explorar simuladores
          </Link>
        </div>
      </div>
    </header>
  );
}
