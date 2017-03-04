import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

class Chart extends React.Component {

  render() {
    return (
      <LineChart 
        width={700} 
        height={400} 
        data={this.props.data}
        margin={ { top: 5, right: 30, left: 40, bottom: 5 } }
      >
         <XAxis dataKey="date"/>
         <YAxis scale="auto" domain={['dataMin', 'dataMax']}/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <Line type="monotone" dataKey="rate" stroke="#82ca9d" />
      </LineChart>
    );
  }
}

export default Chart;
