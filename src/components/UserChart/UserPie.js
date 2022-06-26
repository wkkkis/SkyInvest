import React, { useEffect, useState } from "react";
import { Cell, Pie, PieChart, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#FFEA7B", "#7BB7FF", "#B57BFF", "#FF8042"];

const Tip = ({ setShowTooltip, ...rest }) => {
    const [payload, setPayload] = React.useState(rest.payload);

    useEffect(() => {
        rest.payload.length && setPayload(rest.payload);
    }, [rest.payload]);

    return payload.length ? (
        <div
            onMouseLeave={() => setShowTooltip(false)}
            onMouseMove={(e) => e.stopPropagation()}
            style={{
                background: "white",
                padding: "2em",
                borderRadius: "4px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
            }}
        >
            {`${payload[0].name}: ${payload[0].value}`}
        </div>
    ) : null;
};

const UserPie = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [data, setData] = useState([
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 },
    ]);

    return (
        <ResponsiveContainer width="100%" aspect={1}>
            <PieChart width="100%" data={data}>
                <Pie
                    onMouseEnter={() => setShowTooltip(true)}
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
                {/* {showTooltip && ( */}
                <Tooltip
                    content={<Tip setShowTooltip={setShowTooltip} />}
                    wrapperStyle={{
                        visibility: "visible",
                        pointerEvents: "auto",
                        zIndex: "100",
                    }}
                />
                {/* )} */}
            </PieChart>
        </ResponsiveContainer>
    );
};

export default UserPie;
