import React from "react";
import { useNavigate } from "react-router-dom";

const toolTipList = [
  {
    name: "Account Settings",
    link: "/account",
  },
  {
    name: "My Papers",
    link: "/favorite",
  },
  {
    name: "Admin Dashboard",
    link: "/admin-dashboard",
  },
];

const ToolTipContent = () => {
  const navigate = useNavigate();
  return (
    <div className="tooltip--content">
      <ul>
        {toolTipList.map((data) => (
          <li onClick={() => navigate(data.link)}>{data.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToolTipContent;
