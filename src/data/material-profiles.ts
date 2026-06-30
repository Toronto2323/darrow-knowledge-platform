export type ChemicalLevel = "Alta" | "Media" | "Baja" | "No recomendado";

export type MaterialProfile = {
  slug: string;
  name: string;
  fullName: string;
  family: string;
  summary: string;
  temperatureRange: string;
  hardness: string;
  costLevel: "Bajo" | "Medio" | "Alto";
  strengths: string[];
  limitations: string[];
  typicalApplications: string[];
  failureRisks: string[];
  compatibility: { oils: ChemicalLevel; water: ChemicalLevel; steam: ChemicalLevel; fuel: ChemicalLevel; acids: ChemicalLevel };
  educationalNote: string;
};

export const materialProfiles: MaterialProfile[] = [
  {
    slug: "nbr",
    name: "NBR",
    fullName: "Caucho nitrilo",
    family: "Elastómero técnico",
    summary: "Material de uso frecuente para aceites minerales, aplicaciones hidráulicas generales y sellado económico con buen equilibrio entre desempeño y costo.",
    temperatureRange: "-30 °C a 100 °C",
    hardness: "60-90 Shore A",
    costLevel: "Bajo",
    strengths: ["Buena compatibilidad orientativa con aceites minerales.", "Costo competitivo frente a elastómeros de alto desempeño.", "Uso común en empaques, o-rings y sellos hidráulicos generales."],
    limitations: ["No es ideal para vapor continuo.", "Puede endurecerse o degradarse a temperatura elevada.", "Compatibilidad limitada frente a ozono, intemperie y algunos químicos agresivos."],
    typicalApplications: ["Sistemas hidráulicos generales", "O-rings para aceite", "Empaques industriales de uso estándar"],
    failureRisks: ["Endurecimiento por temperatura", "Hinchamiento químico", "Pérdida de elasticidad por envejecimiento"],
    compatibility: { oils: "Alta", water: "Media", steam: "Baja", fuel: "Media", acids: "Baja" },
    educationalNote: "NBR suele ser una buena primera referencia cuando el medio principal es aceite mineral y la temperatura se mantiene en rangos moderados.",
  },
  {
    slug: "fkm",
    name: "FKM",
    fullName: "Fluoroelastómero",
    family: "Elastómero de alto desempeño",
    summary: "Elastómero recomendado para temperatura elevada, combustibles, aceites y ambientes químicos más exigentes que los soportados por materiales estándar.",
    temperatureRange: "-20 °C a 200 °C",
    hardness: "65-90 Shore A",
    costLevel: "Alto",
    strengths: ["Muy buena resistencia térmica frente a elastómeros convencionales.", "Buen comportamiento frente a combustibles y aceites.", "Adecuado para aplicaciones donde la vida útil justifica mayor costo."],
    limitations: ["Costo superior a NBR.", "No siempre es la mejor opción para vapor o agua caliente continua.", "Requiere validación química específica según concentración y temperatura."],
    typicalApplications: ["Retenedores y o-rings expuestos a temperatura", "Combustibles y aceites exigentes", "Equipos industriales con ambiente químico severo"],
    failureRisks: ["Ataque químico específico no validado", "Fisuración por montaje incorrecto", "Sobre-especificación por costo si la aplicación no lo requiere"],
    compatibility: { oils: "Alta", water: "Media", steam: "Baja", fuel: "Alta", acids: "Media" },
    educationalNote: "FKM se justifica cuando la condición de operación supera las capacidades de NBR, especialmente por temperatura, combustible o exigencia química.",
  },
  {
    slug: "epdm",
    name: "EPDM",
    fullName: "Etileno propileno dieno",
    family: "Elastómero para agua y vapor",
    summary: "Elastómero recomendado para agua, vapor moderado, intemperie y aplicaciones donde los aceites minerales no son predominantes.",
    temperatureRange: "-40 °C a 150 °C",
    hardness: "50-85 Shore A",
    costLevel: "Medio",
    strengths: ["Buen desempeño frente a agua, vapor moderado e intemperie.", "Buena resistencia al ozono y envejecimiento ambiental.", "Alternativa útil en aplicaciones sanitarias o de agua industrial según formulación."],
    limitations: ["No recomendado para aceites minerales como medio principal.", "Puede hincharse o fallar en contacto con hidrocarburos.", "Debe validarse en presencia de químicos concentrados."],
    typicalApplications: ["Agua industrial", "Vapor moderado", "Sellos expuestos a intemperie"],
    failureRisks: ["Hinchamiento por aceite", "Pérdida de propiedades por químico incompatible", "Extrusión si se usa sin respaldo en presión elevada"],
    compatibility: { oils: "No recomendado", water: "Alta", steam: "Alta", fuel: "No recomendado", acids: "Media" },
    educationalNote: "EPDM no debe seleccionarse solo por temperatura; el medio químico es decisivo, especialmente si hay aceites o combustibles.",
  },
  {
    slug: "ptfe",
    name: "PTFE",
    fullName: "Politetrafluoroetileno",
    family: "Fluoropolímero",
    summary: "Material de baja fricción y alta resistencia química, útil donde los elastómeros convencionales no son suficientes.",
    temperatureRange: "-200 °C a 260 °C",
    hardness: "Material rígido",
    costLevel: "Alto",
    strengths: ["Excelente resistencia química general.", "Muy bajo coeficiente de fricción.", "Amplio rango térmico."],
    limitations: ["Menor elasticidad que un caucho.", "Puede requerir energizadores o diseños especiales.", "No compensa irregularidades de la misma forma que un elastómero blando."],
    typicalApplications: ["Sellos de baja fricción", "Medios químicos exigentes", "Aplicaciones de temperatura extrema"],
    failureRisks: ["Fuga por falta de energización", "Deformación permanente por diseño incorrecto", "Montaje complejo en alojamientos cerrados"],
    compatibility: { oils: "Alta", water: "Alta", steam: "Alta", fuel: "Alta", acids: "Alta" },
    educationalNote: "PTFE no debe evaluarse como un caucho convencional: su valor está en la resistencia química, baja fricción y diseño adecuado del alojamiento.",
  },
  {
    slug: "pu",
    name: "PU",
    fullName: "Poliuretano",
    family: "Elastómero de alta resistencia mecánica",
    summary: "Material destacado por resistencia al desgaste, desgarro y extrusión, común en sellos hidráulicos dinámicos.",
    temperatureRange: "-30 °C a 110 °C",
    hardness: "85-98 Shore A",
    costLevel: "Medio",
    strengths: ["Alta resistencia a abrasión y desgaste.", "Buen desempeño mecánico en movimiento alternativo.", "Útil para sellos de pistón, vástago y limpiadores según diseño."],
    limitations: ["No es la primera opción para temperatura elevada continua.", "Puede afectarse por hidrólisis según formulación y ambiente.", "Compatibilidad química más limitada que PTFE o FKM."],
    typicalApplications: ["Sellos hidráulicos dinámicos", "Limpiadores", "Elementos sometidos a desgaste mecánico"],
    failureRisks: ["Desgaste abrasivo", "Extrusión por presión y holgura", "Degradación por temperatura o hidrólisis"],
    compatibility: { oils: "Alta", water: "Media", steam: "Baja", fuel: "Media", acids: "Baja" },
    educationalNote: "PU suele seleccionarse por exigencia mecánica; si la falla principal es desgaste o extrusión, puede ser más relevante que elegir solo por compatibilidad química.",
  },
  {
    slug: "silicona",
    name: "Silicona",
    fullName: "Silicona VMQ",
    family: "Elastómero flexible de amplio rango térmico",
    summary: "Elastómero flexible para rangos amplios de temperatura, común donde se requiere elasticidad, baja carga mecánica y condiciones específicas de formulación.",
    temperatureRange: "-60 °C a 200 °C",
    hardness: "40-80 Shore A",
    costLevel: "Medio",
    strengths: ["Muy buen comportamiento a baja temperatura.", "Buena flexibilidad y estabilidad térmica.", "Útil en aplicaciones estáticas o de baja exigencia mecánica."],
    limitations: ["Menor resistencia mecánica que PU o NBR.", "No ideal para abrasión o presión alta sin diseño adecuado.", "Compatibilidad química debe validarse por formulación."],
    typicalApplications: ["Sellado estático", "Aplicaciones de temperatura baja o alta moderada", "Sistemas con baja exigencia mecánica"],
    failureRisks: ["Desgarro durante montaje", "Extrusión por presión", "Daño por abrasión dinámica"],
    compatibility: { oils: "Media", water: "Media", steam: "Media", fuel: "Baja", acids: "Baja" },
    educationalNote: "Silicona no se selecciona por resistencia mecánica, sino por flexibilidad y rango térmico cuando la aplicación no es agresiva en presión o abrasión.",
  },
];

export const materialComparisonRows = [
  { criterion: "Temperatura", NBR: "Media", FKM: "Alta", EPDM: "Alta en agua/vapor", PTFE: "Muy alta", PU: "Media", Silicona: "Alta amplitud" },
  { criterion: "Aceites", NBR: "Alta", FKM: "Alta", EPDM: "No recomendado", PTFE: "Alta", PU: "Alta", Silicona: "Media" },
  { criterion: "Combustible", NBR: "Media", FKM: "Alta", EPDM: "No recomendado", PTFE: "Alta", PU: "Media", Silicona: "Baja" },
  { criterion: "Vapor / agua caliente", NBR: "Baja", FKM: "Baja-media", EPDM: "Alta", PTFE: "Alta", PU: "Baja", Silicona: "Media" },
  { criterion: "Desgaste mecánico", NBR: "Media", FKM: "Media", EPDM: "Media", PTFE: "Media según carga", PU: "Alta", Silicona: "Baja" },
  { criterion: "Costo relativo", NBR: "Bajo", FKM: "Alto", EPDM: "Medio", PTFE: "Alto", PU: "Medio", Silicona: "Medio" },
];
