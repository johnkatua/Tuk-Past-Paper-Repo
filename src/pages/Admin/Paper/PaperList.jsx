import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPapers } from "../../../features/paper/paperSlice";
import { IconContext } from "react-icons";
import { AiOutlineDelete } from "react-icons/ai";

const PaperList = () => {
  const dispatch = useDispatch();
  const { papers } = useSelector((state) => state.papers);

  useEffect(() => {
    dispatch(fetchPapers({ page: 1, limit: 10 }));
  }, []);

  console.log(papers);

  return (
    <div className="admin--dashboard__list">
      <h3 className="admin--list__header">Papers</h3>
      <ul>
        {papers.map((paper) => (
          <li key={paper.id}>
            <div
              className="admin--list"
              // onClick={() => dispatch(getSelectedFaculty(faculty))}
            >
              <div className="list--header">{paper.name}</div>
              <div className="list--details">{paper.status}</div>
            </div>
            <IconContext.Provider
              value={{ color: "red", size: "1.2rem", title: "Delete" }}
            >
              <div
                className="list--delete"
                // onClick={() => dispatch(deleteFaculty(faculty._id))}
              >
                <AiOutlineDelete />
              </div>
            </IconContext.Provider>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaperList;
