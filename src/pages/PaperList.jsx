import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPapers } from '../features/paper/paperSlice';

const PaperList = () => {
  const papers = useSelector(selectAllPapers);
  return (
    <div>PaperList</div>
  )
}

export default PaperList;