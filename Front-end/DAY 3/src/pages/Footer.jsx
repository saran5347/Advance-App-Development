
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer has-background-dark has-text-white">
      <div className="content has-text-centered">
        <p>&copy; 2024 YourCompany. All rights reserved.</p>
        <div>
          <p><FaMapMarkerAlt /> 123 Street, City, Country</p>
          <p><FaPhone /> +123 456 789</p>
          <p><FaEnvelope /> info@example.com</p>
        </div>
        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
