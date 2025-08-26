// Mock data for Kamile Nails website
export const services = [
  {
    id: 1,
    name: "Manicure Completa",
    description: "Cuidado completo das unhas com esmaltação",
    price: "R$ 45,00",
    duration: "1h"
  },
  {
    id: 2,
    name: "Nail Art Personalizada",
    description: "Desenhos únicos e criativos nas unhas",
    price: "R$ 65,00",
    duration: "1h30min"
  },
  {
    id: 3,
    name: "Pedicure",
    description: "Cuidado completo dos pés",
    price: "R$ 50,00",
    duration: "1h"
  },
  {
    id: 4,
    name: "Unhas em Gel",
    description: "Alongamento e fortalecimento das unhas",
    price: "R$ 80,00",
    duration: "2h"
  }
];

export const portfolioImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxuYWlsJTIwYXJ0fGVufDB8fHx8MTc1NjIwODU4Mnww&ixlib=rb-4.1.0&q=85",
    alt: "Nail art geométrica colorida",
    description: "Nail art geométrica com cores vibrantes"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxtYW5pY3VyZXxlbnwwfHx8fDE3NTYyMDg1ODl8MA&ixlib=rb-4.1.0&q=85",
    alt: "Serviço profissional de manicure",
    description: "Atendimento profissional no salão"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1641814250010-9887d86eedfd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxtYW5pY3VyZXxlbnwwfHx8fDE3NTYyMDg1ODl8MA&ixlib=rb-4.1.0&q=85",
    alt: "Manicure elegante natural",
    description: "Manicure clássica e elegante"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHw0fHxuYWlsJTIwYXJ0fGVufDB8fHx8MTc1NjIwODU4Mnww&ixlib=rb-4.1.0&q=85",
    alt: "Manicure sofisticada escura",
    description: "Design sofisticado em tons escuros"
  }
];

export const aboutInfo = {
  name: "Kamile Silva",
  description: "Nail designer apaixonada por transformar unhas em verdadeiras obras de arte. Com mais de 5 anos de experiência no ramo da beleza, me especializei em nail art personalizada, sempre buscando criar designs únicos que reflitam a personalidade de cada cliente. Utilizo apenas produtos de alta qualidade e técnicas modernas para garantir que suas unhas fiquem perfeitas e duradouras. Meu objetivo é proporcionar uma experiência relaxante e transformadora, onde cada detalhe é pensado especialmente para você.",
  experience: "2+ anos de experiência",
  specialty: "Nail Art Personalizada",
  location: "Rio Grande do Sul - RS"
};

export const contactInfo = {
  phone: "11963065438",
  instagram: "@kamilesilvanails",
  address: "Cachoeirinha - Rio Grande do Sul - RS",
  cep: "05432-000",
  hours: "Segunda à Sexta: 8h às 18h"
};

// Available time slots for appointments
export const timeSlots = [
  "08:00", "09:00", "10:00", "11:00", "12:00", 
  "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
];

// Mock booked appointments (to simulate unavailable slots)
export let bookedAppointments = [
  { date: "2025-01-26", time: "10:00", clientName: "Maria Silva" },
  { date: "2025-01-26", time: "14:00", clientName: "Ana Costa" },
  { date: "2025-01-27", time: "09:00", clientName: "Julia Santos" },
];

// Function to add new appointment
export const addAppointment = (appointment) => {
  bookedAppointments.push(appointment);
};

// Function to check if slot is available
export const isSlotAvailable = (date, time) => {
  return !bookedAppointments.some(apt => apt.date === date && apt.time === time);
};