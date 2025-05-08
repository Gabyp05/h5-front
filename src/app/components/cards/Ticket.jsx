import { Clock } from "lucide-react";

const getColor = (status) => {
    switch (status) {
        case "pendiente":
            return "text-yellow-400"; 
        case "en progreso":
            return "text-blue-400";
        case "resuelto":
            return "text-black-400"; 
        default:
            return "text-gray-400";
    }
};

export const Ticket = ({ title, fullname, email, date, status, openTicket }) => {
    const color = getColor(status);    

    return (
        <button 
            onClick={openTicket}
            type="button"
            className="bg-white border rounded-md shadow-md p-4 md:mb-6 text-left w-full hover:shadow-lg 
            transition cursor-pointer">
            <div className="flex items-center justify-between">
                <h3 className="text-md font-semibold leading-tight">{title}</h3>
                <div className="flex items-center gap-1">
                    <Clock size={16} className={color} />
                    <span className="text-xs capitalize">{status}</span>
                </div>
            </div>
            <p className="text-gray-600 text-xs my-1">{fullname} - {email}</p>
            <p className="text-gray-600 text-xs">{date}</p>
        </button>
    );
};
