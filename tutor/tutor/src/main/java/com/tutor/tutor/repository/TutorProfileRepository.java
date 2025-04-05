package com.tutor.tutor.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tutor.tutor.model.TutorProfile;

public interface TutorProfileRepository extends JpaRepository<TutorProfile, Long> {
	
	    
	    @Query(value = "SELECT * FROM public.tutor_profiles", nativeQuery = true)
	    List<TutorProfile> getAllTutors();
	
	
}