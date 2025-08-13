"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts';
import { useEffect, useState } from 'react';

const data = [
    { name: '1', primaryLine: 68, secondaryLine: 62 },
    { name: '2', primaryLine: 60, secondaryLine: 60 },
    { name: '3', primaryLine: 65, secondaryLine: 64 },
    { name: '4', primaryLine: 67, secondaryLine: 66 },
    { name: '5', primaryLine: 70, secondaryLine: 65 },
    { name: '6', primaryLine: 75, secondaryLine: 62 },
    { name: '7', primaryLine: 80, secondaryLine: 63 },
    { name: '8', primaryLine: 82, secondaryLine: 65 },
    { name: '9', primaryLine: 76, secondaryLine: 64 },
    { name: '10', primaryLine: 80, secondaryLine: 66 },
    { name: '11', primaryLine: 73, secondaryLine: 65 },
    { name: '12', primaryLine: 78, secondaryLine: 67 },
];

const customTickStyle = {
    fontWeight: '510',
    fontSize: '19.55px',
    lineHeight: '24.44px',
    fill: '#fff',
};

const CustomDot = ({ cx, cy }) => (
    <svg
        x={cx - 12}
        y={cy - 12}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="1" />
        <circle cx="12" cy="12" r="11" fill="#95A4FC" />
        <circle cx="12" cy="12" r="7" fill="white" />
    </svg>
);

export default function LineChartComponent() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkSize = () => setIsSmallScreen(window.innerWidth <= 1200);
        checkSize();
        window.addEventListener("resize", checkSize);
        return () => window.removeEventListener("resize", checkSize);
    }, []);

    const labelStyle = {
        fontWeight: '510',
        fontSize: '32px',
        lineHeight: '150%',
        letterSpacing: '-0.04em',
        textAlign: 'center',
        fill: '#fff',
    };

    return (
        <div className="font-sfPro" style={{ width: '100%', height: '100%', borderRadius: '10px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: isSmallScreen ? 30 : 152,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid vertical horizontal={false} strokeDasharray="3 3" stroke="#444" />

                    <XAxis
                        dataKey="name"
                        label={{ position: 'insideBottom', offset: -5, style: labelStyle }}
                        axisLine={false}
                        tickLine={false}
                        stroke="#fff"
                        tick={(props) => (
                            <g transform={`translate(${props.x},${props.y})`}>
                                <text
                                    y={props.dy + 16}
                                    x={0}
                                    textAnchor="middle"
                                    style={customTickStyle}
                                >
                                    {props.payload.value}
                                </text>
                            </g>
                        )}
                    />

                    <YAxis
                        type="number"
                        domain={[45, 85]}
                        axisLine={false}
                        tickLine={false}
                        stroke="#fff"
                        tick={(props) => {
                            const xOffset = isSmallScreen ? -50 : -145;
                            return (
                                <g transform={`translate(${props.x},${props.y})`}>
                                    <text
                                        x={xOffset}
                                        y={0}
                                        textAnchor="start"
                                        style={customTickStyle}
                                    >
                                        {props.payload.value}
                                    </text>
                                </g>
                            );
                        }}
                    />

                    <Tooltip
                        contentStyle={{ backgroundColor: '#333', border: 'none', color: '#fff' }}
                        itemStyle={{ color: '#fff' }}
                    />

                    <Line
                        type="monotone"
                        dataKey="primaryLine"
                        stroke="#8884d8"
                        strokeWidth={2.5}
                        activeDot={<CustomDot />}
                        dot={<CustomDot />}
                    />

                    <Line
                        type="monotone"
                        dataKey="secondaryLine"
                        stroke="#aaa"
                        strokeDasharray="5 5"
                        strokeWidth={2.5}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
