import { Container } from "@/components/ui/Container";

const rows = [
  {
    material: "NBR",
    temperature: "-30 a 100 °C",
    fluids: "Aceites minerales, grasas, fluidos hidráulicos",
    strengths: "Económico, buen desempeño general en aceite",
    limits: "No recomendado para ozono, intemperie, vapor o combustibles exigentes",
  },
  {
    material: "FKM",
    temperature: "-20 a 200 °C",
    fluids: "Combustibles, aceites, químicos seleccionados",
    strengths: "Alta temperatura y buena resistencia química",
    limits: "Mayor costo y no ideal para vapor continuo",
  },
  {
    material: "EPDM",
    temperature: "-45 a 150 °C",
    fluids: "Agua caliente, vapor moderado, glicoles",
    strengths: "Excelente para agua, intemperie y ozono",
    limits: "No recomendado para aceites minerales ni hidrocarburos",
  },
  {
    material: "PTFE",
    temperature: "-200 a 260 °C",
    fluids: "Amplia resistencia química",
    strengths: "Muy baja fricción y alta resistencia química",
    limits: "Menor elasticidad, requiere diseño de alojamiento más preciso",
  },
  {
    material: "PU",
    temperature: "-35 a 110 °C",
    fluids: "Aplicaciones hidráulicas y mecánicas",
    strengths: "Alta resistencia al desgaste y extrusión",
    limits: "Debe validarse ante agua caliente, vapor y ciertos químicos",
  },
  {
    material: "Silicona",
    temperature: "-60 a 200 °C",
    fluids: "Ambientes limpios y temperatura amplia",
    strengths: "Muy flexible en frío y estable en temperatura",
    limits: "Menor resistencia mecánica y al desgaste",
  },
];

export function MaterialComparisonMatrix() {
  return (
    <section className="bg-transparent py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#12A646]">
              Comparador técnico
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-tight text-[#F2F2F2] sm:text-6xl">
              Comparación rápida de materiales de sellado.
            </h2>
          </div>
          <p className="max-w-4xl text-base leading-8 text-[#F2F2F2]/72 lg:justify-self-end">
            Esta matriz no reemplaza una ficha técnica ni una validación de ingeniería, pero ayuda a comprender diferencias base entre familias de materiales.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#F2F2F2]/12 bg-[#0B0F1A]/72 shadow-[0_30px_100px_rgba(0,0,0,0.28)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1120px] border-collapse text-left">
              <thead className="bg-[#085924] text-[#F2F2F2]">
                <tr>
                  <th className="px-5 py-4 text-sm font-black">Material</th>
                  <th className="px-5 py-4 text-sm font-black">Rango térmico</th>
                  <th className="px-5 py-4 text-sm font-black">Compatibilidad común</th>
                  <th className="px-5 py-4 text-sm font-black">Fortalezas</th>
                  <th className="px-5 py-4 text-sm font-black">Límites</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.material} className="border-t border-[#F2F2F2]/10 transition hover:bg-[#262626]/72">
                    <td className="px-5 py-5 text-lg font-black text-[#12A646]">{row.material}</td>
                    <td className="px-5 py-5 text-sm leading-6 text-[#F2F2F2]/78">{row.temperature}</td>
                    <td className="px-5 py-5 text-sm leading-6 text-[#F2F2F2]/78">{row.fluids}</td>
                    <td className="px-5 py-5 text-sm leading-6 text-[#F2F2F2]/78">{row.strengths}</td>
                    <td className="px-5 py-5 text-sm leading-6 text-[#F2F2F2]/78">{row.limits}</td>
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
