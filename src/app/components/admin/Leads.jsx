"use client"
import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { DndContext } from "@dnd-kit/core";
import { DashHeader } from "../DashHeader";
import { Modal } from "../Modal";
import { AddNewLead } from "./AddNewLead";
import { BoardColumn } from "./BoardColumn";
import { leadService } from "@/app/services/lead"; 
import { useGet } from "@/app/hooks/useGet";

const mapColumnToStatus = (column) => {
    switch (column) {
        case "Nuevo":
            return "nuevo_lead";
        case "En seguimiento":
            return "seguimiento";
        case "Cerrado":
            return "cerrado";
        default:
            return "nuevo_lead"; 
    }
};

export const Leads = () => {
    const [leads, setLeads] = useState([]);
    const { data, isLoading, error, fetchData } = useGet(leadService.getAll);

    useEffect(() => {
        if (data) {
            setLeads(data); 
        }
    }, [data]);

    const groupedLeads = {
        Nuevo: leads.filter((lead) => lead.lead_status === 'nuevo_lead'),
        'En seguimiento': leads.filter((lead) => lead.lead_status === 'seguimiento'),
        Cerrado: leads.filter((lead) => lead.lead_status === 'cerrado'),
    };

    const handleDragEnd = (e) => {
        const { active, over } = e;

        if (!over) return;

        if (active.id !== over.id) {
            const leadToMove = leads.find((lead) => lead.id === active.id);

            if (!leadToMove) return;

            const newLeadStatus = mapColumnToStatus(over.id); 

            // actualización por ahora solo local
            setLeads(prevLeads => 
                prevLeads.map((lead) => 
                    lead.id === leadToMove.id ? { ...lead, lead_status: newLeadStatus } : lead
                )
            );
        }
    };

    return (
        <>
            <DashHeader title={"Gestión de Leads"} />
            <div className="container mx-auto px-4 md:px-6 py-8">
                <div className="md:flex justify-between items-center w-full pb-8">
                    <h2 className="font-bold text-xl pb-5 md:pb-0">Leads</h2>
                    <Modal title={"Agregar nuevo lead"} content={<AddNewLead />}> 
                        <button
                            type="button" 
                            className="flex items-center gap-3 bg-green-500 text-white px-3 py-2 rounded 
                            hover:bg-green-600 font-semibold text-xs cursor-pointer">
                            <Plus size={16} /> Nuevo Lead
                        </button>
                    </Modal>
                </div>
                <DndContext onDragEnd={handleDragEnd} className="px-6">
                    <div className="flex space-x-4 overflow-x-auto w-full">
                        {
                            Object.keys(groupedLeads).map((state) => (
                                <BoardColumn 
                                    key={state} 
                                    state={state} 
                                    leads={groupedLeads[state]}
                                    totalLeads={groupedLeads[state]?.length}
                                    isLoading={isLoading}
                                />
                            ))
                        }
                    </div>
                </DndContext>
            </div>
        </>
    );
};
