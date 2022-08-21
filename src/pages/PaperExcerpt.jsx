import React from 'react';

const PaperExcerpt = ({ paper }) => {
  return (
    <article>
      <h3>{paper.name}</h3>
      <p>{paper.year}</p>
      <p>{paper.status}</p>
      <p>{paper.faculty}</p>
      <p>{paper.academicYear}</p>
      <p>{paper.courseCode}</p>
      <p>{paper.courseLevel}</p>
    </article>
  )
}

export default PaperExcerpt;