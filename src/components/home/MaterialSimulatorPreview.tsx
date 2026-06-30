import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const simulatorInputs = ["Temperatura", "Contacto químico", "Movimiento", "Presión"];

export function MaterialSimulatorPreview() {
  return (
    <Section className="bg-transparent">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 rounded-[2rem] border border-[#F2F2F2]/10 bg-[#0B0F1A]/72 p-6 lg:order-1">
            <div className="space-y-4">
              {simulatorInputs.map((input) => (
                <div key={input} className="rounded-2xl bg-[#262626]/72 p-5">
                  <p className="text-sm font-black text-[#12A646]">{input}</p>
                  <div className="mt-3 h-3 rounded-full bg-[#0B0F1A]/72">
                    <div className="h-3 w-2/3 rounded-full bg-[#12A646]" />
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border border-[#12A646]/35 bg-[#085924] p-5">
                <p className="text-sm font-black text-[#F2F2F2]">Resultado educativo</p>
                <p className="mt-2 text-[#F2F2F2]/82">
                  Material recomendado, razones técnicas, descartes y productos compatibles.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#12A646]">
              Simulador de materiales
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#F2F2F2] sm:text-5xl">
              Recomendaciones explicadas, no respuestas vacías.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#F2F2F2]/75">
              El usuario responderá condiciones de operación y la plataforma
              explicará qué materiales funcionan, cuáles se descartan y por qué.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
