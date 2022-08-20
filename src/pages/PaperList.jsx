import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPapers, fetchPapers } from '../features/paper/paperSlice';

const PaperList = () => {
  const dispatch = useDispatch();
  const papers = useSelector(selectAllPapers);
  const paperStatus = useSelector(state => state.papers.status);

  useEffect(() => {
    if (paperStatus === 'idle') {
      dispatch(fetchPapers());
    }
  }, [paperStatus, dispatch]);
  
  return (
    <div>PaperList</div>
  )
}

export default PaperList;