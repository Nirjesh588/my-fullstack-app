import React, { useEffect, useState } from "react";
import axios from "axios";
import BookingForm from "../Dashboard/BookingForm";

const AccordionTutorList = () => {
  const [tutors, setTutors] = useState([]);
  const [filteredTutors, setFilteredTutors] = useState([]);
  const [expandedTutorId, setExpandedTutorId] = useState(null);
  const [selectedTutor, setSelectedTutor] = useState(null);

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [minExperience, setMinExperience] = useState(0);
  const [sortOrder, setSortOrder] = useState("none");

  // Fetch tutors on mount
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/tutor-profiles")
      .then((res) => {
        setTutors(res.data);
        setFilteredTutors(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Get unique values for dropdowns
  const getUniqueValues = (field) => {
    const values = tutors.map((tutor) => tutor[field]);
    return ["All", ...new Set(values)];
  };

  // Filter logic including search term
  const handleFilterChange = () => {
    let updated = [...tutors];

    // Filter by search term
    if (searchTerm.trim() !== "") {
      updated = updated.filter((tutor) =>
        tutor.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by subject
    if (selectedSubject !== "All") {
      updated = updated.filter((tutor) => tutor.subject === selectedSubject);
    }

    // Filter by location
    if (selectedLocation !== "All") {
      updated = updated.filter((tutor) => tutor.location === selectedLocation);
    }

    // Filter by minimum experience
    if (minExperience > 0) {
      updated = updated.filter((tutor) => tutor.experience >= minExperience);
    }

    // Sorting by rate
    if (sortOrder === "asc") {
      updated.sort((a, b) => a.hourlyRate - b.hourlyRate);
    } else if (sortOrder === "desc") {
      updated.sort((a, b) => b.hourlyRate - a.hourlyRate);
    }

    setFilteredTutors(updated);
  };

  // Reset filters to default values
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedSubject("All");
    setSelectedLocation("All");
    setMinExperience(0);
    setSortOrder("none");
  };

  // Run filters when any filter state changes
  useEffect(() => {
    handleFilterChange();
  }, [searchTerm, selectedSubject, selectedLocation, minExperience, sortOrder, tutors]);

  const styles = {
    container: {
      padding: "30px",
      fontFamily: "Segoe UI, sans-serif",
      background: "linear-gradient(135deg, #f0f8ff, #e0ffff)",
      minHeight: "100vh",
      maxWidth: "900px",
      margin: "auto",
    },
    header: {
      textAlign: "center",
      fontSize: "2rem",
      marginBottom: "25px",
      color: "#2c3e50",
    },
    filterBar: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "15px",
      marginBottom: "25px",
      backgroundColor: "#ffffffcc",
      padding: "15px",
      borderRadius: "12px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    },
    filterInput: {
      padding: "8px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "0.95rem",
      minWidth: "160px",
    },
    resetButton: {
      padding: "8px 12px",
      borderRadius: "6px",
      border: "none",
      backgroundColor: "#e74c3c",
      color: "#fff",
      fontSize: "0.95rem",
      cursor: "pointer",
      minWidth: "120px",
    },
    accordionItem: {
      border: "1px solid #ccc",
      borderRadius: "10px",
      marginBottom: "10px",
      backgroundColor: "#fff",
    },
    accordionHeader: {
      padding: "15px",
      fontSize: "1.1rem",
      fontWeight: "bold",
      cursor: "pointer",
      backgroundColor: "#d1ecf1",
      color: "#0c5460",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    accordionBody: {
      padding: "15px",
      backgroundColor: "#fdfdfd",
    },
    field: {
      marginBottom: "8px",
      fontSize: "0.95rem",
    },
    icon: {
      marginRight: "6px",
    },
    bookBtn: {
      marginTop: "10px",
      padding: "6px 12px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>🎓 Available Tutors</h1>

      {/* Filter Toolbar */}
      <div style={styles.filterBar}>
        {/* Search Bar */}
        <input
          type="text"
          placeholder="🔍 Search by Name"
          value={searchTerm}
          style={styles.filterInput}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Subject Filter */}
        <select
          style={styles.filterInput}
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          {getUniqueValues("subject").map((subject) => (
            <option key={subject} value={subject}>
              🧮 {subject}
            </option>
          ))}
        </select>

        {/* Location Filter */}
        <select
          style={styles.filterInput}
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          {getUniqueValues("location").map((location) => (
            <option key={location} value={location}>
              📍 {location}
            </option>
          ))}
        </select>

        {/* Minimum Experience */}
        <input
          type="number"
          placeholder="💼 Min Experience"
          min="0"
          value={minExperience}
          style={styles.filterInput}
          onChange={(e) => setMinExperience(Number(e.target.value))}
        />

        {/* Sort by Rate */}
        <select
          style={styles.filterInput}
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="none">💰 Sort by Rate</option>
          <option value="asc">⬆️ Low to High</option>
          <option value="desc">⬇️ High to Low</option>
        </select>

        {/* Reset Filters Button */}
        <button style={styles.resetButton} onClick={resetFilters}>
          🗑️ Reset Filters
        </button>
      </div>

      {/* Tutor Accordion List */}
      {filteredTutors.map((tutor) => (
        <div key={tutor.id} style={styles.accordionItem}>
          <div
            style={styles.accordionHeader}
            onClick={() =>
              setExpandedTutorId(expandedTutorId === tutor.id ? null : tutor.id)
            }
          >
            <span>
              {tutor.name} — <em>{tutor.subject}</em>
            </span>
            <span>{expandedTutorId === tutor.id ? "▲" : "▼"}</span>
          </div>
          {expandedTutorId === tutor.id && (
            <div style={styles.accordionBody}>
              <p style={styles.field}>
                <span style={styles.icon}>💼</span>
                <strong>Experience:</strong> {tutor.experience} years
              </p>
              <p style={styles.field}>
                <span style={styles.icon}>💰</span>
                <strong>Rate:</strong> ₹{tutor.hourlyRate}/hr
              </p>
              <p style={styles.field}>
                <span style={styles.icon}>📍</span>
                <strong>Location:</strong> {tutor.location}
              </p>
              <p style={styles.field}>
                <span style={styles.icon}>📅</span>
                <strong>Availability:</strong>{" "}
                {tutor.availability?.join(", ")}
              </p>
              <p style={styles.field}>
                <span style={styles.icon}>📝</span>
                <strong>Bio:</strong> {tutor.bio}
              </p>
              {/* Additional information can be added here as needed */}
              <button
                style={styles.bookBtn}
                onClick={() => setSelectedTutor(tutor)}
              >
                Request For Free Demo
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Booking Form Modal */}
      {selectedTutor && (
        <BookingForm
          tutor={selectedTutor}
          onClose={() => setSelectedTutor(null)}
        />
      )}
    </div>
  );
};

export default AccordionTutorList;





