// Header.jsx

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">HOME CARE</Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="/land" className="navbar-item">Home</Link>
          <Link to="/services" className="navbar-item">Services</Link>
          <Link to="/about" className="navbar-item">About</Link>
          <Link to="/contact" className="navbar-item">Contact</Link>
          {/* Add Signin/Signup option */}
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/signin" className="button is-light">Signin</Link>
              <Link to="/signup" className="button is-primary">Signup</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
