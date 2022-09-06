import React from "react";
import { Button, Table } from "react-bootstrap";
import DisplayPaperModal from "./Modal";

const TableComponent = ({ data, show, close, content, handleClick }) => {
  return (
    <Table striped bordered responsive>
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
        {data?.map((paper) => (
          <tr key={paper.id}>
            <td>{paper.name}</td>
            <td>{paper.year}</td>
            <td>{paper.academicYear}</td>
            <td>{paper.status}</td>
            <td>{paper.courseCode}</td>
            <td>{paper.courseLevel}</td>
            <td>{paper.faculty}</td>
            <td>
              <Button variant="link" onClick={handleClick}>
                View
              </Button>
              <DisplayPaperModal
                show={show}
                close={close}
                content={content}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
