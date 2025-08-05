
package com.example.stresscure.controller;

import com.example.stresscure.model.Note;
import com.example.stresscure.model.Routine;
import com.example.stresscure.repository.NoteRepository;
import com.example.stresscure.repository.RoutineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "http://localhost:5173")
public class NoteController {

    @Autowired
    private NoteRepository noteRepo;

    @Autowired
    private RoutineRepository routineRepo;

    // get all notes
    @GetMapping
    public List<Note> getAllNotes() {
        return noteRepo.findAll();
    }

    // get note by id
    @GetMapping("/{id}")
    public Note getNote(@PathVariable Long id) {
        return noteRepo.findById(id).orElse(null);
    }

    // create a new note for a routine
    @PostMapping
    public Note createNote(@RequestBody Note note) {
        // save note
        return noteRepo.save(note);
    }

    // update a note
    @PutMapping("/{id}")
    public Note updateNote(@PathVariable Long id, @RequestBody Note note) {
        Note existing = noteRepo.findById(id).orElse(null);
        if (existing != null) {
            existing.setText(note.getText());
            return noteRepo.save(existing);
        }
        return null;
    }

    // delete a note
    @DeleteMapping("/{id}")
    public void deleteNote(@PathVariable Long id) {
        noteRepo.deleteById(id);
    }
}
