import React, { useState } from "react";

//Chart
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { UserData } from "./Data";

const LineChart = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "",
                data: UserData.map((data) => data.userGain),
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 20, 200);
                    gradient.addColorStop(0, "#9D69F8");
                    gradient.addColorStop(1, "#FFFFFF00");
                    return gradient;
                },
                borderColor: "transparent",
                borderWidth: 3,
                tension: 0.3,
                fill: "start",
                pointRadius: 7,
                pointBackgroundColor: "#9E68F8",
            },
        ],
    });

    const options = {
        plugins: {
            legend: {
                labels: {
                    display: false,
                },
            },
        },
    };

    return (
        <div>
            <Line data={userData} options={options} />
        </div>
    );
};

export default LineChart;
