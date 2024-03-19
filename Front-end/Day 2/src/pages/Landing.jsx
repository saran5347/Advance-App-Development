import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/css/Landingcss.css'
import Header from './Header';
import Footer from './Footer'; 

const LandingPage = () => {
  return (
    <div>
           <Header />

      {/* Hero Section */}
      <section className="hero is-primary is-bold is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Home Helper Services for Seniors</h1>
            <h2 className="subtitle">Providing compassionate care and assistance for your loved ones.</h2>
            <Link to="/services" className="button is-primary is-large">Discover Our Services</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
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

      {/* Other Companies Section */}
      <section className="section">
        <div className="container">
          <h2 className="title is-3 section-title">Trusted by Other Companies</h2>
          <div className="columns">
            <div className="column is-2">
              <img src="http://127.0.0.1:5500/assets/images/contest-01.jpg" alt="Company 1" />
            </div>
            <div className="column is-2">
              <img src="http://127.0.0.1:5500/assets/images/contest-02.jpg" alt="Company 2" />
            </div>
            <div className="column is-2">
              <img src="http://127.0.0.1:5500/assets/images/contest-01.jpg" alt="Company 3" />
            </div>
            <div className="column is-2">
              <img src="http://127.0.0.1:5500/assets/images/contest-02.jpg" alt="Company 4" />
            </div>
            <div className="column is-2">
              <img src="http://127.0.0.1:5500/assets/images/contest-01.jpg" alt="Company 5" />
            </div>
            <div className="column is-2">
              <img src="http://127.0.0.1:5500/assets/images/contest-02.jpg" alt="Company 6" />
            </div>
          </div>
        </div>
      </section>

      {/* Mini Slideshow Section */}
      <section className="section carousel-container">
        <div className="container">
          <h2 className="title is-3 section-title"> What clients say?</h2>
          <Carousel className="custom-carousel">
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0f0Qehtlm6ew8V0gdXCfsIo-yNq61PAdfVRxzUKFNzZTFN_fOyPkzA9E3bJoByJII8gc&usqp=CAU" />
              <div className="service-description">
                <p>Get Trustworthy and Safe domestic help services for you now: Sulekha has a wide range of domestic help providers in the Coimbatore </p>
              </div>
            </div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cn7F8f_o80mBKLxGjBqjqTNQmHRZ68EQBg&usqp=CAU" />
              <div className="service-description">
                <p>Get Trustworthy and Safe domestic help services for you now: Sulekha has a wide range of domestic help providers in the Coimbatore </p>
              </div>
            </div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Ym72PuTc8wNJix-JinXaBxw43jjOMvl1FA&usqp=CAU" />
              <div className="service-description">
                <p>Get Trustworthy and Safe domestic help services for you now: Sulekha has a wide range of domestic help providers in the Coimbatore </p>
              </div>
            </div>
          </Carousel>
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
