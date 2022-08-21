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
    <div>
      {content}
    </div>
  )
}

export default PaperList;