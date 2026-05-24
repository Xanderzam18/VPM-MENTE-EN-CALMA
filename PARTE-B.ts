
// tarea_arrays_mvp.ts — Parte B

// PASO 1: Define tu interface
interface SesionChat {
  id: string;
  ultimoMensaje: string;
  mensajesNoLeidos: number;
  requiereAtencionInmediata: boolean;
  etiquetasClinicas: string[];
}

// PASO 2: Crea tu array de datos de prueba
const sesionesMenteEnCalma: SesionChat[] = [
  {
    id: "1138",
    ultimoMensaje: "Gracias por los consejos, me siento mejor.",
    mensajesNoLeidos: 0,
    requiereAtencionInmediata: false,
    etiquetasClinicas: ["seguimiento", "estrés"]
  },
  {
    id: "0742",
    ultimoMensaje: "No sé cómo manejar esta situación...",
    mensajesNoLeidos: 2,
    requiereAtencionInmediata: true,
    etiquetasClinicas: ["ansiedad", "urgente"]
  },// ESTA PRIMERA PARTE FUE HECHA POR BENJAMIN
  {
    id: "0220",
    ultimoMensaje: "¿Podemos agendar para mañana?",
    mensajesNoLeidos: 0,
    requiereAtencionInmediata: false,
    etiquetasClinicas: ["agenda"]
  },
  {
    id: "0955",
    ultimoMensaje: "Me gustó mucho el ejercicio de respiración con el cactus.",
    mensajesNoLeidos: 0,
    requiereAtencionInmediata: false,
    etiquetasClinicas: ["relajación", "feedback"]
  },
  {
    id: "3310",
    ultimoMensaje: "Siento demasiada presión por las entregas de esta semana.",
    mensajesNoLeidos: 5,
    requiereAtencionInmediata: true,
    etiquetasClinicas: ["estrés académico", "urgente"]
  },
  {
    id: "1024",
    ultimoMensaje: "Ya pude dormir mejor anoche.",
    mensajesNoLeidos: 1,
    requiereAtencionInmediata: false,
    etiquetasClinicas: ["mejora", "seguimiento"]
  }// ESTA SEGUNDA PARTE ESTA HECHA POR ALEXANDER
  ];

// PASO 3: Resuelve estos 5 ejercicios con TUS datos

// B1. filter() — filtra por el campo boolean de tu interface
// Filtramos los chats que requieren atención inmediata (prioridad alta)
const chatsUrgentes = sesionesMenteEnCalma.filter(sesion => sesion.requiereAtencionInmediata === true);
console.log("B1. Chats urgentes activos:", chatsUrgentes.length);

// B2. map() — extrae solo los nombres o títulos
// Extraemos solo el texto de los últimos mensajes para hacer un resumen
const resumenMensajes = sesionesMenteEnCalma.map(sesion => sesion.ultimoMensaje);
console.log("B2. Resumen de últimos mensajes:", resumenMensajes);

// B3. find() — busca un elemento por su id
// Buscamos la sesión del estudiante anónimo #0742
const sesionEspecifica = sesionesMenteEnCalma.find(sesion => sesion.id === "0742");
console.log("B3. Sesión encontrada:", sesionEspecifica);

// B4. includes() — verifica si un tag o valor existe en un elemento
// Verificamos si el primer chat de la lista tiene la etiqueta "estrés"
const trataSobreEstres = sesionesMenteEnCalma[0]?.etiquetasClinicas?.includes("estrés");
console.log("B4. ¿El primer chat trata sobre estrés?:", trataSobreEstres);

// B5. filter() + map() encadenados
// Filtra los chats urgentes y extrae solo los IDs de esos estudiantes
const idsUrgentes = sesionesMenteEnCalma
  .filter(sesion => sesion.requiereAtencionInmediata)
  .map(sesion => `Anónimo #${sesion.id}`);
console.log("B5. IDs que requieren atención:", idsUrgentes);
// Esta tercer parte, está hecha por Maria de los Angeles