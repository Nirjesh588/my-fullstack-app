package com.tutor.tutor.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.tutor.tutor.model.Tutor;


public interface TutorRepository extends JpaRepository<Tutor, Long> {
}
