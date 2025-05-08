"use client"
import { useState } from "react";
import { SquarePen, Trash2, Lock, Plus } from "lucide-react";
import { DashHeader } from "../DashHeader";
import { Table } from "../Table";
import { AddNewUser } from "./AddNewUser";
import { EditUser } from "./EditUser";
import { ConfirmActionModal } from "../ConfirmationModal";
import { Modal } from "../Modal";
import { columnsTable } from "@/app/utils/columnsTable";
import { useGet } from "@/app/hooks/useGet";
import { userService } from "@/app/services/user";

export const AccountMgmt = () => {
    const { data, isLoading, error, fetchData } = useGet(userService.getAll);
    const [selectedQuery, setSelectedQuery] = useState(null);
    const [selected, setSelected] = useState(null);
    
    const handleViewDetail = (pru) => setSelectedQuery(pru);

    const usersWithFullName = data?.map(user => ({
        ...user,  
        fullname: `${user.name} ${user.lastname}`
    }));

    const handleAddNew = () => alert("ejecuta");

    return (
        <>
            <DashHeader title={"Gestión de Cuentas"} />
            <div className="px-6 pt-8">
                <div className="flex justify-between items-center w-full pb-8">
                    <h2 className="font-bold text-xl">Cuentas</h2>
                    <Modal title={"Agregar nuevo usuario"} content={<AddNewUser />}> 
                        <button
                            type="button" 
                            className="flex items-center gap-3 bg-green-500 text-white px-3 py-2 rounded 
                            hover:bg-green-600 font-semibold text-xs cursor-pointer">
                            <Plus size={16} /> Nuevo Usuario
                        </button>
                    </Modal>
                </div>
                <Table 
                    columns={columnsTable.account} 
                    data={usersWithFullName} 
                    fetch={fetchData} 
                    isLoading={isLoading} 
                    error={error} 
                    actions={(user) => (
                        <div className="flex gap-2">
                            <button 
                                onClick={() => handleViewDetail(user)}
                                type="button" 
                                className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 
                                cursor-pointer">
                                <SquarePen size={16} />
                            </button>
                            <ConfirmActionModal
                                description={`¿Estás seguro de que deseas eliminar al usuario ${user.fullname}?`}
                                onConfirm={handleAddNew}> 
                                <button 
                                    type="button" 
                                    className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600
                                    cursor-pointer">
                                    <Trash2 size={16} />
                                </button>
                            </ConfirmActionModal>
                            <ConfirmActionModal
                                description={`¿Estás seguro de que deseas bloquear al usuario ${user.fullname}?`}
                                onConfirm={handleAddNew}> 
                                <button type="button" 
                                    className="bg-gray-500 text-white px-3 py-2 rounded hover:bg-gray-600
                                    cursor-pointer">
                                    <Lock size={16} />
                                </button>
                            </ConfirmActionModal>
                        </div>
                    )}
                />
            </div>
            { selectedQuery && <EditUser user={selectedQuery} /> } 
        </>
    );
};
