import React from 'react';
import { Table } from 'react-bootstrap';

const TableComponent = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Year</th>
          <th>Academic Year</th>
          <th>Status</th>
          <th>Course Code</th>
          <th>Level</th>
          <th>Faculty</th>
          <th>View</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Github</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TableComponent