
import { Link } from 'react-router-dom';
import '../../assets/css/Sidebar.css'; // Import your CSS file for additional styling

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <h2 className="title is-4 has-text-centered">Admin Panel</h2>
        <ul className="menu-list">
          <li>
            <Link to="/admin/dashboard" className="sidebar-link">
              <span className="icon">
                <i className="fas fa-tachometer-alt"></i>
              </span>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/users" className="sidebar-link">
              <span className="icon">
                <i className="fas fa-users"></i>
              </span>
              Users
            </Link>
          </li>
          <li>
            <Link to="/admin/settings" className="sidebar-link">
              <span className="icon">
                <i className="fas fa-cog"></i>
              </span>
              Settings
            </Link>
          </li>
          <li>
            <Link to="/land" className="sidebar-link">
              <span className="icon">
                <i className="fas fa-sign-out-alt"></i>
              </span>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
