"use client"
import { useState } from "react";
import { Ticket } from "lucide-react";
import { DashHeader } from "../DashHeader";
import { Ticket as TicketCard } from "../cards/Ticket";
import { TicketRes } from "./TicketRes";
import { Modal } from "../Modal";

export const Tickets = () => {
    const [openTicket, setOpenTicket] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null);

    const data = [
        { id: 1, title: "Prueba 1 no se", fullname: "Maria Alarcon", email: "maria@gmail.com", date: "10/01/2025 12:00:00 AM", status: "pendiente", description: "hola jdbfud dif miufu tego pribnsdf jdhbdg", },
        { id: 2, title: "Prueba 2 no se", fullname: "Maria Alarcon", email: "maria@gmail.com", date: "10/01/2025 12:00:00 AM", status: "en progreso", description: "hola jdbfud dif miufu tego pribnsdf jdhbdg", },
        { id: 3, title: "Prueba 3 no se", fullname: "Maria Alarcon", email: "maria@gmail.com", date: "10/01/2025 12:00:00 AM", status: "resuelto", description: "hola jdbfud dif miufu tego pribnsdf jdhbdg", },
        { id: 4, title: "Prueba 1 no se", fullname: "Maria Alarcon", email: "maria@gmail.com", date: "10/01/2025 12:00:00 AM", status: "resuelto", description: "hola jdbfud dif miufu tego pribnsdf jdhbdg", },
        { id: 5, title: "Prueba 1 no se", fullname: "Maria Alarcon", email: "maria@gmail.com", date: "10/01/2025 12:00:00 AM", status: "resuelto", description: "hola jdbfud dif miufu tego pribnsdf jdhbdg", },
        { id: 6, title: "Prueba 1 no se", fullname: "Maria Alarcon", email: "maria@gmail.com", date: "10/01/2025 12:00:00 AM", status: "resuelto", description: "hola jdbfud dif miufu tego pribnsdf jdhbdg", },
        { id: 7, title: "Prueba 1 no se", fullname: "Maria Alarcon", email: "maria@gmail.com", date: "10/01/2025 12:00:00 AM", status: "resuelto", description: "hola jdbfud dif miufu tego pribnsdf jdhbdg", },
    ]

    return (
        <>
            <DashHeader title={"Gestión de Tickets"} />
            <div className="container mx-auto w-full grid grid-cols-1 md:grid-cols-[6fr_6fr] 
                xl:grid-cols-[5fr_7fr] gap-6 px-4 md:px-6 py-8">
                <div className="md:bg-white md:rounded-md md:shadow-md md:p-6 md:h-[486px] md:overflow-y-auto">
                    <div className="md:flex justify-between items-center w-full pb-8">
                        <h2 className="font-bold text-xl pb-5 md:pb-0">Tickets</h2>
                        <h2 className="font-bold text-xl">Filtro</h2>
                    </div>
                    {
                        data.map(item => (
                            <div key={item.id}>
                                <TicketCard 
                                    {...item} 
                                    openTicket={() => {
                                    setSelectedTicket(item);
                                    setOpenTicket(true)}} 
                                />
                                <div className="md:hidden mb-6 ps-3">
                                    <Modal title={"Responder consulta"} content={<TicketRes {...item} />}> 
                                        <button
                                            type="button" 
                                            className="text-xs underline cursor-pointer">
                                            Responder
                                        </button>
                                    </Modal>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {
                    openTicket ? (
                        <div className="bg-white hidden md:block rounded-md shadow-md p-6 h-[486px] 
                            overflow-y-auto">
                            <TicketRes {...selectedTicket} setOpenTicket={setOpenTicket} /> 
                         </div>
                    ) : (
                        <div className="md:flex flex-col justify-center bg-white 
                            text-center rounded-md shadow-md p-6 hidden">
                            <Ticket size={40} className="text-gray-400 mx-auto" />
                            <h3 className="text-md font-semibold pt-4">Selecciona un ticket</h3>
                            <p className="text-gray-600 text-xs my-1">
                                Selecciona un ticket de la lista para ver los detalles y responder
                            </p>
                        </div>
                    )
                }
            </div>
        </>
    );
};
