import React, { Component, PropTypes } from 'react';
import { Table } from 'react-bootstrap';

class RatesTable extends Component {

  prepareHeader(headers){
    const columnNames = headers.map((header, index) => <th key={index}>{header}</th>);
    return (
      <thead>
        <tr>
          {columnNames}
        </tr>
      </thead>);

  }

  prepareBody(data){
    const tableBody = data.map((rowData, index) => {
      const row = rowData.map(column => <td>{column}</td>)
      return <tr key={index}>{row}</tr>;
    });

    return (
      <tbody>
        {tableBody}
      </tbody>
    );
  }

  render() {
    const headerRow = this.prepareHeader(this.props.headers || []);
    const bodyRow = this.prepareBody(this.props.data || [])
    return (
      <Table striped hover>  
        {headerRow}
        {bodyRow}
      </Table>
    );
  }
}

RatesTable.propTypes = {

};

export default RatesTable;