"use client"
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend } 
from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const NewLeads = ({ data }) => {
    const [timeFrame, setTimeFrame] = useState("day");

    const getChartData = (timeFrame) => {
        let labels = [];
        let leadsData = [];

        if (timeFrame === "day") {
            labels = data.map(item => item.day); 
            leadsData = data.map(item => item.leads); 
        } else if (timeFrame === "week") {
            labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
            leadsData = [100, 200, 150, 300]; 
        } else if (timeFrame === "month") {
            labels = ["January", "February", "March", "April"];
            leadsData = [800, 1200, 1500, 2000];
        }

        return {
            labels,
            datasets: [
                {
                    label: "New Leads",
                    data: leadsData,
                    fill: false,
                    borderColor: "#4B8B3B", 
                    tension: 0.1,
                },
            ],
        };
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: `New Leads per ${timeFrame.charAt(0).toUpperCase() + timeFrame.slice(1)}`,
            },
        },
        scales: {
            x: {
                title: {
                display: true,
                text: `${timeFrame.charAt(0).toUpperCase() + timeFrame.slice(1)} Period`, 
                },
            },
            y: {
                title: {
                display: true,
                text: "Number of Leads", 
                },
            },
        },
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">New Leads</h2>
        <div className="flex mb-4">
            <button 
            className={`mr-2 ${timeFrame === "day" ? "bg-green-500 text-white" : "bg-gray-200 text-black"} p-2 rounded`}
            onClick={() => setTimeFrame("day")}
            >
            Day
            </button>
            <button 
            className={`mr-2 ${timeFrame === "week" ? "bg-green-500 text-white" : "bg-gray-200 text-black"} p-2 rounded`}
            onClick={() => setTimeFrame("week")}
            >
            Week
            </button>
            <button 
            className={`mr-2 ${timeFrame === "month" ? "bg-green-500 text-white" : "bg-gray-200 text-black"} p-2 rounded`}
            onClick={() => setTimeFrame("month")}
            >
            Month
            </button>
        </div>
        <Line data={getChartData(timeFrame)} options={options} />
        </div>
    );
};
