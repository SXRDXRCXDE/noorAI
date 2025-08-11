import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts';

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

const CustomDot = (props) => {
    const { cx, cy } = props;
    return (
        <svg x={cx - 12} y={cy - 12} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="1"/>
            <circle cx="12" cy="12" r="11" fill="#95A4FC"/>
            <circle cx="12" cy="12" r="7" fill="white"/>
        </svg>
    );
};

const LineChartComponent = () => {
    const pointCount = data.length;
    const desiredPointSpacing = 82;
    const requiredWidth = (pointCount - 1) * desiredPointSpacing;

    // New style object for the X-axis label
    const labelStyle = {

        fontWeight: '510',
        fontSize: '32px',
        lineHeight: '150%',
        letterSpacing: '-0.04em', // -4% is equivalent to -0.04em
        textAlign: 'center',
        fill: '#fff',
    };

    return (
        <div className={`font-sfPro`} style={{ width: '100%', height: `100%`, padding: '0', borderRadius: '10px' }}>
            <ResponsiveContainer className={`outline-0`} style={{
                outline:`none`
            }} width="100%" height="100%">
                <LineChart
                    className={`outline-0`}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 152,
                        bottom: 5,
                    }}
                    style={{
                        outlineColor:`transparent`,
                        outline: 'none',
                        border: 'none',
                    }}
                >
                    <CartesianGrid vertical={true} horizontal={false} strokeDasharray="3 3" stroke="#444" />

                    <XAxis
                        dataKey="name"
                        // Applied the new style to the label
                        label={{
                            position: 'insideBottom',
                            offset: -5,
                            style: labelStyle
                        }}
                        axisLine={false}
                        tickLine={false}
                        stroke="#fff"
                        tick={props => (
                            <g transform={`translate(${props.x},${props.y})`}>
                                <text
                                    {...props}
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
                        tick={props => (
                            <g transform={`translate(${props.x},${props.y})`}>
                                <text
                                    {...props}
                                    x={-145}
                                    y={0}
                                    textAnchor="start"
                                    style={customTickStyle}
                                >
                                    {props.payload.value}
                                </text>
                            </g>
                        )}
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
};

export default LineChartComponent;