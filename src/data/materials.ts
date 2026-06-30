export type ChemicalContact = "aceite" | "agua" | "vapor" | "acido" | "combustible";
export type MovementType = "estatico" | "alternativo" | "rotativo";
export type PressureLevel = "baja" | "media" | "alta";
export type RecommendationStatus = "recomendado" | "condicionado" | "descartado";

export type MaterialCondition = {
  temperature: number;
  chemical: ChemicalContact;
  movement: MovementType;
  pressure: PressureLevel;
};

export type MaterialKnowledge = {
  id: string;
  name: string;
  fullName: string;
  shortDescription: string;
  temperatureRange: [number, number];
  hardness: string;
  costLevel: "Bajo" | "Medio" | "Alto" | "Muy alto";
  chemicalCompatibility: Record<ChemicalContact, number>;
  movementCompatibility: Record<MovementType, number>;
  pressureCompatibility: Record<PressureLevel, number>;
  strengths: string[];
  limitations: string[];
  risks: string[];
  applications: string[];
  compatibleProducts: string[];
  usefulLife: {
    high: string;
    medium: string;
    low: string;
  };
};

export type MaterialEvaluation = MaterialKnowledge & {
  score: number;
  status: RecommendationStatus;
  reasons: string[];
  warnings: string[];
  rejectionReasons: string[];
  estimatedLife: string;
};

