import React from 'react';
import type { Value, Benefit, Job, Review } from '../types';

export const icons: { [key: string]: JSX.Element } = {
  eye: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M12 17.3 6.2 21l1.6-6.8L2 9.3l7-.6L12 2l3 6.7 7 .6-5.8 4.9L17.8 21 12 17.3z" />
    </svg>
  ),
  gem: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 9 8 3h8l5 6-9 12L3 9Z" />
      <path d="M8 3 12 9 16 3" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M16 11a4 4 0 1 0-8 0" />
      <path d="M3 21a7 7 0 0 1 18 0" />
    </svg>
  ),
  comments: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" />
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 7h4l4 4 4-4h4v6l-4 4-4-2-4 2-4-4V7Z" />
    </svg>
  ),
  up: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 19V5M5.5 11 12 5l6.5 6" />
    </svg>
  ),
  money: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  smile: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 10h.01M16 10h.01M8 15s2 2 4 2 4-2 4-2" />
    </svg>
  ),
  contract: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M9 7h6M9 11h6M9 15h4" />
    </svg>
  ),
  mapPin: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
      <polyline points="3 7 12 13 21 7"></polyline>
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 7h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
      <path d="M9 7V5a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v2" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ),
  menu: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  whatsapp: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.316 1.906 6.03l-.534 1.956 1.993-.52z" />
    </svg>
  ),
  award: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  ),
};

export const VALUES: Value[] = [
  { icon: "eye", title: "Transparencia" },
  { icon: "star", title: "Excelencia" },
  { icon: "gem", title: "Calidad" },
  { icon: "users", title: "Equipo" },
  { icon: "comments", title: "Comunicación" },
  { icon: "handshake", title: "Responsabilidad" },
];

export const BENEFITS: Benefit[] = [
  { icon: "up", title: "Plan de Carrera Real", description: "Oportunidades reales de crecer y liderar tu propio equipo." },
  { icon: "money", title: "Condiciones Excelentes", description: "Salario fijo + comisiones altas. Ingreso medio de 1.100–1.200 € / mes." },
  { icon: "smile", title: "Ambiente Sano y Positivo", description: "Equipo joven, dinámico y con un propósito que nos une." },
  { icon: "contract", title: "Contrato Indefinido", description: "Estabilidad desde el primer día para que te centres en crecer." },
];

export const COMPANY_JOBS_URL: string = "https://jobtoday.com/cl/company/captacion-de-fondos-ong-f2f-perspective-marketing--JPMYDa";

const captadorDetails = {
  title: "✅ Captador/a ONG – Labor Social, Media Jornada",
  intro:
    "¿Buscas un rol donde tu trabajo diario contribuya directamente a causas sociales importantes? Requerimos profesionales con energía, empatía y una actitud proactiva.",
  whatYoullDo: [
    "Estarás a pie de calle, en equipo, con un ambiente cercano y motivador.",
    "Captarás nuevos socios para una de las ONG más reconocidas a nivel nacional e internacional.",
    "Pondrás tu voz al servicio de algo que realmente importa.",
  ],
  whatWeOffer: [
    "Media jornada (MAÑANAS): 5 horas, de lunes a viernes.",
    "Sueldo fijo + comisiones por encima del sector.",
    "Bonus de puntualidad mensual y de calidad trimestral.",
    "Formación, acompañamiento y plan de carrera real.",
    "Ambiente joven, dinámico y con propósito.",
  ],
  testimonial:
    "Este rol ofrece más que un simple empleo. Brinda la oportunidad de contribuir a una causa noble, formar parte de un equipo excepcional y concluir cada jornada con una profunda satisfacción profesional.",
};

const promotorDetails = {
  title: "✅ Promotor/a ONG – Fijo + Comisiones 💸",
  intro:
    "¿Te gustaría desarrollar tu carrera profesional en un entorno dinámico, interactuando con el público para apoyar a organizaciones sin ánimo de lucro? Esta es tu oportunidad.",
  whatYoullDo: [
    "Representación y captación de socios para una ONG líder a pie de calle.",
    "Inspirar y movilizar a personas para donaciones mensuales.",
    "Cada conversación puede cambiar una vida.",
  ],
  whatWeOffer: [
    "Media jornada (MAÑANAS) de lunes a viernes – 5h/día.",
    "Contrato indefinido con fijo + comisiones altas.",
    "Ingreso medio 1.100–1.200 €/mes con objetivos realistas.",
    "Incentivos extra y formación continua.",
    "Ambiente positivo y motivador.",
  ],
  closingStatement:
    "Este no es un trabajo convencional: es una carrera con propósito. Impulsamos el cambio social, una conversación a la vez.",
};


export const JOBS: Job[] = [
  {
    id: 1,
    type: "captador",
    location: "Madrid",
    salary: "900€–1600€",
    url: COMPANY_JOBS_URL,
    details: captadorDetails,
  },
  {
    id: 2,
    type: "promotor",
    location: "Madrid",
    salary: "950€–1600€",
    url: COMPANY_JOBS_URL,
    details: promotorDetails,
  },
  {
    id: 3,
    type: "promotor",
    location: "Boadilla del Monte",
    salary: "950€–1600€",
    url: COMPANY_JOBS_URL,
    details: promotorDetails,
  },
  {
    id: 4,
    type: "captador",
    location: "Hortaleza",
    salary: "900€–1600€",
    url: COMPANY_JOBS_URL,
    details: captadorDetails,
  },
    {
    id: 5,
    type: "promotor",
    location: "Retiro",
    salary: "950€–1600€",
    url: COMPANY_JOBS_URL,
    details: promotorDetails,
  },
  {
    id: 6,
    type: "captador",
    location: "Fuencarral-El Pardo",
    salary: "900€–1600€",
    url: COMPANY_JOBS_URL,
    details: captadorDetails,
  },
    {
    id: 7,
    type: "promotor",
    location: "Majadahonda",
    salary: "950€–1600€",
    url: COMPANY_JOBS_URL,
    details: promotorDetails,
  },
  {
    id: 8,
    type: "captador",
    location: "Alcorcón",
    salary: "900€–1600€",
    url: COMPANY_JOBS_URL,
    details: captadorDetails,
  },
  {
    id: 9,
    type: "captador",
    location: "Salamanca",
    salary: "900€–1600€",
    url: COMPANY_JOBS_URL,
    details: captadorDetails,
  },
  {
    id: 10,
    type: "promotor",
    location: "Serrano",
    salary: "950€–1600€",
    url: COMPANY_JOBS_URL,
    details: promotorDetails,
  },
  {
    id: 11,
    type: "captador",
    location: "Paseo de la Castellana",
    salary: "900€–1600€",
    url: COMPANY_JOBS_URL,
    details: captadorDetails,
  },
  {
    id: 12,
    type: "promotor",
    location: "Marqués de la Valdavia",
    salary: "950€–1600€",
    url: COMPANY_JOBS_URL,
    details: promotorDetails,
  },
];
