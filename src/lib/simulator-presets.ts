import type { ChemicalContact, MovementType, PressureLevel } from "@/data/materials";

export type SimulatorPreset = {
  materialId: string;
  label: string;
  description: string;
  temperature: number;
  chemical: ChemicalContact;
  movement: MovementType;
  pressure: PressureLevel;
};

export const simulatorPresets: SimulatorPreset[] = [
  {
    materialId: "nbr",
    label: "Probar NBR en aceite hidraulico",
    description: "Escenario frecuente para o-rings, retenedores y sellos hidraulicos generales.",
    temperature: 65,
    chemical: "aceite",
    movement: "alternativo",
    pressure: "media",
  },
  {
    materialId: "fkm",
    label: "Probar FKM con combustible",
    description: "Escenario util para hidrocarburos, temperatura elevada y mayor exigencia quimica.",
    temperature: 120,
    chemical: "combustible",
    movement: "estatico",
    pressure: "media",
  },
  {
    materialId: "epdm",
    label: "Probar EPDM con agua o vapor",
    description: "Escenario recomendado para agua, vapor moderado e intemperie; no para aceites.",
    temperature: 90,
    chemical: "vapor",
    movement: "estatico",
    pressure: "baja",
  },
  {
    materialId: "ptfe",
    label: "Probar PTFE en quimico exigente",
    description: "Escenario para alta resistencia quimica, baja friccion y validacion de diseno especial.",
    temperature: 160,
    chemical: "acido",
    movement: "rotativo",
    pressure: "media",
  },
  {
    materialId: "pu",
    label: "Probar PU en cilindro hidraulico",
    description: "Escenario para sellos de piston, vastago y rascadores con desgaste y presion.",
    temperature: 70,
    chemical: "aceite",
    movement: "alternativo",
    pressure: "alta",
  },
  {
    materialId: "silicona",
    label: "Probar silicona en sellado estatico",
    description: "Escenario para baja presion, flexibilidad y temperatura con baja exigencia mecanica.",
    temperature: 150,
    chemical: "agua",
    movement: "estatico",
    pressure: "baja",
  },
];

export function getPresetByMaterial(materialId: string) {
  return simulatorPresets.find((preset) => preset.materialId === materialId);
}

export function buildSimulatorHref(preset: SimulatorPreset) {
  const params = new URLSearchParams({
    material: preset.materialId,
    temperature: String(preset.temperature),
    chemical: preset.chemical,
    movement: preset.movement,
    pressure: preset.pressure,
  });

  return `/simuladores?${params.toString()}#selector-materiales`;
}
