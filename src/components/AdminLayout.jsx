import React from 'react'

const AdminLayout = () => {
  return (
    <div className='admin--layout'>
      <div className='admin--layout__header'>Header</div>
      <div className='admin--layout__body'>
        <div className='admin--sidebar'>Sidebar</div>
        <div className='admin--content'>Children</div>
      </div>
    </div>
  )
}

export default AdminLayout