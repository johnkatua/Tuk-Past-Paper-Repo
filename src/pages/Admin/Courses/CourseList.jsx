import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconContext } from 'react-icons/lib';
import { AiOutlineDelete } from 'react-icons/ai';

const CourseList = () => {
  const dispatch =  useDispatch();
  const { courses } = useSelector((state) => state.courses);
  return (
    <div className='admin--dashboard__list'>
      <h3 className='admin--list__header'>Papers</h3>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <div className='admin--list'>
              <div className='list--header'>{course.name}</div>
              <div className='list--details'>{course.courseCode}</div>
            </div>
            <IconContext.Provider value={{ color: 'red', size: '1.2rem', title: "Delete "}}>
              <div className='list--delete'>
                <AiOutlineDelete />
              </div>
            </IconContext.Provider>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseList

{/* <div className="admin--dashboard__list">
      <h3 className="admin--list__header">Papers</h3>
      <ul>
        {papers.map((paper) => (
          <li key={paper.id}>
            <div
              className="admin--list"
              onClick={() => dispatch(getSelectedPaper(paper))}
            >
              <div className="list--header">{paper.name}</div>
              <div className="list--details">{paper.status}</div>
            </div>
            <IconContext.Provider
              value={{ color: "red", size: "1.2rem", title: "Delete" }}
            >
              <div
                className="list--delete"
                onClick={() => dispatch(deletePaper({id: paper.id}))}
              >
                <AiOutlineDelete />
              </div>
            </IconContext.Provider>
          </li>
        ))}
      </ul>
    </div> */}