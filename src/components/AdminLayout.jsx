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
      <div className="admin--layout__header" onClick={handleSidebar}>
        <div className="admin--title">
          <div className="admin--icon">
            <BsList />
          </div>
          <div className="admin--content">
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