export const materialKnowledgeBase: MaterialKnowledge[] = [
  {
    id: "nbr",
    name: "NBR",
    fullName: "Caucho nitrilo",
    shortDescription:
      "Elastomero de uso frecuente para aceites minerales, aplicaciones hidraulicas generales y sellado economico.",
    temperatureRange: [-30, 100],
    hardness: "60-90 Shore A",
    costLevel: "Bajo",
    chemicalCompatibility: {
      aceite: 95,
      agua: 55,
      vapor: 20,
      acido: 25,
      combustible: 70,
    },
    movementCompatibility: {
      estatico: 90,
      alternativo: 82,
      rotativo: 58,
    },
    pressureCompatibility: {
      baja: 90,
      media: 78,
      alta: 52,
    },
    strengths: [
      "Muy buen desempeno frente a aceites minerales.",
      "Buena relacion costo-beneficio.",
      "Disponible en multiples durezas para sellado general.",
    ],
    limitations: [
      "No es ideal para vapor continuo.",
      "Limitado frente a temperaturas elevadas.",
      "Puede endurecerse con ozono, intemperie o calor excesivo.",
    ],
    risks: ["Endurecimiento", "Hinchamiento", "Perdida de elasticidad"],
    applications: ["O-rings", "sellos hidraulicos", "retenedores", "juntas estaticas"],
    compatibleProducts: ["O-rings NBR", "retenedores", "sellos hidraulicos", "empaques planos"],
    usefulLife: {
      high: "Alta, si la aplicacion trabaja con aceite mineral y temperatura moderada.",
      medium: "Media, si hay presion o movimiento moderado con control de temperatura.",
      low: "Baja, si hay vapor, acidos o temperatura cercana al limite superior.",
    },
  },
  {
    id: "fkm",
    name: "FKM",
    fullName: "Fluoroelastomero",
    shortDescription:
      "Elastomero de alto desempeno para temperatura elevada, combustibles, aceites y ambientes quimicos exigentes.",
    temperatureRange: [-20, 200],
    hardness: "65-90 Shore A",
    costLevel: "Alto",
    chemicalCompatibility: {
      aceite: 95,
      agua: 60,
      vapor: 45,
      acido: 72,
      combustible: 95,
    },
    movementCompatibility: {
      estatico: 92,
      alternativo: 78,
      rotativo: 68,
    },
    pressureCompatibility: {
      baja: 88,
      media: 82,
      alta: 62,
    },
    strengths: [
      "Excelente comportamiento frente a combustibles y aceites.",
      "Mayor resistencia termica que NBR.",
      "Buen desempeno en ambientes quimicos moderadamente agresivos.",
    ],
    limitations: [
      "Costo superior frente a elastomeros convencionales.",
      "No siempre es la mejor opcion para vapor continuo.",
      "Requiere validar concentracion quimica especifica.",
    ],
    risks: ["Ataque quimico especifico", "Compresion permanente", "Costo innecesario si la aplicacion es simple"],
    applications: ["O-rings", "retenedores", "sellos para combustible", "juntas de alta temperatura"],
    compatibleProducts: ["O-rings FKM", "retenedores FKM", "juntas especiales", "sellos para hidrocarburos"],
    usefulLife: {
      high: "Alta, si la seleccion responde a temperatura elevada o combustible.",
      medium: "Media, si el fluido exige validacion quimica adicional.",
      low: "Baja, si hay vapor continuo o quimicos incompatibles no validados.",
    },
  },
  {
    id: "epdm",
    name: "EPDM",
    fullName: "Etileno propileno dieno",
    shortDescription:
      "Elastomero recomendado para agua, vapor moderado e intemperie. No debe usarse donde predominan aceites minerales.",
    temperatureRange: [-40, 150],
    hardness: "50-85 Shore A",
    costLevel: "Medio",
    chemicalCompatibility: {
      aceite: 15,
      agua: 95,
      vapor: 82,
      acido: 68,
      combustible: 10,
    },
    movementCompatibility: {
      estatico: 90,
      alternativo: 72,
      rotativo: 45,
    },
    pressureCompatibility: {
      baja: 88,
      media: 70,
      alta: 48,
    },
    strengths: [
      "Excelente resistencia a agua y vapor moderado.",
      "Buen desempeno frente a intemperie y ozono.",
      "Util para aplicaciones sanitarias o de agua, segun formulacion.",
    ],
    limitations: [
      "Incompatible con aceites minerales e hidrocarburos.",
      "No es la primera opcion para movimiento rotativo severo.",
      "Debe validarse en acidos segun concentracion.",
    ],
    risks: ["Hinchamiento por aceite", "Degradacion por hidrocarburos", "Extrusion en presion alta"],
    applications: ["juntas para agua", "o-rings para vapor moderado", "empaques sanitarios", "sellos estaticos"],
    compatibleProducts: ["O-rings EPDM", "empaques para agua", "juntas sanitarias", "sellos estaticos"],
    usefulLife: {
      high: "Alta, si el medio es agua o vapor moderado.",
      medium: "Media, si hay acidos diluidos o presion moderada.",
      low: "Baja, si hay aceite, combustible o hidrocarburos.",
    },
  },
  {
    id: "ptfe",
    name: "PTFE",
    fullName: "Politetrafluoroetileno",
    shortDescription:
      "Material de baja friccion y alta resistencia quimica, util donde elastomeros convencionales no son suficientes.",
    temperatureRange: [-200, 260],
    hardness: "Material plastico tecnico",
    costLevel: "Muy alto",
    chemicalCompatibility: {
      aceite: 95,
      agua: 95,
      vapor: 90,
      acido: 95,
      combustible: 95,
    },
    movementCompatibility: {
      estatico: 88,
      alternativo: 76,
      rotativo: 82,
    },
    pressureCompatibility: {
      baja: 82,
      media: 88,
      alta: 78,
    },
    strengths: [
      "Resistencia quimica muy amplia.",
      "Bajo coeficiente de friccion.",
      "Excelente rango termico.",
    ],
    limitations: [
      "Menor elasticidad que un elastomero.",
      "Puede requerir energizador o diseno especial.",
      "Costo y mecanizado superiores.",
    ],
    risks: ["Flujo en frio", "Falta de recuperacion elastica", "Montaje inadecuado"],
    applications: ["sellos especiales", "back-up rings", "guias", "sellos energizados", "componentes mecanizados"],
    compatibleProducts: ["Back-up rings PTFE", "sellos energizados", "guias", "piezas mecanizadas"],
    usefulLife: {
      high: "Alta, si el diseno contempla baja elasticidad y soporte adecuado.",
      medium: "Media, si hay movimiento y se requiere validar acabado superficial.",
      low: "Baja, si se espera recuperacion elastica como la de un caucho.",
    },
  },
  {
    id: "pu",
    name: "PU",
    fullName: "Poliuretano",
    shortDescription:
      "Material de alta resistencia mecanica, comun en sellos hidraulicos sometidos a desgaste y presion.",
    temperatureRange: [-30, 110],
    hardness: "85-95 Shore A",
    costLevel: "Medio",
    chemicalCompatibility: {
      aceite: 88,
      agua: 55,
      vapor: 20,
      acido: 20,
      combustible: 60,
    },
    movementCompatibility: {
      estatico: 72,
      alternativo: 92,
      rotativo: 50,
    },
    pressureCompatibility: {
      baja: 84,
      media: 90,
      alta: 88,
    },
    strengths: [
      "Excelente resistencia al desgaste.",
      "Muy usado en sellos hidraulicos.",
      "Buen comportamiento frente a extrusion en presion.",
    ],
    limitations: [
      "Limitado frente a temperatura elevada.",
      "No recomendado para vapor continuo.",
      "Sensibilidad a ciertos quimicos e hidrolisis segun formulacion.",
    ],
    risks: ["Hidrolisis", "Desgaste abrasivo", "Deformacion por calor"],
    applications: ["sellos de piston", "sellos de vastago", "rascadores", "elementos hidraulicos"],
    compatibleProducts: ["Sellos PU", "rascadores", "sellos hidraulicos", "componentes de cilindro"],
    usefulLife: {
      high: "Alta, en aceite hidraulico con movimiento alternativo y presion controlada.",
      medium: "Media, si hay humedad o temperatura moderada.",
      low: "Baja, si existe vapor, acidos o temperatura alta sostenida.",
    },
  },
  {
    id: "silicona",
    name: "Silicona",
    fullName: "Silicona VMQ",
    shortDescription:
      "Elastomero flexible para rangos amplios de temperatura, comun en aplicaciones estaticas y de baja exigencia mecanica.",
    temperatureRange: [-60, 200],
    hardness: "40-80 Shore A",
    costLevel: "Medio",
    chemicalCompatibility: {
      aceite: 45,
      agua: 72,
      vapor: 58,
      acido: 42,
      combustible: 30,
    },
    movementCompatibility: {
      estatico: 85,
      alternativo: 48,
      rotativo: 35,
    },
    pressureCompatibility: {
      baja: 82,
      media: 48,
      alta: 25,
    },
    strengths: [
      "Muy buen rango de temperatura.",
      "Alta flexibilidad a bajas temperaturas.",
      "Util en aplicaciones estaticas y alimentarias, segun formulacion.",
    ],
    limitations: [
      "Baja resistencia mecanica comparada con PU o NBR.",
      "No ideal para presion alta.",
      "Limitada frente a combustibles y aceites exigentes.",
    ],
    risks: ["Desgarro", "Extrusion", "Ataque por hidrocarburos"],
    applications: ["empaques estaticos", "juntas de temperatura", "o-rings de baja presion", "aplicaciones sanitarias"],
    compatibleProducts: ["O-rings silicona", "juntas estaticas", "empaques de temperatura", "sellos sanitarios"],
    usefulLife: {
      high: "Alta, en sellado estatico y baja presion.",
      medium: "Media, si hay temperatura elevada pero baja carga mecanica.",
      low: "Baja, si hay presion alta, abrasion o combustible.",
    },
  },
];

