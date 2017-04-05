import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Chart from '../Chart';

describe('Chart component', () => {

  it('matches the snapshot when no data passed', () => {
    const tree = renderer.create(<Chart />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches the snapshot with data passed', () => {
    const chartData = [
      {date: '2017-03-28', rate: 1.23}, 
      {date: '2017-03-29', rate: 1.45}, 
      {date: '2017-03-30', rate: 1.67}
    ];
    const tree = renderer.create(<Chart data={chartData}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
