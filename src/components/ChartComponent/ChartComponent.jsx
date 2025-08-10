import {
    ComposedChart,
    Line,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const data = [
    { name: 'Sep', value: 60 },
    { name: 'Oct', value: 62.5 },
    { name: 'Nov', value: 65 },
    { name: 'Dec', value: 67.5 },
    { name: 'Jan', value: 70 },
    { name: 'Feb', value: 72.5 },
    { name: 'Mar', value: 75 },
    { name: 'Apr', value: 77.5 },
    { name: 'May', value: 80 },
    { name: 'Jun', value: 82.5 },
    { name: 'Jul', value: 85 },
    { name: 'Aug', value: 87.5 },
];

const ChartComponent = () => {
    const CustomDot = ({ cx, cy }) => (
        <g>
            <circle cx={cx} cy={cy} r={17} fill="white" stroke="white" />
            <defs>
                <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#7D10D5', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#00BFFF', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <circle cx={cx} cy={cy} r={11} fill="url(#innerGradient)" />
        </g>
    );

    return (
        <ResponsiveContainer  width="100%" height="100%" aspect={4}>
            <ComposedChart
                data={data}
                margin={{ top: 5, right: 30, left: 100, bottom: 25 }}
            >
                <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(88, 86, 214, 0.4)" />
                        <stop offset="100%" stopColor="rgba(148, 18, 209, 0.1)" />
                    </linearGradient>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="100%" y2="0">
                        <stop offset="0%" stopColor="#4150CD" />
                        <stop offset="100%" stopColor="#4150CD" />
                    </linearGradient>
                </defs>

                <CartesianGrid stroke="#333" strokeDasharray="3 3" horizontal={false} vertical={true} />
                <XAxis className={`font-sfPro`} dataKey="name" axisLine={false} tickLine={false} tick={{
                    dy: 20,
                    fill: '#fff',
                    fontWeight: 510,
                    fontStyle: 'Medium',
                    fontSize: 19.55,
                    lineHeight: 24.44,
                    letterSpacing: 0,
                    textAlign: 'center',
                }} />
                <YAxis className={`font-sfPro`} domain={[55, 90]} ticks={[ 55, 60, 65, 70, 75, 80, 85, 90]} axisLine={false} tickLine={false} tick={{
                    dx: -100,
                    fill: '#fff',
                    fontWeight: 510,
                    fontSize: 19.55,
                    lineHeight: 24.44,
                    letterSpacing: 0,
                    textAlign: 'center',
                }} />
                <Tooltip />

                {/* Gradient fill under line */}
                <Area
                    type="monotone"
                    dataKey="value"
                    stroke="none"
                    fill="url(#colorGradient)"
                />

                {/* Line on top */}
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke="url(#lineGradient)"
                    strokeWidth={3}
                    dot={<CustomDot />}
                    activeDot={{ r: 8, strokeWidth: 2, fill: 'blue' }}
                />
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default ChartComponent;
