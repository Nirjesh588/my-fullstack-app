package com.tutor.tutor.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tutor.tutor.model.TutorProfile;
import com.tutor.tutor.service.TutorProfileService;

@RestController
@RequestMapping("/api/v1/tutor-profiles")
@CrossOrigin(origins = "http://localhost:3000")
public class TutorProfileController {
    private final TutorProfileService tutorProfileService;

    
    
    public TutorProfileController(TutorProfileService tutorProfileService) {
        this.tutorProfileService = tutorProfileService;
    }

    @PostMapping("/save")
    public ResponseEntity<TutorProfile> createTutorProfile( @RequestBody TutorProfile tutorProfile) {
        TutorProfile savedProfile = tutorProfileService.createTutorProfile(tutorProfile);
        return new ResponseEntity<>(savedProfile, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<TutorProfile>> getAllTutors() {
      List<TutorProfile> tutors = tutorProfileService.getAllTutors();
       return new ResponseEntity<>(tutors, HttpStatus.OK);
    }

   // @GetMapping
   // public ResponseEntity<List<TutorProfileDTO>> getAllTutors() {
   ////     List<TutorProfileDTO> tutors = tutorProfileService.getAllTutors();
   //     return ResponseEntity.ok(tutors);
    
    
    
    
    // Exception handling
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }
}