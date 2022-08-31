import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Viewer } from "@react-pdf-viewer/core";
import DisplayPaperModal from "../components/Modal";
import { selectAllPapers, fetchPapers } from "../features/paper/paperSlice";
import { openModal, closeModal } from "../features/modal/modalSlice";

const PaperList = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector(state => state.papers);
  console.log(currentPage);
  console.log(totalPages);
  const papers = useSelector(selectAllPapers);
  const paperStatus = useSelector((state) => state.papers.status);
  const modalStatus = useSelector((state) => state.modal.show);
  const [page, setPage] = useState(currentPage);

  console.log("papers", papers);

  useEffect(() => {
    if (paperStatus === "idle") {
      dispatch(fetchPapers(2));
    }
  }, [paperStatus, dispatch]);

  let content;

  if (paperStatus === "succeeded") {
    const fetchedPapers = papers.papers[0].data;
    content = fetchedPapers.map((paper) => {
      return paper;
    });
  }

  const handleClick = (item) => {
    dispatch(openModal());
    setData(item);
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page >= 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="details--container">
      <div className="details--search__bar">
        <input type="search" placeholder="Find a paper" />
        <div className="details--select__items">
          <select name="courses" id="courses">
            <option value="ABMI">ABMI</option>
            <option value="ABME">ABME</option>
          </select>
          <select name="courses" id="courses">
            <option value="ABMI">FSST</option>
            <option value="ABME">FAST</option>
            <option value="ABME">FEBE</option>
          </select>
        </div>
      </div>
      <div className="details--table">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Year</th>
              <th>AcademicYear</th>
              <th>Status</th>
              <th>CourseCode</th>
              <th>Level</th>
              <th>Faculty</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {content?.map((paper) => (
              <tr key={paper.name}>
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
                    content={<Viewer fileUrl={data.file} />}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div>
        <button>
          Prev
        </button>
        <span>{page}</span>
        <button onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PaperList;
