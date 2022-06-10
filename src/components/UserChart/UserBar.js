import React, { useEffect, useState } from "react";
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const CustomizedDot = (props) => {
    const { cx, cy, value } = props;

    return (
        <svg
            x={cx - 10}
            y={cy - 10}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="16"
                cy="16"
                r="12"
                fill="#4F9BFF"
                stroke="white"
                stroke-width="8"
            />
        </svg>
    );
};

const UserBar = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const d = [];
        for (let i = 0; i <= 4; i++) {
            d.push({
                name: `${i} name`,
                ROI: Math.round(Math.random() * 100),
                idx: i,
            });
        }
        setData(d);
    }, []);

    return (
        <div>
            <ResponsiveContainer width="100%" aspect={2}>
                <BarChart data={data} barSize={50}>
                    <Tooltip cursor={false} />
                    <XAxis
                        dataKey="idx"
                        scale="band"
                        padding={{ left: 20, right: 20 }}
                    />
                    <YAxis dx={-10} padding={{ bottom: 10 }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="ROI" fill="#7BB7FF" radius={8} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default UserBar;
