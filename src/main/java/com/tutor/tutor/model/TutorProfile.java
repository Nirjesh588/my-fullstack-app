package com.tutor.tutor.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "tutor_profiles")
public class TutorProfile {
    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public double getHourlyRate() {
		return hourlyRate;
	}

	public void setHourlyRate(double hourlyRate) {
		this.hourlyRate = hourlyRate;
	}

	public int getExperience() {
		return experience;
	}

	public void setExperience(int experience) {
		this.experience = experience;
	}

	public String getBio() {
		return bio;
	}

	public void setBio(String bio) {
		this.bio = bio;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public List<String> getAvailability() {
		return availability;
	}

	public void setAvailability(List<String> availability) {
		this.availability = availability;
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    @JsonProperty("name")
    private String name;
    
    @Column(nullable = false)
    @JsonProperty("subject")
    private String subject;
    
    @Column(nullable = false)
    @JsonProperty("hourlyRate")
    private double hourlyRate;
    
    @Column(nullable = false)
    @JsonProperty("experience")
    private int experience;
    
    @Column(nullable = false)
    @JsonProperty("bio")
    private String bio;
    
    @Column(nullable = false)
    @JsonProperty("location")
    private String location;
    
    @Column(nullable = false, columnDefinition = "TEXT")
    @JsonProperty("availability")
    @Convert(converter = StringListConverter.class) // Add this
    private List<String> availability; // Change type to List<String>
    
 

    
    
    // Add other fields as needed
    // Getters and setters
    // Constructors
}