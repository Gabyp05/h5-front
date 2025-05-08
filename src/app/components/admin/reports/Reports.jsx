"use client"
import { useState, useEffect } from "react";
import { NewLeads } from "./NewLeads";
import { ConversionRate } from "./ConversionRate";
import { LeadsByUserType } from "./LeadsByUserType"; 
import { Summary } from "../../cards/Summary";
import { Users, Clock, UserCheck, Award } from "lucide-react";

export const Reports = () => {
    const [leadsData, setLeadsData] = useState([]); 
    const [leadsForConversion, setLeadsForConversion] = useState([]);
    const [leadsByUserType, setLeadsByUserType] = useState([]);

    useEffect(() => {
        const dataLeads = [
            { day: "Mon", leads: 20 },
            { day: "Tue", leads: 30 },
            { day: "Wed", leads: 40 },
            { day: "Thu", leads: 60 },
            { day: "Fri", leads: 80 },
            { day: "Sat", leads: 50 }, 
            { day: "Sun", leads: 70 }, 
        ];

        setLeadsData(dataLeads); 

        const leadsStatus = [
            { id: 1, status: "converted" },
            { id: 2, status: "converted" },
            { id: 3, status: "newLead" },
            { id: 4, status: "in_progress" },
            { id: 5, status: "lost" },
            { id: 6, status: "converted" },
            { id: 7, status: "in_progress" },
        ];
        setLeadsForConversion(leadsStatus);

        const leadsByUser = [
            { id: 1, userType: "Individual" },
            { id: 2, userType: "Empresa" },
            { id: 3, userType: "Individual" },
            { id: 4, userType: "Profesional" },
            { id: 5, userType: "Empresa" },
            { id: 6, userType: "Individual" },
            { id: 7, userType: "Individual" },
            { id: 8, userType: "Individual" },
            { id: 9, userType: "Individual" },
            { id: 10, userType: "Profesional" },
            { id: 11, userType: "Empresa" },
            { id: 12, userType: "Empresa" },
            { id: 13, userType: "Empresa" },
          ];
        setLeadsByUserType(leadsByUser)
    }, []);

    const cards = [
        { title: "Total Leads", value: "5", icon: Users, colorIcon: "text-gray-500" },
        { title: "Leads Nuevos", value: "1", icon: Clock, colorIcon: "text-blue-500" },
        { title: "Leads Contactados", value: "1", icon: UserCheck, colorIcon: "text-orange-500" },
        { title: "Tasa de Conversión", value: "20%", icon: Award, colorIcon: "text-green-500" },
    ];
        
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    cards.map((card, index) => (
                        <Summary
                            key={index}
                            title={card.title}
                            value={card.value}
                            Icon={card.icon}
                            colorIcon={card.colorIcon}
                        />
                    ))
                }
            </div>
            <NewLeads data={leadsData} />
            <ConversionRate leads={leadsForConversion} />
            <LeadsByUserType leads={leadsByUserType} />
        </>
    ); 
};
