// AboutUs.jsx

import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div>
      <Header />
      {/* About Us Section */}
      <section className="section">
        <div className="container">
          <h1 className="title is-1">About Us</h1>
          <div className="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ultrices ipsum, non varius risus suscipit et.</p>
            <p>Phasellus vel erat a nulla interdum tempus non vel tellus. Fusce sed magna pretium, condimentum magna non, vehicula eros. Nam non arcu suscipit, fermentum turpis in, ultrices turpis.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section has-background-grey-light">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <h2 className="title is-3">Ready to get started?</h2>
              <p>Let us help you provide the best care for your loved ones.</p>
            </div>
            <div className="column">
              <Link to="/contact" className="button is-primary is-large">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
