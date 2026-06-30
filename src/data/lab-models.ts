export type LabComponent = {
  id: string;
  name: string;
  shortName: string;
  system: string;
  function: string;
  typicalMaterials: string[];
  visibleFailures: string[];
  probableCauses: string[];
  inspectionChecklist: string[];
  relatedConcepts: string[];
  simulatorHref: string;
  materialsHref: string;
  positionClass: string;
};

export const hydraulicCylinderComponents: LabComponent[] = [
  {
    id: "piston-seal",
    name: "Sello de pistón",
    shortName: "Sello pistón",
    system: "Cilindro hidráulico",
    function:
      "Controla la fuga interna entre cámaras del cilindro y ayuda a mantener la eficiencia de presión durante el movimiento del pistón.",
    typicalMaterials: ["PU", "NBR", "PTFE energizado", "FKM en alta temperatura"],
    visibleFailures: [
      "Pérdida de fuerza",
      "Movimiento irregular",
      "Extrusión del labio",
      "Desgaste por fricción",
    ],
    probableCauses: [
      "Presión superior al diseño",
      "Ranura mal dimensionada",
      "Material demasiado blando",
      "Contaminación del fluido",
      "Temperatura fuera de rango",
    ],
    inspectionChecklist: [
      "Verificar presión real de operación",
      "Revisar acabado superficial del cilindro",
      "Confirmar compatibilidad del material con el fluido",
      "Validar holguras y dimensiones de alojamiento",
    ],
    relatedConcepts: ["Presión", "Extrusión", "Fricción", "Compatibilidad química"],
    simulatorHref:
      "/simuladores?movement=alternativo&pressure=alta&chemical=aceite#selector-materiales",
    materialsHref: "/materiales",
    positionClass: "left-[42%] top-[46%]",
  },
  {
    id: "rod-seal",
    name: "Sello de vástago",
    shortName: "Sello vástago",
    system: "Cilindro hidráulico",
    function:
      "Evita la fuga externa del fluido hidráulico a través del vástago. Es uno de los puntos más críticos para seguridad, limpieza y eficiencia.",
    typicalMaterials: ["PU", "NBR", "PTFE", "FKM"],
    visibleFailures: [
      "Fuga externa",
      "Película excesiva de aceite",
      "Corte en el labio",
      "Cristalización o endurecimiento",
    ],
    probableCauses: [
      "Vástago rayado",
      "Contaminación externa",
      "Temperatura elevada",
      "Montaje incorrecto",
      "Material incompatible con el fluido",
    ],
    inspectionChecklist: [
      "Inspeccionar rayas o golpes en el vástago",
      "Revisar alineación del cilindro",
      "Confirmar estado del limpiador",
      "Validar lubricación y fluido de trabajo",
    ],
    relatedConcepts: ["Fuga externa", "Acabado superficial", "Montaje", "Desgaste"],
    simulatorHref:
      "/simuladores?movement=alternativo&pressure=media&chemical=aceite#selector-materiales",
    materialsHref: "/materiales",
    positionClass: "left-[72%] top-[43%]",
  },
  {
    id: "wiper",
    name: "Limpiador",
    shortName: "Limpiador",
    system: "Cilindro hidráulico",
    function:
      "Remueve partículas externas del vástago antes de que ingresen al sistema. Protege sellos internos y reduce desgaste prematuro.",
    typicalMaterials: ["PU", "NBR"],
    visibleFailures: [
      "Ingreso de polvo",
      "Rayado del vástago",
      "Desgaste acelerado de sellos",
      "Labio deformado",
    ],
    probableCauses: [
      "Ambiente contaminado",
      "Material del limpiador inadecuado",
      "Montaje invertido",
      "Exposición a abrasivos",
    ],
    inspectionChecklist: [
      "Revisar acumulación de partículas",
      "Confirmar orientación del limpiador",
      "Verificar daño en el labio",
      "Evaluar ambiente de operación",
    ],
    relatedConcepts: ["Contaminación", "Abrasión", "Protección del sistema"],
    simulatorHref:
      "/simuladores?movement=alternativo&pressure=baja&chemical=aceite#selector-materiales",
    materialsHref: "/materiales",
    positionClass: "left-[86%] top-[43%]",
  },
  {
    id: "guide-ring",
    name: "Guía",
    shortName: "Guía",
    system: "Cilindro hidráulico",
    function:
      "Centra el movimiento del pistón o vástago y evita contacto metal-metal. Ayuda a controlar cargas laterales.",
    typicalMaterials: ["PTFE con carga", "POM", "Resina fenólica", "Compuestos técnicos"],
    visibleFailures: [
      "Desgaste irregular",
      "Marcas laterales",
      "Vibración",
      "Juego excesivo",
    ],
    probableCauses: [
      "Carga lateral elevada",
      "Desalineación",
      "Holgura incorrecta",
      "Longitud de guía insuficiente",
    ],
    inspectionChecklist: [
      "Verificar alineación del conjunto",
      "Revisar cargas laterales reales",
      "Medir desgaste de guía",
      "Confirmar dimensiones de alojamiento",
    ],
    relatedConcepts: ["Desalineación", "Carga lateral", "Fricción", "Vida útil"],
    simulatorHref:
      "/simuladores?movement=alternativo&pressure=media&chemical=agua#selector-materiales",
    materialsHref: "/materiales",
    positionClass: "left-[57%] top-[63%]",
  },
  {
    id: "o-ring",
    name: "O-ring",
    shortName: "O-ring",
    system: "Cilindro hidráulico",
    function:
      "Sella uniones estáticas o dinámicas de baja complejidad mediante compresión controlada del elastómero.",
    typicalMaterials: ["NBR", "FKM", "EPDM", "Silicona"],
    visibleFailures: [
      "Aplastamiento permanente",
      "Hinchamiento",
      "Grietas",
      "Corte por montaje",
    ],
    probableCauses: [
      "Compresión incorrecta",
      "Compatibilidad química deficiente",
      "Temperatura fuera de rango",
      "Ranura inadecuada",
      "Falta de lubricación en montaje",
    ],
    inspectionChecklist: [
      "Revisar squeeze o compresión",
      "Validar dureza Shore A",
      "Confirmar compatibilidad con fluido",
      "Inspeccionar bordes cortantes en la ranura",
    ],
    relatedConcepts: ["Shore A", "Compresión", "Compatibilidad", "Instalación"],
    simulatorHref:
      "/simuladores?movement=estatico&pressure=media&chemical=aceite#selector-materiales",
    materialsHref: "/materiales",
    positionClass: "left-[31%] top-[62%]",
  },
  {
    id: "backup-ring",
    name: "Back-up ring",
    shortName: "Back-up",
    system: "Cilindro hidráulico",
    function:
      "Respalda al sello principal y reduce riesgo de extrusión cuando existe presión elevada o holgura significativa.",
    typicalMaterials: ["PTFE", "POM", "Nylon técnico"],
    visibleFailures: [
      "Extrusión del sello",
      "Deformación del respaldo",
      "Mordeduras en el material",
      "Pérdida de soporte",
    ],
    probableCauses: [
      "Presión elevada",
      "Holgura excesiva",
      "Material de respaldo incorrecto",
      "Temperatura alta",
    ],
    inspectionChecklist: [
      "Medir holgura de extrusión",
      "Confirmar orientación del respaldo",
      "Revisar presión pico del sistema",
      "Validar material frente a temperatura",
    ],
    relatedConcepts: ["Extrusión", "Presión", "Holgura", "Soporte mecánico"],
    simulatorHref:
      "/simuladores?movement=alternativo&pressure=alta&chemical=aceite#selector-materiales",
    materialsHref: "/materiales",
    positionClass: "left-[47%] top-[30%]",
  },
];