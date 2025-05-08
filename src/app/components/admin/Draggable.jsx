"use client"
import { useEffect, useState } from "react";
import { useDraggable } from "@dnd-kit/core";

const getStageColor = (stage) => {
    switch (stage) {
        case "nuevo_lead":
            return "bg-blue-400"; 
        case "En seguimiento":
            return "bg-yellow-400";
        case "Cerrado":
            return "bg-green-400"; 
        default:
            return "bg-gray-400";
    }
};

const getTypeUserColor = (typeUser) => {
    switch (typeUser) {
        case "individual":
            return "bg-orange-400"; 
        case "empresa":
            return "bg-purple-400";
        case "profesional":
            return "bg-pink-400"; 
        default:
            return "bg-gray-400";
    }
};

export const Draggable = ({ lead }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { attributes, listeners, setNodeRef, isDragging, transform } = useDraggable({
        id: lead.id,
    });

    const stageColor = getStageColor(lead.lead_status);
    const typeUserColor = getTypeUserColor(lead.lead_type);

    if (!mounted) return null;

    return (
        <div
            //ref={setNodeRef}
            //{...listeners}
            //{...attributes}
            className={`bg-white p-4 rounded-lg ${isDragging ? "opacity-80 scale-105" : "opacity-100"}`}
            style={{
                //cursor: "move",
                zIndex: isDragging ? 10 : 1,
                transform: transform
                ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : "none", 
                transition: "transform 0.2s ease-out", 
            }}>
            <h3 className="font-semibold text-sm pb-4">{lead.first_name} {lead.last_name}</h3>
            <span className={`inline-flex items-center px-3 py-1 text-white text-xs font-medium lowercase
                rounded-full me-1 mb-1 xl:mb-0 ${stageColor}`}>
                {lead.lead_status}
            </span>
            <span className={`inline-flex items-center px-3 py-1 text-white text-xs font-medium lowercase 
                rounded-full ${typeUserColor}`}>
                {lead.lead_type}
            </span>
        </div>
    );
};
