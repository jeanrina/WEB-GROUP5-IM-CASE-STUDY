import React, { useState } from 'react';
import './Staff.css';

const Staff = () => {
  const [staff, setStaff] = useState({
    staffNumber: '',
    firstName: '',
    lastName: '',
    address: '',
    telephone: '',
    dob: '',
    sex: '',
    nic: '',
    position: '',
    currentSalary: '',
    salaryScale: ''
  });

  const [qualification, setQualification] = useState({
    fullName: '',
    email: '',
    birthDate: '',
    maritalStatus: '',
    address: '',
    age: '',
    contactNumber: '',
    registeredDate: '',
    specialization: ''
  });

  const handleInputChange = (e, section) => {
    const { name, value } = e.target;
    if (section === 'staff') {
      setStaff({ ...staff, [name]: value });
    } else {
      setQualification({ ...qualification, [name]: value });
    }
  };

  const handleUpdate = () => {
    // Add update logic here
  };

  const handleDelete = () => {
    // Add delete logic here
  };

  const handleSubmit = () => {
    // Add submit logic here
  };

  return (
    <div className="staff-container">
      <div className="search-section">
        <div className="search-box">
          <input type="text" placeholder="Enter staff number" />
          <button>Search</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Card Number</th>
              <th>Name</th>
              <th>Address</th>
              <th>Contact Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PHX-CA-00123</td>
              <td>John Doe</td>
              <td>123 Elm St, Springfield</td>
              <td>555-1234</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      
      <div className="details-section">
        <div className="staff-details">
          <h3>Staff</h3>
          <input name="staffNumber" value={staff.staffNumber} onChange={(e) => handleInputChange(e, 'staff')} placeholder="Staff number" />
          <input name="firstName" value={staff.firstName} onChange={(e) => handleInputChange(e, 'staff')} placeholder="First name" />
          <input name="lastName" value={staff.lastName} onChange={(e) => handleInputChange(e, 'staff')} placeholder="Last name" />
          <input name="address" value={staff.address} onChange={(e) => handleInputChange(e, 'staff')} placeholder="Address" />
          <input name="telephone" value={staff.telephone} onChange={(e) => handleInputChange(e, 'staff')} placeholder="Telephone number" />
          <input name="dob" value={staff.dob} onChange={(e) => handleInputChange(e, 'staff')} placeholder="Date of birth" />
          <input name="sex" value={staff.sex} onChange={(e) => handleInputChange(e, 'staff')} placeholder="Sex" />
          <input name="nic" value={staff.nic} onChange={(e) => handleInputChange(e, 'staff')} placeholder="NIC" />
          <input name="position" value={staff.position} onChange={(e) => handleInputChange(e, 'staff')} placeholder="Position held" />
          <input name="currentSalary" value={staff.currentSalary} onChange={(e) => handleInputChange(e, 'staff')} placeholder="Current salary" />
          <input name="salaryScale" value={staff.salaryScale} onChange={(e) => handleInputChange(e, 'staff')} placeholder="Salary scale" />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
        
        <div className="qualification-details">
          <h3>Qualification</h3>
          <input name="fullName" value={qualification.fullName} onChange={(e) => handleInputChange(e, 'qualification')} placeholder="Full name" />
          <input name="email" value={qualification.email} onChange={(e) => handleInputChange(e, 'qualification')} placeholder="Email" />
          <input name="birthDate" value={qualification.birthDate} onChange={(e) => handleInputChange(e, 'qualification')} placeholder="Birth date" />
          <input name="maritalStatus" value={qualification.maritalStatus} onChange={(e) => handleInputChange(e, 'qualification')} placeholder="Marital status" />
          <input name="address" value={qualification.address} onChange={(e) => handleInputChange(e, 'qualification')} placeholder="Address" />
          <input name="age" value={qualification.age} onChange={(e) => handleInputChange(e, 'qualification')} placeholder="Age" />
          <input name="contactNumber" value={qualification.contactNumber} onChange={(e) => handleInputChange(e, 'qualification')} placeholder="Contact number" />
          <input name="registeredDate" value={qualification.registeredDate} onChange={(e) => handleInputChange(e, 'qualification')} placeholder="Registered date" />
          <input name="specialization" value={qualification.specialization} onChange={(e) => handleInputChange(e, 'qualification')} placeholder="Specialization" />
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Staff;
