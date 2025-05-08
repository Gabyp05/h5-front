const lead = [
    {
        id: "first_name",
        label: "Nombres (*)",
        placeholder: "Ejemplo Nombre",
        type: "text"
    },
    {
        id: "last_name",
        label: "Apellidos (*)",
        placeholder: "Ejemplo Apellido",
        type: "text"
    },
    {
        id: "email",
        label: "Correo Electrónico (*)",
        placeholder: "ejemplo@correo.com",
        type: "email"
    },
    {
        id: "phone",
        label: "Teléfono (*)",
        placeholder: "+5491112345678",
        type: "tel"
    },
    {
        id: "institution",
        label: "Instituto",
        placeholder: "Ejemplo Instituto",
        type: "text"
    },
    {
        id: "intended_user",
        label: "¿Quién lo va a usar? (*)",
        placeholder: "Niños, adolescentes, adultos, pacientes,...",
        type: "text"
    },
    {
        id: "lead_role",
        label: "Rol o Profesión (*)",
        placeholder: "Psiquiatra, neurólogo, psicólogo,...",
        type: "text"
    },
];

const login = [
    {
        id: "email",
        label: "Correo Electrónico (*)",
        placeholder: "ejemplo@correo.com",
        type: "email"
    },
    {
        id: "password",
        label: "Contraseña (*)",
        placeholder: "Contraseña",
        type: "password"
    },
];

const createTicket = [
    {
        id: "subject",
        label: "Asunto (*)",
        placeholder: "Describe brevemente tu problema",
        type: "text"
    },
];

const user = [
    {
        id: "first_name", 
        label: "Nombres (*)", 
        placeholder: "Nombres", 
        type: "text" 
    },
    { 
        id: "last_name", 
        label: "Apellidos (*)", 
        placeholder: "Apellidos", 
        type: "text" 
    },
    { 
        id: "email", 
        label: "Correo Electrónico (*)", 
        placeholder: "admin@ejemplo.com", 
        type: "email" 
    },
    /*{
        id: "phone",
        label: "Teléfono (*)",
        placeholder: "+5491112345678",
        type: "tel"
    },*/
    {
        id: "password", 
        label: "Contraseña (*)", 
        placeholder: "Contraseña", 
        type: "password" 
    },
];

const security = [
    {
        id: "password", 
        label: "Contraseña Actual (*)", 
        placeholder: "Contraseña", 
        type: "password" 
    },
    {
        id: "newPassword", 
        label: "Nueva Contraseña (*)", 
        placeholder: "Contraseña", 
        type: "password" 
    },
    {
        id: "rePassword", 
        label: "Repetir Contraseña (*)", 
        placeholder: "Contraseña", 
        type: "password" 
    },
];

const resource = [
    {
        id: "title",
        label: "Título (*)",
        placeholder: "Título del contenido",
        type: "text"
    },
];


const attach = [
    {
        id: "attach",
        label: "Adjuntar archivo",
        placeholder: "Adjuntar archivo",
        type: "file"
    },
    {
        id: "media_url",
        label: "URL del archivo",
        placeholder: "Agregar url del archivo",
        type: "text"
    },
];

const contactForm = [
    {
        id: "first_name", 
        label: "Nombres", 
        placeholder: "Escribí tus nombres", 
        type: "text",
        required: true
    },
    { 
        id: "last_name", 
        label: "Apellidos", 
        placeholder: "Escribí tus apellidos", 
        type: "text",
        required: true
    },
    { 
        id: "email", 
        label: "Correo Electrónico", 
        placeholder: "Escribí tu correo eletrónico", 
        type: "email",
        required: true
    },
    {
        id: "phone",
        label: "Teléfono",
        placeholder: "Colocá tu número de teléfono",
        type: "tel",
        required: true
    },
    {
        id: "institution",
        label: "Institución",
        placeholder: "Colocá el nombre de tu institución",
        type: "text",
        required: false
    },
    {
        id: "intended_user",
        label: "¿Quién lo va a usar?",
        placeholder: "Niños, adolescentes, adultos, pacientes,...",
        type: "select",
        required: true
    },
    {
        id: "lead_role",
        label: "Rol o Profesión",
        placeholder: "Psiquiatra, neurólogo, psicólogo,...",
        type: "text",
        required: true
    },
    {
        id: "use_context",
        label: "Contexto de uso",
        placeholder: "Queremos comprender el motivo de tu interés",
        type: "textarea",
        required: true
    },
    {
        id: "subscription",
        label: "Acepto recibir información y suscribirme al Newsletter",
        type: "checkbox",
        required: false
    },
];

const recoverpassword = [
    {
        id: "email",
        label: "Correo Electrónico (*)",
        placeholder: "ejemplo@correo.com",
        type: "email"
    }
];

const  resetpassword = [
    {
        id: "password",
        label: "Contraseña (*)",
        placeholder: "Contraseña",
        type: "password"
    },
    {
        id: "rePassword",
        label: "Repetir Contraseña (*)",
        placeholder: "Repetir Contraseña",
        type: "password"
    }
];

export const input = {
    lead,
    login,
    createTicket,
    user,
    security,
    resource,
    attach,
    contactForm,
    recoverpassword,
    resetpassword,
};
