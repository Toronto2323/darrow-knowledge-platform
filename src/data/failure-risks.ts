export type FailureRiskLevel = "bajo" | "medio" | "alto";

export type FailureRisk = {
  id: string;
  title: string;
  level: FailureRiskLevel;
  trigger: string;
  symptoms: string[];
  technicalCause: string;
  prevention: string[];
};

export const failureRisks: FailureRisk[] = [
  {
    id: "extrusion",
    title: "Extrusion del sello",
    level: "alto",
    trigger: "Presion alta, holguras excesivas o ausencia de anillo de respaldo.",
    symptoms: ["Bordes mordidos", "Material desplazado", "Fuga repentina bajo carga"],
    technicalCause:
      "Cuando la presion supera la capacidad del elastomero o la holgura radial es excesiva, el material puede fluir hacia el espacio libre y cortarse progresivamente.",
    prevention: [
      "Validar holgura de alojamiento",
      "Usar back-up ring cuando aplique",
      "Seleccionar material con mayor resistencia mecanica",
    ],
  },
  {
    id: "swelling",
    title: "Hinchamiento quimico",
    level: "alto",
    trigger: "Contacto con fluido incompatible, combustible, acidos o aditivos agresivos.",
    symptoms: ["Aumento de volumen", "Perdida de dureza", "Deformacion permanente"],
    technicalCause:
      "El fluido penetra la matriz del elastomero y altera su volumen, dureza y capacidad de recuperacion elastica.",
    prevention: [
      "Confirmar compatibilidad quimica",
      "Validar concentracion y temperatura",
      "Comparar NBR, FKM, EPDM o PTFE segun fluido",
    ],
  },
  {
    id: "hardening",
    title: "Endurecimiento termico",
    level: "medio",
    trigger: "Temperatura sostenida cercana o superior al limite del material.",
    symptoms: ["Grietas", "Perdida de elasticidad", "Fuga progresiva"],
    technicalCause:
      "La exposicion termica prolongada acelera envejecimiento, oxidacion y perdida de propiedades elasticas.",
    prevention: [
      "Seleccionar material con margen termico",
      "Evitar trabajar en el limite superior",
      "Evaluar FKM, PTFE o silicona segun aplicacion",
    ],
  },
  {
    id: "wear",
    title: "Desgaste abrasivo",
    level: "medio",
    trigger: "Movimiento alternativo o rotativo con contaminacion, rugosidad o mala lubricacion.",
    symptoms: ["Rayas", "Perdida de labio", "Fuga gradual"],
    technicalCause:
      "La friccion y particulas contaminantes remueven material de la superficie de contacto hasta reducir la interferencia de sellado.",
    prevention: [
      "Controlar acabado superficial",
      "Usar limpiadores y guias adecuados",
      "Validar lubricacion y contaminacion del sistema",
    ],
  },
  {
    id: "compression-set",
    title: "Deformacion permanente",
    level: "medio",
    trigger: "Compresion prolongada, temperatura o mala seleccion de dureza.",
    symptoms: ["El sello no recupera forma", "Aplastamiento", "Fuga despues de reposo"],
    technicalCause:
      "El material pierde capacidad de recuperacion elastica y ya no mantiene contacto suficiente contra las superficies de sellado.",
    prevention: [
      "Validar compresion de montaje",
      "Seleccionar dureza correcta",
      "Evitar sobrecompresion y temperatura excesiva",
    ],
  },
  {
    id: "installation",
    title: "Dano por instalacion",
    level: "alto",
    trigger: "Aristas vivas, herramientas inadecuadas, torsion o falta de lubricacion al instalar.",
    symptoms: ["Cortes localizados", "Marcas de montaje", "Fuga inmediata"],
    technicalCause:
      "El sello puede danarse antes de operar si se estira, corta o torsiona durante el montaje.",
    prevention: [
      "Usar guias de montaje",
      "Eliminar rebabas y aristas vivas",
      "Lubricar antes de instalar cuando aplique",
    ],
  },
];

export const failureLevelStyles: Record<FailureRiskLevel, string> = {
  bajo: "border-[#12A646]/35 bg-[#085924]/28 text-[#F2F2F2]",
  medio: "border-[#12A646]/50 bg-[#262626] text-[#F2F2F2]",
  alto: "border-[#03A62C]/70 bg-[#085924]/55 text-[#F2F2F2]",
};
