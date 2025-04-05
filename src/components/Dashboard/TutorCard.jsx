import React from "react";

const TutorCard = ({ tutor, onBook }) => {
  const cardStyle = {
    background: "linear-gradient(145deg, #ffffff, #e6f7ff)",
    border: "1px solid #d0eaff",
    borderRadius: "15px",
    padding: "20px",
    width: "300px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
    cursor: "pointer",
  };

  const headingStyle = {
    color: "#2c3e50",
    marginBottom: "10px",
  };

  const labelStyle = {
    fontWeight: "bold",
    color: "#34495e",
  };

  const bioStyle = {
    fontStyle: "italic",
    color: "#555",
    marginTop: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#3498db",
    color: "white",
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    marginTop: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background 0.3s",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.02)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 style={headingStyle}>{tutor.name}</h2>
      <p>
        <span style={labelStyle}>Subject:</span> {tutor.subject}
      </p>
      <p>
        <span style={labelStyle}>Experience:</span> {tutor.experience} years
      </p>
      <p>
        <span style={labelStyle}>Rate:</span> ₹{tutor.hourlyRate}/hr
      </p>
      <p>
        <span style={labelStyle}>Location:</span> {tutor.location}
      </p>
      <p>
        <span style={labelStyle}>Available on:</span>{" "}
        {tutor.availability.join(", ")}
      </p>
      <p style={bioStyle}>{tutor.bio}</p>
      <button style={buttonStyle} onClick={onBook}>
        📅 Book
      </button>
    </div>
  );
};

export default TutorCard;


