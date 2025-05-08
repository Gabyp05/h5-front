import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { useExportToCSV } from "@/app/hooks/useExportToCSV";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const LeadsByUserType = ({ leads }) => {
    const userTypes = ["Individual", "Profesional", "Empresa"];
    
    const counts = userTypes.map(type =>
        leads.filter(lead => lead.userType === type).length
    );

    const csvData = leads.map(lead => ({
        id: lead.id,
        Usuario: lead.userType,
    }));

    const data = {
        labels: userTypes,
        datasets: [
            {
                label: "Leads",
                data: counts,
                backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#9ca3af"],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Leads por Tipo de Usuario",
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Cantidad de Leads",
                },
            },
            x: {
                title: {
                    display: true,
                    text: "Tipo de Usuario",
                },
            },
        },
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <Bar data={data} options={options} />
            <button
                onClick={() => useExportToCSV(csvData)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Exportar
            </button>
        </div>
    );
};
