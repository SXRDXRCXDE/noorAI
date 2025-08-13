"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Cell,
} from "recharts";
import { useEffect, useState } from "react";

const data = [
    { name: "6-8 ans", value: 65 },
    { name: "", value: null }, // Spacing
    { name: "", value: 55 },
    { name: "", value: null }, // Spacing
    { name: "9-11 ans", value: 60 },
    { name: "", value: null }, // Spacing
    { name: "", value: 50 },
    { name: "", value: null }, // Spacing
    { name: "12-14 ans", value: 55 },
    { name: "", value: null }, // Spacing
    { name: "", value: 45 }, // The new blue bar
];

const colors = [
    "#6B6F7B",
    "transparent",
    "#64C4E1",
    "transparent",
    "#6B6F7B",
    "transparent",
    "#64C4E1",
    "transparent",
    "#6B6F7B",
    "transparent",
    "#64C4E1",
];

export default function BarChartComponent() {
    const [windowWidth, setWindowWidth] = useState(1200); // Default for SSR

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const customTickStyle = {
        fontWeight: "510",
        fill: "#fff",
    };

    const customStyle = {
        fontWeight: "510",
        fill: "#fff",
    };

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                padding: "20px",
                borderRadius: "10px",
            }}
        >
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    barSize={133}
                    barCategoryGap={13}
                    margin={{
                        top: 20,
                        right: 30,
                        left: windowWidth <= 980 ? 5 : 70,
                        bottom: 50,
                    }}
                >
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={(props) => (
                            <g
                                transform={`translate(${props.x},${props.y}) translate(0, 50)`}
                            >
                                <text
                                    {...props}
                                    x={0}
                                    y={0}
                                    textAnchor="middle"
                                    style={customStyle}
                                    className="text-[24.55px] max-[1200px]:text-[18px]"
                                >
                                    {props.payload.value}
                                </text>
                            </g>
                        )}
                        tickFormatter={(value) => (value === "" ? "" : value)}
                        interval={0}
                    />
                    <YAxis
                        type="number"
                        domain={[40, 75]}
                        axisLine={false}
                        tickLine={false}
                        tick={(props) => {
                            const translateClass =
                                "max-[980px]:-translate-x-6 -translate-x-[80px]";

                            return (
                                <g
                                    transform={`translate(${props.x},${props.y})`}
                                    className={translateClass}
                                >
                                    <text
                                        {...props}
                                        x={0}
                                        y={0}
                                        textAnchor="start"
                                        style={customTickStyle}
                                        className="text-[24.55px] max-[1200px]:text-[18px]"
                                    >
                                        {props.payload.value}
                                    </text>
                                </g>
                            );
                        }}
                        tickFormatter={(value) => `${value}`}
                    />

                    <Bar dataKey="value" radius={[20, 20, 20, 20]}>
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={colors[index]}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
