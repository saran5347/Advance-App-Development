import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../../assets/css/AdminPage.css'

const AdminServices = () => {
  // Dummy data for demonstration
  const [services, setServices] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', service: 'Health care', date: '2024-03-20', status: 'Pending' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', service: 'Home cleaning', date: '2024-03-21', status: 'Completed' },
    { id: 3, name: 'Tamil Amuthu', email: 'tamil@example.com', service: 'Gardening services', date: '2024-03-21', status: 'Completed' },
    { id: 4, name: 'Tamil Amuthu', email: 'tamil@example.com', service: 'Gardening services', date: '2024-03-21', status: 'Completed' },
    { id: 5, name: 'Tamil Amuthu', email: 'tamil@example.com', service: 'Gardening services', date: '2024-03-21', status: 'Completed' },
    // Add more service data as needed
  ]);

  // Function to handle status change
  const handleStatusChange = (index, event) => {
    // Update status for the service at the specified index
    const updatedServices = [...services];
    updatedServices[index].status = event.target.value;
    // Update the services state
    setServices(updatedServices);
  };

  return (
    <div className="admin-page">
      {/* Add your admin services management UI */}
      <div className="admin-services-container">
        <Sidebar />
        <div className="admin-content">
          <h1 className="title is-1">Admin Services Management</h1>
          {/* Add functionality for managing services (e.g., adding, deleting, editing) */}
          {/* For example: */}
          <div className="admin-services-actions">
            <Link to="/admin/services/add" className="button is-primary">Add New Service</Link>
            {/* Add more buttons for other actions as needed */}
          </div>
          {/* Display the list of services in a table */}
          <div className="admin-services-table">
            <table className="table is-bordered is-striped is-narrow is-hoverable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Service</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={service.id}>
                    <td>{service.name}</td>
                    <td>{service.email}</td>
                    <td>{service.service}</td>
                    <td>{service.date}</td>
                    <td>
                      <div className="select is-fullwidth">
                        <select
                          value={service.status}
                          onChange={(event) => handleStatusChange(index, event)}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Completed">Completed</option>
                          <option value="Newly Booked">Newly Booked</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminServices;