export function evaluateMaterial(condition: MaterialCondition, material: MaterialKnowledge): MaterialEvaluation {
  const [minTemp, maxTemp] = material.temperatureRange;
  const withinTemperature = condition.temperature >= minTemp && condition.temperature <= maxTemp;

  let score = 0;
  const reasons: string[] = [];
  const warnings: string[] = [];
  const rejectionReasons: string[] = [];

  const temperatureScore = withinTemperature ? 28 : -35;
  score += temperatureScore;

  if (withinTemperature) {
    reasons.push(`La temperatura esta dentro del rango orientativo de ${material.name} (${minTemp} °C a ${maxTemp} °C).`);
  } else {
    rejectionReasons.push(`La temperatura esta fuera del rango orientativo de ${material.name} (${minTemp} °C a ${maxTemp} °C).`);
  }

  const chemicalScore = material.chemicalCompatibility[condition.chemical];
  const movementScore = material.movementCompatibility[condition.movement];
  const pressureScore = material.pressureCompatibility[condition.pressure];

  score += chemicalScore * 0.34;
  score += movementScore * 0.22;
  score += pressureScore * 0.16;

  if (chemicalScore >= 80) reasons.push(`Presenta compatibilidad alta frente a ${condition.chemical}.`);
  if (chemicalScore >= 50 && chemicalScore < 80) warnings.push(`Compatibilidad media frente a ${condition.chemical}; validar concentracion, temperatura y tiempo de exposicion.`);
  if (chemicalScore < 50) rejectionReasons.push(`Compatibilidad baja frente a ${condition.chemical}.`);

  if (movementScore >= 75) reasons.push(`Comportamiento compatible con movimiento ${condition.movement}.`);
  if (movementScore < 55) warnings.push(`El movimiento ${condition.movement} puede acelerar desgaste, friccion o perdida de sellado.`);

  if (pressureScore >= 75) reasons.push(`Respuesta compatible para presion ${condition.pressure}.`);
  if (pressureScore < 55) warnings.push(`La presion ${condition.pressure} puede requerir respaldo, cambio de geometria o material alternativo.`);

  if (condition.pressure === "alta" && material.id !== "ptfe" && material.id !== "pu") {
    warnings.push("En presion alta se debe validar extrusion y posible uso de back-up ring.");
  }

  const finalScore = Math.max(0, Math.min(100, Math.round(score)));
  const status: RecommendationStatus = rejectionReasons.length > 0 || finalScore < 45 ? "descartado" : finalScore < 72 ? "condicionado" : "recomendado";

  const estimatedLife = finalScore >= 78 ? material.usefulLife.high : finalScore >= 55 ? material.usefulLife.medium : material.usefulLife.low;

  if (warnings.length === 0 && status === "recomendado") {
    warnings.push("No se detectan advertencias criticas en esta evaluacion preliminar.");
  }

  return {
    ...material,
    score: finalScore,
    status,
    reasons,
    warnings,
    rejectionReasons,
    estimatedLife,
  };
}

export function evaluateMaterials(condition: MaterialCondition): MaterialEvaluation[] {
  return materialKnowledgeBase
    .map((material) => evaluateMaterial(condition, material))
    .sort((a, b) => b.score - a.score);
}

export function getMaterialById(id: string) {
  return materialKnowledgeBase.find((material) => material.id === id);
}
