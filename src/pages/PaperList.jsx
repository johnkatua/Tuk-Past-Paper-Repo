import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPapers, fetchPapers } from '../features/paper/paperSlice';
import Details from './Details';
import PaperExcerpt from './PaperExcerpt';

const PaperList = () => {
  const dispatch = useDispatch();
  const papers = useSelector(selectAllPapers);
  const paperStatus = useSelector(state => state.papers.status);

  useEffect(() => {
    if (paperStatus === 'idle') {
      dispatch(fetchPapers());
    }
  }, [paperStatus, dispatch]);

  let content;

  if (paperStatus === 'succeeded') {
    const fetchedPapers = papers.papers[0].data;
    content = fetchedPapers.map(paper => (
      <Details key={paper.name} paper={paper} />
    ))
  }
  
  return (
    <div className='details--container'>
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
        <table>
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
          <tr>
            {content}
            {/* <td>
              name
            </td> */}
          </tr>
          {/* {content} */}
          {/* <tr>
            <div>
              {content}
            </div>
          </tr> */}
        </table>
      </div>
    </div>
  )
}

export default PaperList;