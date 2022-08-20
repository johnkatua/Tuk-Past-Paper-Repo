import React from 'react'
import { useSelector } from 'react-redux';
import { selectPaperById } from '../features/paper/paperSlice';

const SinglePaperPage = ({ match }) => {
  const { paperId } = match.params;
  const paper = useSelector(state => selectPaperById(state, paperId))
  return (
    <div>SinglePaperPage</div>
  )
}

export default SinglePaperPage