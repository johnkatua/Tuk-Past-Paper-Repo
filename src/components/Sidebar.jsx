import React from 'react';
import { FaSchool } from 'react-icons/fa';
import { BsListUl, BsNewspaper } from 'react-icons/bs';

const menus = [
  {
    name: 'Faculties',
    icon: <FaSchool />,
    path: '/admin-dashboard',
  },
  {
    name: 'Courses',
    icon: <BsListUl />,
    path: '/admin-dashboard',
  },
  {
    name: 'Papers',
    icon: <BsNewspaper />,
    path: '/admin-dashboard',
  }
]

const Sidebar = () => {
  return (
    <div className='sidebar'>Sidebar</div>
  )
}

export default Sidebar;