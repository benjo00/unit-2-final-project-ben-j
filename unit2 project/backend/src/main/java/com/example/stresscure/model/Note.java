
package com.example.stresscure.model;

import jakarta.persistence.*;

@Entity
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String text;

    @ManyToOne
    @JoinColumn(name = "routine_id")
    private Routine routine;

    public Note() {}

    public Note(String text, Routine routine) {
        this.text = text;
        this.routine = routine;
    }

    public Long getId() { return id; }
    public String getText() { return text; }
    public Routine getRoutine() { return routine; }

    public void setText(String text) { this.text = text; }
    public void setRoutine(Routine routine) { this.routine = routine; }
}
