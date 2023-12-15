import React, { useState } from 'react';
import './Form.css';

const Form = () => {
 const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    dateOfBirth: '',
    location: '',
    language: 'English',
 });

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
 };

 const changeLanguage = (e) => {
    setFormData({ ...formData, language: e.target.value });
 };

 return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Moderator Registration KYC Form, Personal Information</h2>
      <h2>Language: {formData.language}</h2>
      <select value={formData.language} onChange={changeLanguage}>
        <option value="English">English</option>
        <option value="Telugu">Telugu</option>
        <option value="Hindi">Hindi</option>
      </select>

      <label htmlFor="fullName">Full Name</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="contactNumber">Contact Number</label>
      <input
        type="text"
        id="contactNumber"
        name="contactNumber"
        value={formData.contactNumber}
        onChange={handleChange}
      />

      <label htmlFor="dateOfBirth">Date of Birth</label>
      <input
        type="date"
        id="dateOfBirth"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
      />

      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        name="location"
        value={formData.location}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
 );
};

export default Form;