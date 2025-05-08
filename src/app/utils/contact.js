import { MapPin, PhoneCall, Mail } from "lucide-react";

export const contactItems = [
    {
        icon: <MapPin className="w-10 h-10 md:w-16 md:h-16" color="#C0B7E8" />,
        title: "Agenda una reunión",
        subtitle: "",
    },
    {
        icon: <PhoneCall className="w-10 h-10 md:w-16 md:h-16" color="#C0B7E8" />,
        title: "Whatsapp",
        subtitle: "(110) 1111-1010",
    },
    {
        icon: <Mail className="w-10 h-10 md:w-16 md:h-16" color="#C0B7E8" />,
        title: "Envianos un mensaje",
        subtitle: "Contacto@playattentionargentina.com",
    },
];
