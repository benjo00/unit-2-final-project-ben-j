package model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Routine

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String activity;
    private String duration;


    public Routine() {
    }


    public Routine(String activity, String duration) {
        this.activity = activity;
        this.duration = duration;
    }

    // getters n setters


    public void setId(Long id) {
        this.id = id;
    }

