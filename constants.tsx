
import { Procedure, Product, Location, Resource, TransitionSpecialist } from './types';

const PROXY = "https://images.weserv.nl/?url=";
const RAW_IMAGE_URL = "i.ibb.co/CK1PBBFC/8c843f03-8781-4906-b5d6-9f24a1ae5b48-2.jpg";

export const DOCTOR_BIO = {
  name: "Dra. Candela Fernández",
  title: "Especialista en Ginecología Regenerativa y Funcional",
  story: "Con más de 15 años de experiencia, mi enfoque se centra en devolverle a la mujer su bienestar integral. Entiendo la salud femenina no solo como la ausencia de enfermedad, sino como la plenitud de funciones y la confianza estética.",
  mission: "Mi misión es empoderar a mis pacientes a través de la ciencia de precisión y la tecnología láser, ofreciendo soluciones que cambian vidas sin necesidad de procesos invasivos.",
  education: [
    "Especialidad en Ginecología y Obstetricia - Universidad Complutense",
    "Máster en Ginecología Estética, Regenerativa y Funcional",
    "Certificación Internacional en Tecnologías Láser Médicas",
    "Miembro de la Sociedad Española de Ginecología Estética"
  ],
  image: `${PROXY}${RAW_IMAGE_URL}`
};

export const TRANSITION_SPECIALISTS: TransitionSpecialist[] = [
  {
    name: "Dr. Julián Arcas",
    role: "Dermatólogo",
    specialty: "Salud cutánea en la madurez",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400"
  },
  {
    name: "Lic. Elena Soler",
    role: "Psicóloga Clínica",
    specialty: "Gestión emocional y plenitud",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400"
  },
  {
    name: "Nut. Sofía García",
    role: "Nutricionista",
    specialty: "Nutrición antiinflamatoria",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400"
  }
];

export const PROCEDURES: Procedure[] = [
  {
    id: 'laser-vaginal',
    title: 'Rejuvenecimiento Vaginal Láser',
    shortDescription: 'Tratamiento no invasivo para la sequedad y laxitud vaginal.',
    longDescription: 'Utilizamos tecnología láser de última generación para estimular la producción de colágeno y elastina en la mucosa vaginal. Es ideal para pacientes en transición menopáusica o post-parto que buscan recuperar su bienestar íntimo y funcionalidad.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800',
    duration: '15-20 minutos',
    benefits: ['Mejora la lubricación natural', 'Sin cirugía ni reposo', 'Resultados en 3 sesiones']
  },
  {
    id: 'menopause-balance',
    title: 'Menopausia de Precisión',
    shortDescription: 'Terapia de reemplazo hormonal bioidéntico personalizada.',
    longDescription: 'Un enfoque integral para el manejo de la menopausia. Basado en análisis hormonales precisos, diseñamos un plan de tratamiento que incluye hormonas bioidénticas y optimización del estilo de vida para eliminar sofocos, insomnio y fatiga.',
    image: 'https://images.unsplash.com/photo-1516549221187-fb9d47d02d49?q=80&w=800',
    duration: 'Consulta 45 min',
    benefits: ['Equilibrio hormonal real', 'Mejora la densidad ósea', 'Recupera vitalidad y lívido']
  },
  {
    id: 'labiaplasty',
    title: 'Labioplastia Láser Funcional',
    shortDescription: 'Armonía estética y confort físico en la zona íntima.',
    longDescription: 'Procedimiento quirúrgico mínimamente invasivo con láser para corregir la hipertrofia de labios menores. Enfocado tanto en la estética como en la eliminación de molestias físicas durante el deporte o el uso de ropa ajustada.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800',
    duration: '60-90 minutos',
    benefits: ['Cierre con láser (menos edema)', 'Rápida recuperación', 'Resultados permanentes']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'intimate-serum',
    name: 'Precision Intimate Serum',
    price: 52.00,
    description: 'Fórmula hidratante avanzada con ácido hialurónico y prebióticos para la salud vulvar.',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800',
    ingredients: ['Ácido Hialurónico', 'Extracto de Camelia', 'Prebióticos'],
    usage: 'Aplicar una pequeña cantidad diariamente en la zona vulvar externa después de la higiene.'
  },
  {
    id: 'balance-capsules',
    name: 'Menopause Balance Supplement',
    price: 48.00,
    description: 'Suplemento de precisión con fitonutrientes para el apoyo hormonal diario.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800',
    ingredients: ['Cimicifuga Racemosa', 'Magnesio', 'Vitamina D3'],
    usage: 'Tomar 1 cápsula por la mañana con el desayuno.'
  },
  {
    id: 'vaginal-repair',
    name: 'Regenerative Night Gel',
    price: 40.00,
    description: 'Gel regenerador nocturno diseñado para combatir la atrofia vaginal leve.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800',
    ingredients: ['Centella Asiática', 'Vitamina E', 'Aceite de Almendras'],
    usage: 'Uso intravaginal 3 veces por semana antes de dormir.'
  }
];

export const LOCATIONS: Location[] = [
  {
    name: 'Clínica AB - Unidad de Menopausia',
    address: 'Av. Cabildo 1478, 9° Dpto 50, C1426ABO CABA',
    phone: '+54 9 11 3915-0030',
    hours: 'Consulta por horarios disponibles',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Av.+Cabildo+1478+Buenos+Aires'
  },
  {
    name: 'Juvian',
    address: 'Av. Boyacá 326, C1406 CABA',
    phone: '+54 9 11 3672-4900',
    hours: 'Consulta por horarios disponibles',
    mapLink: 'https://maps.app.goo.gl/V9UQvc8JEBX45Xym6'
  },
  {
    name: 'IDIM',
    address: 'Amenábar 1945, C1428CQC CABA',
    phone: '+54 9 11 5031-4100',
    hours: 'Consulta por horarios disponibles',
    mapLink: 'https://maps.app.goo.gl/sJ8YQK1nu7E3MRgQ9'
  },
  {
    name: 'Mautalen',
    address: 'Azcuénaga 1860 6º Piso, C1128 AAF, CABA',
    phone: '+54 9 11 4806-8788',
    hours: 'Consulta por horarios disponibles',
    mapLink: 'https://maps.app.goo.gl/d4dmk2niwgYBvnm88'
  },
  {
    name: 'Consultorio Montevideo',
    address: 'Luis Lamas 3496, 11300 Montevideo, Uruguay',
    phone: 'Cita previa por WhatsApp',
    hours: 'Atención Mensual',
    mapLink: 'https://maps.app.goo.gl/Ma4o4n2wp63gG4a7A'
  },
  {
    name: 'Consultorio Punta del Este',
    address: 'Av. Martiniano Chiossi entre Luxemburgo y Tahilandia, 20000 Punta del Este',
    phone: 'Cita previa por WhatsApp',
    hours: 'Atención Estacional',
    mapLink: 'https://maps.app.goo.gl/uZVCk37oyY5fhWyJ7'
  }
];

export const RESOURCES: Resource[] = [
  {
    id: 'guide-menopause',
    title: 'Guía de la Menopausia Moderna',
    description: 'Todo lo que necesitas saber sobre las hormonas bioidénticas.',
    icon: '🌸',
    downloadUrl: '#'
  },
  {
    id: 'checklist-intimate-health',
    title: 'Checklist de Salud Íntima',
    description: 'Signos y síntomas que no debes ignorar después de los 40.',
    icon: '📋',
    downloadUrl: '#'
  }
];
