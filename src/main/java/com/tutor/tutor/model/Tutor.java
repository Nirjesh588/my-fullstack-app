package com.tutor.tutor.model;



import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Entity
@Table(name = "tutors")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Tutor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @JsonProperty("name")  // Ensure JSON correctly maps to this field
    private String name;

    @Column(nullable = false)
    @JsonProperty("phone")
    private String phone;

    @Column(nullable = false)
    @JsonProperty("email")
    private String email;

    @Column(nullable = false)
    @JsonProperty("date")
    private String date;

    @Column(nullable = false)
    @JsonProperty("time")
    private String time;
}
