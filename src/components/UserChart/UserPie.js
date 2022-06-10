import React, { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const COLORS = ["#FFEA7B", "#7BB7FF", "#B57BFF", "#FF8042"];

const UserPie = () => {
    const [data, setData] = useState([
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 },
    ]);

    return (
        <div>
            <ResponsiveContainer width="100%" aspect={1.3}>
                <PieChart width="100%" data={data}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={130}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default UserPie;
