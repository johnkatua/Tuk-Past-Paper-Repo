import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Viewer } from "@react-pdf-viewer/core";
import { openModal, closeModal } from "../features/modal/modalSlice";
import DisplayPaperModal from "./Modal";
import { addPaperToFav } from "../features/favorite/favoriteSlice";

const TableComponent = ({ data }) => {
  const dispatch = useDispatch();
  const [paperDetails, setPaperDetails] = useState(null);
  const modalStatus = useSelector((state) => state.modal.show);

  const handleClick = (item) => {
    dispatch(openModal());
    setPaperDetails(item);
  };

  const handleFavoritePapers = (item) => {
    dispatch(addPaperToFav(item));
  };

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
          <th>Add to favorite</th>
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
              <Button variant="link" onClick={() => handleClick(paper)}>
                View
              </Button>
              <DisplayPaperModal
                show={modalStatus}
                close={() => dispatch(closeModal())}
                content={<Viewer fileUrl={paperDetails?.file} />}
              />
            </td>
            <td>
              <Button onClick={() => handleFavoritePapers(paper)}>
                Add to favorite
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
