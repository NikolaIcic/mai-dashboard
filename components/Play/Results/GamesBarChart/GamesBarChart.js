import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

const GamesBarChart = ({ results, games }) => {
  const predictions = ['N', '1', 'X', '2', '2+', '3+', '0-2', 'GG'];

  let data = [];
  games.forEach((game, index) => {
    let temp = [0, 0, 0, 0, 0, 0, 0, 0];
    results.forEach(res => {
      temp[predictions.findIndex(p => p == res.predictions[index].Name)]++
    })
    let pred1 = predictions[0];
    let max1 = temp[0];
    let pred2 = predictions[0];
    let max2 = temp[0];
    for (let i = 1; i < predictions.length; i++) {
      if (temp[i] > max1) {
        pred2 = pred1;
        max2 = max1;
        pred1 = predictions[i];
        max1 = temp[i];
      }
      else if (temp[i] > max2 && temp[i] <= max1) {
        pred2 = predictions[i];
        max2 = temp[i];
      }
    }
    data.push({
      name: game.name,
      value1: max1,
      prediction1: pred1,
      value2: max2,
      prediction2: pred2
    })
  });

  const renderTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className='text-center' style={{ backgroundColor: 'var(--gray1)', padding: '15px' }}>
          <h4 className='mb-1'>{label}</h4>
          <p>{payload[0].payload.prediction1} : {payload[0].payload.value1}</p>
          <p>{payload[0].payload.prediction2} : {payload[0].payload.value2}</p>
        </div>
      );
    }
    return null;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={renderTooltip} />
        
        <Bar dataKey="value1" fill="var(--blue1)" maxBarSize={210} activeBar={<Rectangle fill="var(--blue1)" stroke="gold" />}>
          <LabelList
            dataKey="prediction1"
            position="inside"
            style={{ fill: '#fff' }}
            fontSize={'21px'}
          />
        </Bar>
        <Bar dataKey="value2" fill="purple" maxBarSize={210} activeBar={<Rectangle stroke="gold" />}>
          <LabelList
            dataKey="prediction2"
            position="inside"
            style={{ fill: '#fff' }}
            fontSize={'21px'}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default GamesBarChart