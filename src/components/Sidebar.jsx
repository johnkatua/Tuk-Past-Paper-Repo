import React from 'react';
import { FaSchool } from 'react-icons/fa';
import { IoNewspaperSharp, IoList } from 'react-icons/io';

const menus = [
  {
    name: 'Faculties',
    icon: <FaSchool />,
    path: '/admin-dashboard',
  },
  {
    name: 'Courses',
    icon: <IoList />,
    path: '/admin-dashboard',
  },
  {
    name: 'Papers',
    icon: <IoNewspaperSharp />,
    path: '/admin-dashboard',
  }
]

const Sidebar = () => {
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar;