import React, { useState, useEffect } from 'react';

function Profile() {
  const [sponsorDetails, setSponsorDetails] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    nic: '',
    password: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Simulate fetching sponsor details (replace with actual logic)
    const storedDetails = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
      company: 'Tech Corp',
      nic: '123456789V',
      password: '********',
    };
    setSponsorDetails(storedDetails);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSponsorDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Simulate saving updated details (replace with actual logic)
    console.log('Updated Sponsor Details:', sponsorDetails);
    setIsEditing(false);
  };

  return (
    <div className="container mt-5 mb-5">
      <h2>Profile</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={sponsorDetails.name}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={sponsorDetails.email}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={sponsorDetails.phone}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Company</label>
          <input
            type="text"
            className="form-control"
            name="company"
            value={sponsorDetails.company}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">NIC Number</label>
          <input
            type="text"
            className="form-control"
            name="nic"
            value={sponsorDetails.nic}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={sponsorDetails.password}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>
        <div className="d-flex">
          {!isEditing ? (
            <button className="btn btn-primary me-2" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          ) : (
            <button className="btn btn-success me-2" onClick={handleSave}>
              Save
            </button>
          )}
          {isEditing && (
            <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
