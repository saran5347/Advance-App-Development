
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../assets/css/Services.css'

const Services = () => {
  return (
    <div>
      <Header />
      
      {/* Book a Service Section */}
     <section className="hero is-primary is-bold is-medium wavy-animation">
  <div className="hero-body">
    <div className="container">
      <div className="columns is-vcentered">
        <div className="column">
          <h1 className="title is-1">Book a Service</h1>
          <p>If you are interested in any of our services, please book a service now.</p>
        </div>
        <div className="column is-narrow">
          <Link to="/booking" className="button is-primary is-large">Book Now</Link>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h1 className="title is-1">Our Services</h1>
          <div className="columns is-multiline">
            <div className="column is-one-third">
              <div className="card">
                <div className="card-image">
                  <img src="https://media.istockphoto.com/id/469552020/photo/young-female-doctor-is-consulting-a-senior-patient.jpg?s=612x612&w=0&k=20&c=iKfPLIh7RpxjlMT28Gbya9rLUC1PxM6Pvrln-qpAdOo=" alt="Service 1" />
                </div>
                <div className="card-content">
                  <p className="title">Service 1</p>
                  <p>Description of Service 1.</p>
                </div>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="card">
                <div className="card-image">
                  <img src="https://media.istockphoto.com/id/1092112802/photo/friendly-nurse-supporting-an-eldery-lady.jpg?b=1&s=612x612&w=0&k=20&c=eWnFwtntrchEQtaOHtJU-cgp9NsZhvgr5Lp7kfxZq8o=" alt="Service 2" />
                </div>
                <div className="card-content">
                  <p className="title">Service 2</p>
                  <p>Description of Service 2.</p>
                </div>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="card">
                <div className="card-image">
                  <img src="https://media.istockphoto.com/id/507249540/photo/love-between-family-members.jpg?s=612x612&w=0&k=20&c=64vivQ4_eh7wJ-jSgPA0M0ZItUk1S5R-RXFiRyFUtdE=" alt="Service 3" />
                </div>
                <div className="card-content">
                  <p className="title">Service 3</p>
                  <p>Description of Service 3.</p>
                </div>
              </div>
            </div>
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

export default Services;
