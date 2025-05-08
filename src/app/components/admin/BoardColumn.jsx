"use client"
import { useState } from "react";
import { Trash2 } from "lucide-react";
import { useDroppable } from "@dnd-kit/core";
import { Draggable } from "./Draggable";
import { loader } from "../Loader";
import { EditLead } from "./EditLead";
import { SlideOver } from "./SlideOver";
import { ConfirmActionModal } from "../ConfirmationModal";

export const BoardColumn = ({ state, leads, totalLeads, isLoading }) => {
    const { setNodeRef } = useDroppable({ id: state });
     const [openSlideOver, setOpenSlideOver] = useState(false);
     const [lead, setLead] = useState({});

    return (
        <>
            <div
                ref={setNodeRef}
                className="flex flex-col pt-4 pb-10 ps-4 pe-1 xl:ps-6 min-w-[250px] md:w-full 
                bg-gray-50 rounded-xl shadow-lg space-y-4">
                <h2 className="text-md font-semibold text-gray-800 sticky top-0 mb-0">{state}</h2>
                <span className="text-xs text-gray-400 font-semibold mb-6">Total: {totalLeads}</span>
                <div className="flex flex-col space-y-4 overflow-y-auto max-h-[70vh] min-h-screen pr-4">
                    {
                        isLoading ? <loader.Circular changeColor="border-blue-500" /> 
                        : leads?.map(lead => (
                            <div key={lead.id}  
                                className="bg-white mb-8 border rounded-lg shadow-md transition-all 
                                duration-200 ease-out hover:shadow-lg">
                                <Draggable  lead={lead} />
                                <div className="flex justify-end pe-4 my-3 gap-4">
                                    <ConfirmActionModal
                                        description={
                                            <>
                                                Se eliminará el lead de <span className="font-bold">
                                                {lead.first_name} {lead.last_name}</span>.
                                            </>
                                        }
                                        onConfirm={""}> 
                                        <button
                                            type="button"
                                            className="cursor-pointer text-red-500"><Trash2 size={16} />
                                        </button>
                                    </ConfirmActionModal>
                                    <button
                                        onClick={() => {setLead(lead), setOpenSlideOver(true)}}
                                        type="button"
                                        className="text-xs underline cursor-pointer ">Ver detalle
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            { 
                openSlideOver && (
                    <SlideOver open={openSlideOver} onClose={() => setOpenSlideOver(false)}>
                        <EditLead lead={lead} />
                    </SlideOver>
                )
            }
        </>
    );
};
