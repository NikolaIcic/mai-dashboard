import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const GamePieChart = ({ results, games }) => {
    const predictions = ['N', '1', 'X', '2', '2+', '3+', '0-2', 'GG'];
    const colors = ['var(--blue0)', '#0088FE', '#00C49F', '#FFBB28', '#FF8042','#d320f7','#1ead11','#c71829'];
    const radian = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
        const x = cx + radius * Math.cos(-midAngle * radian);
        const y = cy + radius * Math.sin(-midAngle * radian);
        if ((percent * 100).toFixed(0) < 1)
            return null;

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const changeData = () => {
        let temp = [0, 0, 0, 0, 0, 0, 0, 0];
        results.forEach(agent => {
            agent.predictions.forEach(pred => {
                temp[predictions.findIndex(p => p == pred.Name)]++;
            })
        });
        let res = [];
        temp.forEach((x, index) => {
            res.push({ "name": predictions[index], "value": x });
        })
        return res;
    }
    const [data, setData] = useState(changeData());

    return (
        <ResponsiveContainer width='100%' height='100%'>
            <PieChart>
                <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="45%"
                    innerRadius={50} outerRadius={120} fill="var(--blue2)" label={renderCustomizedLabel} labelLine={false}>
                    {data.map((el, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    )
}

export default GamePieChart