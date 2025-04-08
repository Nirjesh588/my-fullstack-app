package com.tutor.tutor.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tutor.tutor.model.Tutor;


import com.tutor.tutor.repository.TutorRepository;



@Service
public class TutorService {

    @Autowired
    private TutorRepository tutorRepository;

    public Tutor saveTutor(Tutor tutor) {
        return tutorRepository.save(tutor);
    }

	

	
	
	
	
	
	
	
	
}

