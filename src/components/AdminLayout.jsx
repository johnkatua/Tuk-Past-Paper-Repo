import { useState } from 'react'

const AdminLayout = () => {
  const [show, setShow] = useState(false);
  console.log(show);

  const handleSidebar = () => {
    if(!show) {
      setShow(true)
    } else {
      setShow(false)
    }
  };
  return (
    <div className='admin--layout'>
      <div className='admin--layout__header' onClick={() => handleSidebar()}>Header</div>
      <div className='admin--layout__body'>
        <div className={`${show ? "admin--sidebar" : "admin--sidebar__closed"}`}>Sidebar</div>
        <div className={`${show ? "admin--content" : "admin--content__opened"}`}>Children</div>
      </div>
    </div>
  )
}

export default AdminLayout