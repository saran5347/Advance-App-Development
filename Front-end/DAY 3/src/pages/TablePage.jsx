import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../assets/css/TablePage.css'; // Import your CSS file for styling

const TablePage = () => {
  // Dummy data for demonstration
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', service: 'Health care', date: '2024-03-20' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', service: 'Home cleaning', date: '2024-03-21' },
    { id: 3, name: 'Tamil Amuthu', email: 'tamil@example.com', service: 'Gardening services', date: '2024-03-21' },
    { id: 4, name: 'Saran', email: 'saran@example.com', service: 'home care', date: '2024-03-21' },
    { id: 5, name: 'Sivaudhaya', email: 'siva@example.com', service: 'Gardening services', date: '2024-03-21' },
    // Add more data as needed
  ];

  // Function to handle edit action
  const handleEdit = (id) => {
    // Implement edit functionality
    console.log(`Edit item with id ${id}`);
  };

  // Function to handle delete action
  const handleDelete = (id) => {
    // Implement delete functionality
    console.log(`Delete item with id ${id}`);
  };

  // Function to handle make payment action
  const handleMakePayment = (id) => {
    // Implement make payment functionality
    console.log(`Make payment for item with id ${id}`);
  };

  return (
    <div className="table-page">
      <Header />
      <div className="table-container">
        <h1 className="title is-1 sec">Booked Services</h1>
        <div className="table-wrapper">
          <table className="table is-bordered is-striped is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Service</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.service}</td>
                  <td>{item.date}</td>
                  <td>
                    <div className="buttons">
                      <button className="button is-primary" onClick={() => handleEdit(item.id)}>Edit</button>
                      <button className="button is-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                      <button className="button is-success" onClick={() => handleMakePayment(item.id)}>Make Payment</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TablePage;
