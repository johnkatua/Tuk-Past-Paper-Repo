import { useState } from 'react'

const AdminLayout = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div className='admin--layout'>
      <div className='admin--layout__header' onClick={(state) => setShow(!state)}>Header</div>
      <div className='admin--layout__body'>
        <div className='admin--sidebar'>Sidebar</div>
        <div className='admin--content'>Children</div>
      </div>
    </div>
  )
}

export default AdminLayout