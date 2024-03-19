import { useState } from 'react';

import Header from './Header';
import Footer from './Footer';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    schedule: ''
  });
  const [showDialog, setShowDialog] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Submit form data or perform other actions
      setShowDialog(true);
    } else {
      setErrors(errors);
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.serviceType.trim()) {
      errors.serviceType = 'Service type is required';
    }
    if (!formData.schedule.trim()) {
      errors.schedule = 'Schedule is required';
    }
    return errors;
  };

  return (
    <div>
      <Header />

      {/* Booking Form Section */}
      <section className="section">
        <div className="container">
          <h1 className="title is-1">Book a Service</h1>
          <div className="columns">
            <div className="column is-half">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input className="input" type="text" name="name" value={formData.name} onChange={handleChange} />
                    {errors.name && <p className="help is-danger">{errors.name}</p>}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input" type="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <p className="help is-danger">{errors.email}</p>}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Service Type</label>
                  <div className="control">
                    <div className="select">
                      <select name="serviceType" value={formData.serviceType} onChange={handleChange}>
                        <option>Select Service</option>
                        <option>Gardening services</option>
                        <option>Cooking</option>
                        <option>Home cleaning</option>
                        <option>Health care</option>
                        <option>Babysitting</option>
                        <option>House Keeping</option>
                      </select>
                    </div>
                    {errors.serviceType && <p className="help is-danger">{errors.serviceType}</p>}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Schedule</label>
                  <div className="control">
                    <input className="input" type="datetime-local" name="schedule" value={formData.schedule} onChange={handleChange} />
                    {errors.schedule && <p className="help is-danger">{errors.schedule}</p>}
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button type="submit" className="button is-primary">Book Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Dialog Box */}
      {showDialog && (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="box">
              <p>Your service has been successfully booked!</p>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={() => setShowDialog(false)}></button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Booking;
