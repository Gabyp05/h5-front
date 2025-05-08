"use client"
import { useState } from "react";
import { Ticket } from "lucide-react";
import { DashHeader } from "../DashHeader";
import { Container } from "../Container";
import { CreateTicket } from "./CreateTicket";
import { fqas } from "@/app/utils/fqas";

export const Support = () => {
    const [createNewTicket, setCreateNewTicket] = useState(false);

    return (
        <>
           <DashHeader title={"Soporte"} />
            <Container>
                <h2 className="font-bold text-xl">Centro de Soporte</h2>
                <p className="text-sm text-gray-600 mt-2 mb-6">
                    ¿Necesitas ayuda? Crea un ticket y nuestro equipo te responderá lo antes posible.
                </p>
                {
                    createNewTicket ? (
                        <CreateTicket setCreateNewTicket={setCreateNewTicket} />
                    ) : (
                        <button
                            onClick={() => setCreateNewTicket(true)}
                            type="button" 
                            className="flex items-center gap-3 bg-green-500 text-white px-3 py-2 rounded 
                            hover:bg-green-600 font-semibold text-xs cursor-pointer">
                            <Ticket size={16} /> Crear nuevo ticket
                        </button>
                    )
                }
            </Container>
            <Container personalizedClassName={"pt-0"}>
                <h2 className="font-bold text-xl mb-6">Preguntas Frecuentes</h2>
                <div className="flex flex-col gap-y-4">
                    {
                        fqas.map(item => (
                            <div key={item.id} className="bg-white border rounded-md shadow-md p-4">
                                <h3 className="text-md font-semibold leading-tight">{item.question}</h3>
                                <p className="text-gray-600 text-xs mt-1">{item.answer}</p>
                            </div>
                        ))
                    }
                </div> 
            </Container>
        </>
    );
};
