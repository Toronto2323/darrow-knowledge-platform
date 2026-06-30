import type { MaterialKnowledge } from "@/data/materials";
import { Container } from "@/components/ui/Container";

type MaterialComparisonTableProps = {
  materials: MaterialKnowledge[];
};

export function MaterialComparisonTable({ materials }: MaterialComparisonTableProps) {
  return (
    <section className="bg-transparent py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#12A646]">
              Comparador DARROW
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-tight text-[#F2F2F2] sm:text-6xl">
              Comparación técnica orientativa entre materiales.
            </h2>
          </div>
          <p className="max-w-4xl text-base leading-8 text-[#F2F2F2]/72 lg:justify-self-end">
            Esta matriz ayuda a comparar rangos, costo relativo y compatibilidad general antes de llevar el caso al simulador.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#F2F2F2]/10 bg-[#111827]/58 shadow-[0_30px_100px_rgba(0,0,0,0.28)]">
          <div className="overflow-x-auto">
            <table className="min-w-[1120px] w-full border-collapse text-left text-sm">
              <thead className="bg-[#085924] text-[#F2F2F2]">
                <tr>
                  <th className="p-5 font-black">Material</th>
                  <th className="p-5 font-black">Temperatura</th>
                  <th className="p-5 font-black">Aceite</th>
                  <th className="p-5 font-black">Agua</th>
                  <th className="p-5 font-black">Vapor</th>
                  <th className="p-5 font-black">Combustible</th>
                  <th className="p-5 font-black">Costo</th>
                  <th className="p-5 font-black">Uso típico</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((material) => (
                  <tr key={material.id} className="border-t border-[#F2F2F2]/10 text-[#F2F2F2]/76 transition hover:bg-[#262626]/72">
                    <td className="p-5 align-top">
                      <p className="text-lg font-black text-[#F2F2F2]">{material.name}</p>
                      <p className="mt-1 text-xs font-semibold text-[#F2F2F2]/55">{material.fullName}</p>
                    </td>
                    <td className="p-5 align-top font-semibold">{material.temperatureRange[0]} °C a {material.temperatureRange[1]} °C</td>
                    <ScoreCell score={material.chemicalCompatibility.aceite} />
                    <ScoreCell score={material.chemicalCompatibility.agua} />
                    <ScoreCell score={material.chemicalCompatibility.vapor} />
                    <ScoreCell score={material.chemicalCompatibility.combustible} />
                    <td className="p-5 align-top font-semibold">{material.costLevel}</td>
                    <td className="p-5 align-top leading-6">{material.applications.slice(0, 2).join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ScoreCell({ score }: { score: number }) {
  const label = scoreLabel(score);
  return (
    <td className="p-5 align-top">
      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-black ${scoreClass(score)}`}>
        {label}
      </span>
    </td>
  );
}

function scoreLabel(score: number) {
  if (score >= 80) return "Alta";
  if (score >= 55) return "Media";
  return "Baja";
}

function scoreClass(score: number) {
  if (score >= 80) return "bg-[#085924] text-[#F2F2F2]";
  if (score >= 55) return "bg-[#262626]/72 text-[#F2F2F2] border border-[#F2F2F2]/12";
  return "bg-[#0B0F1A]/72 text-[#F2F2F2]/72 border border-[#F2F2F2]/12";
}
