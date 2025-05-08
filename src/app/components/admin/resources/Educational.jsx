"use client"
import { RefreshCcw } from "lucide-react";
import { Toaster } from "sonner";
import { Plus, File } from "lucide-react";
import { DashHeader } from "../../DashHeader";
import { Container } from "../../Container";
import { Modal } from "../../Modal";
import { Resource } from "../../cards/Resource";
import { AddNew } from "./AddNew";
import { loader } from "../../Loader";
import { useGet } from "@/app/hooks/useGet";
import { resourceService } from "@/app/services/resource";

export const Educational = () => {
    const { data, isLoading, error, fetchData } = useGet(resourceService.getAll);
    
    return (
        <>
            <DashHeader title={"Gestión de Contenido"} />
            <Container>
                <div className="md:flex justify-between items-center w-full pb-8">
                    <div className="pb-5 md:pb-0">
                        <h2 className="font-bold text-xl">Material Educativo</h2>
                        <p className="text-sm text-gray-600">Esto es una prueba para el texto de abajo</p>
                    </div>
                    <Modal 
                        title={"Añadir nuevo contenido"} 
                        content={<AddNew />}> 
                        <button
                            type="button" 
                            className="flex items-center gap-3 bg-green-500 text-white px-3 py-2 rounded 
                            hover:bg-green-600 font-semibold text-xs cursor-pointer">
                            <Plus size={16} /> Agregar Contenido
                        </button>
                    </Modal>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                    {
                        data?.map(item => (
                            <Resource 
                                key={item.id}
                                data={item}
                                Icon={File}
                                iconColor="text-green-600"
                                user={"admin"}
                            />
                        ))
                    } 
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                    {
                        isLoading && Array(3).fill().map((_, index) => (
                            <loader.Resource key={index} /> 
                        ))
                    }
                </div>
                {
                    error && (
                        <button
                            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 
                            cursor-pointer rounded"
                            type="button"
                            onClick={fetchData}>
                            Error al traer la información. Intente nuevamente! <RefreshCcw size={16} />
                        </button>
                    )
                }
            </Container>
            <Toaster
                richColors
                position="top-center"
                duration={3000}
            />
        </>
    );
};
