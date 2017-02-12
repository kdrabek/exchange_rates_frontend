import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const data = [
      { name: 'Page A', uv: 4000 },
      { name: 'Page B', uv: 3000 },
      { name: 'Page C', uv: 2000 },
      { name: 'Page D', uv: 2780 },
      { name: 'Page E', uv: 1890 },
      { name: 'Page F', uv: 2390 },
      { name: 'Page G', uv: 3490 },
];

class Chart extends React.Component {
  render() {
    return (
      <LineChart width={700} height={400} data={data}
            margin={ { top: 5, right: 30, left: 20, bottom: 5 } }>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={ { r: 8 } }/>
       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    );
  }
}

export default Chart;
