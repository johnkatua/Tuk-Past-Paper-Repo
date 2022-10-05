import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPapers, fetchPapers } from "../features/paper/paperSlice";
import TableComponent from "../components/TableComponent";

const PaperList = () => {
  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector((state) => state.papers);
  const papers = useSelector(selectAllPapers);
  const paperStatus = useSelector((state) => state.papers.status);
  const [page, setPage] = useState(currentPage);
  const [nextClick, setNextClick] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const LIMIT = 2;

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      setNextClick(true);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      setNextClick(true);
    }
  };

  useEffect(() => {
    if (paperStatus === "idle") {
      dispatch(fetchPapers({ limit: LIMIT, page: page * 1 }));
    }
    if (nextClick) {
      dispatch(fetchPapers({ limit: LIMIT, page: page * 1 }));
    }
    return setNextClick(false);
  }, [paperStatus, dispatch, page]);

  let content;

  if (paperStatus === "succeeded") {
    const fetchedPapers = papers.papers;
    content = fetchedPapers.map((paper) => {
      return paper;
    });
  }

  const filteredData = useMemo(() => {
    if (!searchTerm) return content;
    if (content.length > 0) {
      const attributes = Object.keys(content[0]);

    const list = [];

    for (const currentItem of content) {
      for (const attribute of attributes) {
        if (attribute === 'id') {
          continue;
        }
        const value = currentItem[attribute];
        if (value && value.toLowerCase() === searchTerm.toLowerCase()) {
          const found = content.find((item) => item.id === currentItem.id);
          if (found) {
            list.push(found);
          }
        }
      }
    }
      return list;
    }
    return [];
  }, [searchTerm, content]);

  return (
    <div className="details--container">
      <div className="details--search__bar">
        <input type="search" placeholder="Find a paper" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
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
        <TableComponent data={filteredData} />
        {/* <TableComponent data={content} /> */}
      </div>
      <div className="paper--navigation__container">
        <button
          type="button"
          onClick={handlePrevPage}
          className={`${page === 1 ? "disabled--btn" : "nav--btns"}`}
        >
          Prev
        </button>
        <span>{page}</span>
        <span>out of</span>
        <span>{totalPages}</span>
        <button
          onClick={handleNextPage}
          className={`${page === totalPages ? "disabled--btn" : "nav--btns"}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaperList;
