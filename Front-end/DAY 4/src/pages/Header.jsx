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
          {/* Signin/Signup */}
          <div className="navbar-item">
            <div className="buttons">
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">
                <Link to="/signin" className="button is-light">Signin</Link>
                </div>
                <div className="navbar-dropdown">
                  <Link to="/signin" className="navbar-item">User</Link>
                  <Link to="/signin" className="navbar-item">Admin</Link>
                </div>
              </div>
              
              <Link to="/signup" className="button is-primary">Signup</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
