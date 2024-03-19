// ContactUs.jsx


import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <div>
      <Header />
      {/* Contact Us Section */}
      <section className="section">
        <div className="container">
          <h1 className="title is-1">Contact Us</h1>
          <div className="content">
            <p>If you have any questions or inquiries, feel free to reach out to us using the contact information below.</p>
            <p><strong>Email:</strong> info@example.com</p>
            <p><strong>Phone:</strong> +123 456 789</p>
            <p><strong>Address:</strong> 123 Street, City, Country</p>
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

export default ContactUs;
