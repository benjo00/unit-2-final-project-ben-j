
package com.example.stresscure.model;

import jakarta.persistence.*;
import java.util.List;

// This is the JPA entity for the Routine object.
// Each instance represents a meditation routine with a title and description.

@Entity
public class Routine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;

    // A routine can have many notes linked to it.
// When the routine is deleted, the notes are also removed.
    @OneToMany(mappedBy = "routine", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Note> notes;

    public Routine() {}

    public Routine(String title, String description) {
        this.title = title;
        this.description = description;
    }

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getDescription() { return description; }
    public List<Note> getNotes() { return notes; }

    public void setTitle(String title) { this.title = title; }
    public void setDescription(String description) { this.description = description; }
    public void setNotes(List<Note> notes) { this.notes = notes; }
}
