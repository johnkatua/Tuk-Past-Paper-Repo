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
    <div className='sidebar'>
      <ul>
        {menus.map((item) => (
          <li>
            <div className='sidebar--items'>
              <span className='sidebar--icon'>{item.icon}</span>
              <span className='sidebar--name'>{item.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar;