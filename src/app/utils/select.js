const lead = [
    {
        id: "lead_type",
        label: "Tipo de Usuario (*)",
        options: [
            { label: "Individual", value: "individual" },
            { label: "Empresa", value: "empresa" },
            { label: "Profesional", value: "profesional" },
        ],
    },
];

const ticketStatus = [
    {
        id: "status",
        label: "Estado",
        options: [
            { label: "Pendiente", value: "pendiente" },
            { label: "En proceso", value: "en_proceso" },
            { label: "Resuelto", value: "resuelto" },
        ],
    },
];

const usersRole = [
    {
        id: "role",
        label: "Rol",
        options: [
            { label: "Super Admin", value: "superadmin" },
            { label: "Moderador", value: "moderador" },
            { label: "Cliente", value: "client" },
        ],
    },
];

const userPrivilege = {
    SAM: {
        id: "privilege",
        label: "Privilegios",
        options: [{ label: "Todo", value: "todo" }],
    },
    Moderador: {
        id: "privilege",
        label: "Privilegios",
        options: [
            { label: "Gestor de Contenido", value: "gestor_contenido" },
            { label: "Gestor Comercial", value: "gestor_comercial" },
            { label: "Ambos", value: "ambos" },
        ],
    },
    Usuario: {
        id: "privilege",
        label: "Privilegios",
        options: [{ label: "Dashboard del Cliente", value: "client_dash" }],
    },
};

export const select = {
    lead,
    ticketStatus,
    usersRole,
    userPrivilege,
};
