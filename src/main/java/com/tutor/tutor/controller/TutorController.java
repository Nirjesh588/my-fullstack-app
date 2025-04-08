package com.tutor.tutor.controller;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.tutor.tutor.model.Tutor;

import com.tutor.tutor.service.TutorService;



@RestController
@RequestMapping("/api/tutors")
@CrossOrigin(origins = "http://localhost:3000") // Allow React frontend to access API
public class TutorController {

    @Autowired
    private TutorService tutorService;

    @PostMapping("/save")
    public ResponseEntity<Tutor> saveTutor(@RequestBody Tutor tutor) {
    	
        Tutor savedTutor = tutorService.saveTutor(tutor);
        return ResponseEntity.ok(savedTutor);
    }
    
    
}










