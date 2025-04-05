import React, { useState } from "react";
import axios from "axios";

const BookingForm = ({ tutor, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      tutorId: tutor.id,
      ...formData
    };
    axios.post("http://localhost:8080/api/tutors/save", payload)
      .then(() => {
        alert("Booking successful!");
        onClose();
      })
      .catch(err => {
        alert("Booking failed!");
        console.error(err);
      });
  };

  return (
    <div style={{ background: "#f9f9f9", padding: "20px", marginTop: "20px", borderRadius: "10px" }}>
      <h2>Book {tutor.name}</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" onChange={handleChange} required /><br /><br />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required /><br /><br />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} required /><br /><br />
        <input name="date" type="date" onChange={handleChange} required /><br /><br />
        <input name="time" type="time" onChange={handleChange} required /><br /><br />
        <button type="submit">Confirm Booking</button>
        <button onClick={onClose} style={{ marginLeft: "10px" }}>Cancel</button>
      </form>
    </div>
  );
};

export default BookingForm;
