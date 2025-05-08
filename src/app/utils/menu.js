import { 
    Folder, 
    HelpCircle, 
    Users, 
    UserCog, 
    File, 
    VideoIcon, 
    BookOpen, 
    BellRing, 
    Activity, 
    Tag, 
    Ticket,
    ChartColumn,
    CircleHelp
} from "lucide-react";

const navbar = [
    { label: "Personas", to: "personas" },
    { label: "Profesionales", to: "profesionales" },
    { label: "Empresas", to: "empresas" },
];

const admin = [
    {
        label: "Gestión de Contenido", icon: <Folder size={16} className="mr-2" />,
        submenu: [
            { 
                label: "Material Educativo", 
                icon: <File size={16} className="mr-2" />,
                href: "/panel_admin/gestion_contenido/material_educativo" 
            },
            { 
                label: "Tutoriales",
                icon: <VideoIcon size={16} className="mr-2" />, 
                href: "/panel_admin/gestion_contenido/tutoriales" 
            },
            { 
                label: "Artículos Médicos", 
                icon: <BookOpen size={16} className="mr-2" />, 
                href: "/panel_admin/gestion_contenido/articulos_medicos" 
            },
            { 
                label: "Vídeos de Muestra", 
                icon: <VideoIcon size={16} className="mr-2" />,
                href: "/panel_admin/gestion_contenido/videos_de_muestra" 
            },
            { 
                label: "Material de Marketing", 
                icon: <Tag size={16} className="mr-2" />,
                href: "/panel_admin/gestion_contenido/material_de_marketing" 
            },
            { 
                label: "Actividades",
                icon: <Activity size={16} className="mr-2" />,
                href: "/panel_admin/gestion_contenido/actividades" 
            },
            { 
                label: "Notificaciones", 
                icon: <BellRing size={16} className="mr-2" />,
                href: "/panel_admin/gestion_contenido/notificaciones" 
            },
        ],
    },
    {
        label: "Soporte al Cliente", icon: <HelpCircle size={16} className="mr-2" />,
        submenu: [
            { 
                label: "Tickets", 
                icon: <Ticket size={16} className="mr-2" />,
                href: "/panel_admin/soporte_cliente/tickets" 
            },
        ],
    },
    {
        label: "CRM", icon: <Users size={16} className="mr-2" />,
        submenu: [
            { 
                label: "Leads", 
                icon: <Users size={16} className="mr-2" />,
                href: "/panel_admin/crm/leads" 
            },
            { 
                label: "Tareas",
                icon: <Users size={16} className="mr-2" />,
                href: "/panel_admin/crm/tareas" 
            },
            { 
                label: "Reportes", 
                icon: <ChartColumn size={16} className="mr-2" />,
                href: "/panel_admin/crm/reportes" 
            },
        ],
    },
    { 
        label: "Gestión de Cuentas", 
        icon: <UserCog size={16} className="mr-2" />,
        href: "/panel_admin/gestion_cuentas" 
    },
];

const user = [ 
    { 
        label: "Material Educativo",
        icon: <File size={16} className="mr-2" />,
        href: "/panel_usuario/material_educativo" 
    },
    { 
        label: "Tutoriales", 
        icon: <VideoIcon size={16} className="mr-2" />, 
        href: "/panel_usuario/tutoriales" 
    },
    { 
        label: "Artículos Médicos", 
        icon: <BookOpen size={16} className="mr-2" />, 
        href: "/panel_usuario/articulos_medicos" 
    },
    { 
        label: "Vídeos de Muestra",
        icon: <VideoIcon size={16} className="mr-2" />,
        href: "/panel_usuario/videos_de_muestra" },
    { 
        label: "Material de Marketing",
        icon: <Tag size={16} className="mr-2" />,
        href: "/panel_usuario/material_de_marketing" },
    { 
        label: "Actividades",
        icon: <Activity size={16} className="mr-2" />,
        href: "/panel_usuario/actividades" },
    { 
        label: "Notificaciones",
        icon: <BellRing size={16} className="mr-2" />,
        href: "/panel_usuario/notificaciones" },
    { 
        label: "Soporte",
        icon: <CircleHelp size={16} className="mr-2" />,
        href: "/panel_usuario/soporte" },
];

export const menu = {
    navbar,
    admin,
    user
};
