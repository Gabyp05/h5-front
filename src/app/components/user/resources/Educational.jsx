"use client"
import { useState } from "react";
import { File } from "lucide-react";
import { DashHeader } from "../../DashHeader";
import { Subheader } from "../Subheader";
import { Container } from "../../Container";
import { Resource } from "../../cards/Resource";

export const Educational = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const data = [
        {id: 1, title: "Prueba 1 Prueba 1 Prueba 1 Prueba 1", description: "Lorem prueba 1 esto es para ver como se ve Lorem prueba 1 esto es para ver como se ve Lorem prueba 1 esto es para ver como se ve"},
        {id: 2, title: "Prueba 1 Prueba 1", description: "Lorem prueba 1 esto es para ver como se ve"},
        {id: 3, title: "Prueba 1", description: "Lorem prueba 1 esto es para ver como se ve"},
        {id: 4, title: "Prueba 1", description: "Lorem prueba 1 esto es para ver como se ve"},
    ]

    return (
        <>
            <DashHeader title={"Dashboard"} />
            <Container>
                <Subheader 
                    searchTerm={searchTerm} 
                    setSearchTerm={setSearchTerm}
                    title={"Material Educativo"} 
                    text={"Esto es una prueba para el texto de abajo"} />
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                    {
                        data.map(item => (
                            <Resource 
                                key={item.id}
                                data={item}
                                Icon={File}
                                iconColor="text-green-600"
                                user={"client"}
                            />
                        ))
                    } 
                </div>
            </Container>
        </>
    );
};
