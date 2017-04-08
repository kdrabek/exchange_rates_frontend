import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import RatesTable from '../RatesTable';

describe('RatesTable component', () => {

  it('matches the snapshot when empty data', () => {
    const component = renderer.create(
      <RatesTable 
        headers={['header1', 'header2', 'header3']}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches the snapshot when data passed', () => {
    const data = [
      ['row1_column1', 'row1_column2', 'row1_column2'], 
      ['row2_column1', 'row2_column2', 'row2_column2']
    ];
    const component = renderer.create(
      <RatesTable 
        headers={['header1', 'header2', 'header3']}
        data={data}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});