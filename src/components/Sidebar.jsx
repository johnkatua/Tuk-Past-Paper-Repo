import React from "react";
import { FaSchool } from "react-icons/fa";
import { BsListUl, BsNewspaper } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const menus = [
  {
    name: "Faculties",
    icon: <FaSchool />,
    path: "/admin-dashboard",
  },
  {
    name: "Courses",
    icon: <BsListUl />,
    path: "/courses",
  },
  {
    name: "Papers",
    icon: <BsNewspaper />,
    path: "/admin-papers",
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        {menus.map((item) => (
          <li>
            <NavLink
              to={item.path}
              className={(data) =>
                data.isActive ? "sidebar--items__active" : "sidebar--items"
              }
            >
              <span className="sidebar--icon">{item.icon}</span>
              <span className="sidebar--name">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
