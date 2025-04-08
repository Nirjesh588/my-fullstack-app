package com.tutor.tutor.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tutor.tutor.dto.TutorProfileDTO;
import com.tutor.tutor.dto.TutorProfileDTO.TutorProfileUtils;
import com.tutor.tutor.model.TutorProfile;
import com.tutor.tutor.repository.TutorProfileRepository;

@Service

public class TutorProfileService {

    private final TutorProfileRepository tutorProfileRepository;  // Field name should be in camelCase

    // Constructor injection (recommended)
    @Autowired
    public TutorProfileService(TutorProfileRepository tutorProfileRepository) {
        this.tutorProfileRepository = tutorProfileRepository;
    }

    public TutorProfile createTutorProfile(TutorProfile tutorProfile) {
        // Add business logic/validation here
        return tutorProfileRepository.save(tutorProfile);  // Call on instance, not interface
    }

    
    private TutorProfileDTO convertToDTO(TutorProfile tutor) {
        TutorProfileDTO dto = new TutorProfileDTO();
        dto.setId(tutor.getId());
        dto.setName(tutor.getName());
        dto.setSubject(tutor.getSubject());
        dto.setHourlyRate(tutor.getHourlyRate());
        dto.setExperience(tutor.getExperience());
        dto.setBio(tutor.getBio());
        dto.setLocation(tutor.getLocation());
        // Format availability as PostgreSQL array string
        dto.setAvailability(TutorProfileUtils.formatPostgresArray(tutor.getAvailability()));
        return dto;
    }
    
    
    
	
	
	public List<TutorProfile> getAllTutors() {
        List<TutorProfile> tutors = tutorProfileRepository.findAll();
        return tutors;
    }
	
	
	
	
}