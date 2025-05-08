import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const ConversionRate = ({ leads }) => {
    const totalLeads = leads.length;

    const { converted, in_progress, newLead, lost } = leads.reduce((acc, lead) => {
        acc[lead.status] = (acc[lead.status] || 0) + 1;
        return acc;
    }, { converted: 0, in_progress: 0, newLead: 0, lost: 0 });

    const data = {
        labels: ["Convertidos", "En seguimiento", "Nuevos", "Perdidos"],
        datasets: [
            {
                data: [converted, in_progress, newLead, lost],
                backgroundColor: ["#16a34a", "#3b82f6", "#9ca3af", "#ef4444"],
                borderWidth: 1,
            },
        ],
    };

    const conversionRate = totalLeads === 0 ? 0 : ((converted / totalLeads) * 100).toFixed(2);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold mb-4">Tasa de Conversión</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div>
                    <p className="text-4xl font-bold text-green-600 mb-2">{conversionRate}%</p>
                    <p className="text-gray-500">({converted} de {totalLeads} leads)</p>
                </div>
                <div className="w-48 h-48">
                    <Doughnut data={data} />
                </div>
            </div>
        </div>
    );
};
