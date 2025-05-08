"use client"
import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { Eye, Download, Heart, SquarePen, Trash2 } from "lucide-react";
import { ConfirmActionModal } from "../ConfirmationModal";
import { Modal } from "../Modal";
import { Edit } from "../admin/resources/Edit";
import { useDelete } from "@/app/hooks/useDelete";
import { resourceService } from "@/app/services/resource";

export const Resource = ({ data, Icon, iconColor, user }) => {
    const closeEditRef = useRef(null);  
    const closeDeleteRef = useRef(null); 
    
    const closeEditModal = () => closeEditRef.current?.click();
    const closeDeleteModal = () => closeDeleteRef.current?.click();

    const { handleDelete, response, isLoading, error } = useDelete({
        id: data.id,
        onDelete: resourceService.remove
    });

    useEffect(() => {
        if (response === 204) {
            closeDeleteModal();
            toast.success("Se eliminó el recurso exitosamente!");
        } else if (error !== null) {
            toast.error(error.message);
        };
    
    }, [response, error]);

    return (
        <div className="bg-white border rounded-md shadow-md px-4 py-6 h-full flex flex-col">
            <div className="flex items-center gap-2">
                <Icon size={16} className={iconColor + " shrink-0"} />
                <h3 className="text-md font-semibold leading-tight">{data.title}</h3>
            </div>
            <p className="text-gray-600 pt-3 pb-5 text-sm flex-grow">{data.notes}</p>
            <div className="flex flex-wrap justify-end gap-2">
                { 
                    user === "client" && (
                        <>
                            <button 
                                type="button"
                                className="cursor-pointer">
                                <Heart 
                                    size={20} 
                                    className="text-red-500 hover:fill-current" 
                                    fill="none" 
                                    stroke="currentColor" 
                                />
                            </button>
                            <button 
                                type="button"
                                className="flex gap-2 border border-gray-300 p-2 rounded font-semibold 
                                text-xs rounded hover:bg-blue-500 hover:text-white cursor-pointer">
                                <Download size={16} /> Descargar
                            </button>
                        </>
                    )
                }
                {
                    user === "admin" && (
                        <>
                            <Modal 
                                title={"Editar contenido"} 
                                content={<Edit resource={data} closeModal={closeEditModal} />}
                                closeRef={closeEditRef} > 
                                <button 
                                    type="button"
                                    title="Editar"
                                    className="cursor-pointer me-3 text-blue-600">
                                    <SquarePen size={20} />
                                </button>
                            </Modal>
                            <ConfirmActionModal
                                description={
                                    <>
                                        Se eliminará el recurso <span className="font-bold">{data.title}</span>.
                                    </>
                                  }
                                onConfirm={handleDelete}
                                isLoading={isLoading}
                                closeRef={closeDeleteRef}> 
                                <button 
                                    type="button"
                                    title="Eliminar"
                                    className="cursor-pointer me-3 text-red-500">
                                    <Trash2 size={20} />
                                </button>
                            </ConfirmActionModal>
                        </>
                    )
                    
                }
                <button 
                    type="button"
                    className="flex gap-2 border border-gray-300 p-2 rounded font-semibold 
                    text-xs rounded hover:bg-blue-500 hover:text-white cursor-pointer">
                     <Eye size={16} /> Ver contenido
                </button>
            </div>
        </div>
    );
};
