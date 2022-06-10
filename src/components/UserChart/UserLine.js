import React, { useEffect, useState } from "react";
import {
    Area,
    AreaChart,
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

const UserLine = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const d = [];
        for (let i = 0; i <= 15; i++) {
            d.push({
                name: `${i} name`,
                ROI: Math.round(Math.random() * 100),
            });
        }
        setData(d);
    }, []);

    return (
        <div>
            <ResponsiveContainer width="100%" aspect={3}>
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                    }}
                >
                    <defs>
                        <linearGradient
                            id="colorview"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="40%"
                                stopColor="#4F9BFF"
                                stopOpacity={1}
                            />
                            <stop
                                offset="100%"
                                stopColor="#fff"
                                stopOpacity={0.2}
                            />
                        </linearGradient>
                    </defs>
                    <Tooltip cursor={false} />
                    <XAxis dataKey="ROI" />
                    <YAxis padding={{ top: 20, bottom: 20 }} />
                    <Tooltip />
                    <Legend />
                    <Area
                        type="monotone"
                        dataKey="ROI"
                        stroke="#4F9BFF"
                        strokeWidth={6}
                        fill="url(#colorview)"
                        activeDot={<CustomizedDot />}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default UserLine;
