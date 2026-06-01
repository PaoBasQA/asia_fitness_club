import { Discipline, MembershipPlan, CordonesAdvice } from './types';

export const disciplines: Discipline[] = [
  {
    id: 'cross',
    name: 'CROSS',
    shortDesc: 'Ideal para quemar grasa y mejorar resistencia total.',
    detailDesc: 'For full-body functional strength and high intensity. Rompé tus límites. Combinamos levantamiento olímpico, calistenia, metabólicos y gimnasia en una rutina de alta exigencia que cambia cada día (WOD). Diseñado para todos los niveles adaptando cargas.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
    category: 'SISTEMA DE PODER',
    scheduleTimes: ['07:00', '09:00', '18:00', '19:00', '20:00'],
    maxCapacity: 15,
  },
  {
    id: 'gym',
    name: 'GYM',
    shortDesc: 'Sala de musculación completa con máquinas de última generación.',
    detailDesc: 'Classic muscle building and body sculpting. Equipamiento de primer nivel para hipertrofia, ganancia de fuerza, y acondicionamiento. Contás con instructores experimentados en el salón para guiar tus tablas y asegurar una postura impecable.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop',
    category: 'SISTEMA DE PODER',
    scheduleTimes: ['08:00', '10:00', '12:00', '15:00', '17:00', '19:00', '21:00'],
    maxCapacity: 30,
  },
  {
    id: 'funcional',
    name: 'FUNCIONAL',
    shortDesc: 'Mejorá tu postura y agilidad para la vida diaria.',
    detailDesc: 'Movement-based training for everyone. Entrená patrones de movimiento naturales para potenciar tu desempeño diario, agilidad, balance y resistencia cardiovascular. Dinámico, entretenido y enfocado en la salud articular integral.',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop',
    category: 'SISTEMA DE PODER',
    scheduleTimes: ['08:00', '09:30', '18:30', '19:30'],
    maxCapacity: 12,
  },
  {
    id: 'oly',
    name: 'OLY',
    shortDesc: 'Aprende técnica desde cero con barras olímpicas.',
    detailDesc: 'Master the clean & jerk and snatch with technique focus and professional coaching. Clases exclusivas de Levantamiento Olímpico de Pesas (Weightlifting). Aprendé y pulí las fases de arranque y envión con calzado técnico, plataformas y barras profesionales.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop&blur=2',
    category: 'TECNIQUE FOCUS',
    scheduleTimes: ['11:00', '16:00', '20:30'],
    maxCapacity: 10,
  },
  {
    id: 'fuerza',
    name: 'FUERZA',
    shortDesc: 'Powerlifting y progresiones personalizadas.',
    detailDesc: 'Programas diseñados para aumentar tu fuerza máxima de forma estructurada. Centrado en los tres levantamientos básicos: Sentadilla, Banco y Peso Muerto. Monitoreo constante de velocidad (VBT) y cargas para evitar estancamientos.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop',
    category: 'PROGRESIONES',
    scheduleTimes: ['14:00', '17:30', '19:00'],
    maxCapacity: 8,
  }
];

export const membershipPlans: MembershipPlan[] = [
  {
    id: 'pase-diario',
    name: 'PASE DIARIO',
    price: '$4.000',
    period: 'por día',
    tagline: 'Fuerza inmediata sin compromisos',
    features: [
      'Acceso libre a la Sala de Musculación (GYM)',
      '1 Clase a elección (Cross, Funcional o OLY)',
      'Supervisión de coach de turno',
      'Uso de vestuarios y lockers prioritarios',
      'Saludo y aprobación de Cordones en recepción'
    ]
  },
  {
    id: 'pase-mensual',
    name: 'PASE MENSUAL LIBRE',
    price: '$24.000',
    period: 'por mes',
    tagline: 'El estándar industrial para entrenar en serio',
    popular: true,
    features: [
      'Acceso libre ilimitado a Sala de Musculación',
      'Reserva ilimitada de clases mediante Turnos Web',
      'Tablas de entrenamiento digital individualizadas',
      'Rutinas con foco en Fuerza o Hipertrofia',
      'Asesoramiento técnico directo por nuestros Head Coaches',
      '1 café de especialidad de cortesía semanal en el bar',
      'Pase de invitado gratis al mes'
    ]
  },
  {
    id: 'plan-anual',
    name: 'PLAN ANUAL CONVICT',
    price: '$19.000',
    period: 'por mes (facturado anual)',
    tagline: 'Compromiso total. Resultados absolutos',
    features: [
      'Todos los beneficios del Pase Mensual Libre',
      'Congelamiento de plan por hasta 30 días al año',
      'Remera exclusiva oficial de ASIA FITNESS CLUB de regalo',
      'Evaluación mensual de impedancia corporal (InBody)',
      '15% de descuento permanente en suplementos del club',
      'Acceso prioritario a seminarios de técnica lifting'
    ]
  }
];

export const cordonesTips: CordonesAdvice[] = [
  {
    id: 1,
    text: "Si no podés con una rep más, me acerco y te voy a ayudar. Dale que vos podés!",
    category: "motivation"
  },
  {
    id: 2,
    text: "El peso libre se devuelve a su lugar. El desorden debilita las fibras musculares. Yo lo veo todo.",
    category: "instruction"
  },
  {
    id: 3,
    text: "Tu cara de esfuerzo en el peso muerto es genial, pero asegurate de mantener la espalda recta o ronronearé con disgusto.",
    category: "humor"
  },
  {
    id: 4,
    text: "La barra no muerde, pero si no completás el squat profundo, no hay caricias de supervisor hoy.",
    category: "motivation"
  },
  {
    id: 5,
    text: "Ubicación ideal: Villa Ballester. El mejor asfalto para trotar es el que te trae de vuelta al templo de hierro.",
    category: "humor"
  },
  {
    id: 6,
    text: "El cansancio es mental. El magnesio en mis garras es real. ¡Dale que hoy rompés tu récord personal de snatch!",
    category: "motivation"
  }
];
