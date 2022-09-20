import { useState } from "react";
import { AiOutlineUser } from 'react-icons/ai';
import { BsList } from 'react-icons/bs';

const AdminLayout = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleSidebar = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  return (
    <div className="admin--layout">
      <div className="admin--layout__header">
        <div className="admin--title">
          <div className="admin--icon"  onClick={handleSidebar}>
            <BsList />
          </div>
          <div className="admin--title__content">
            Tuk Admin Dashboard
          </div>
        </div>
        <div className="admin--auth">
          <AiOutlineUser />
        </div>
      </div>
      <div className="admin--layout__body">
        <div
          className={`${show ? "admin--sidebar__closed" : "admin--sidebar"}`}
        >
          Sidebar
        </div>
        <div
          className={`${show ? "admin--content__opened" : "admin--content"}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
