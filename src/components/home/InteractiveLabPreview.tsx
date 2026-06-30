import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function InteractiveLabPreview() {
  return (
    <Section className="bg-transparent">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#12A646]">
              Laboratorio interactivo
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#F2F2F2] sm:text-5xl">
              Aprende haciendo clic sobre el sistema.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#F2F2F2]/75">
              El usuario podrá explorar cilindros hidráulicos, motores, bombas
              y máquinas industriales para descubrir dónde actúan los sellos,
              guías, limpiadores, o-rings, respaldos y retenedores.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#12A646]/35 bg-[#262626]/72 p-6 shadow-2xl">
            <div className="rounded-[1.5rem] border border-[#F2F2F2]/10 bg-[#0B0F1A]/72 p-6">
              <div className="mb-6 h-8 rounded-full bg-[#262626]/72" />
              <div className="grid gap-4">
                {["Pistón", "Sello", "Limpiador", "Guía", "O-ring", "Back-up ring"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-[#F2F2F2]/10 bg-[#262626]/72 p-4"
                    >
                      <span className="font-semibold text-[#F2F2F2]">{item}</span>
                      <span className="rounded-full bg-[#085924] px-3 py-1 text-xs font-black text-[#F2F2F2]">
                        Explorar
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
