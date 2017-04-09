import React from 'react';
import PropTypes from 'prop-types';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

class Chart extends React.Component {

  render() {
    const marginData = { top: 5, right: 30, left: 40, bottom: 5 };
    return (
      <LineChart width={700} height={400} data={this.props.data} margin={marginData}>
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

Chart.propTypes = {
  data: PropTypes.array
}

export default Chart;
