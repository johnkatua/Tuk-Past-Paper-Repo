import { useSelector } from "react-redux"

const PaperList = () => {
  const { papers } = useSelector((state) => state.papers);

  console.log(papers);
  return (
    <div className='admin--dashboard__list'>
      <h3 className='admin--list__header'>Paper List</h3>
      <div className='admin--list'>A</div>
    </div>
  )
}

export default PaperList