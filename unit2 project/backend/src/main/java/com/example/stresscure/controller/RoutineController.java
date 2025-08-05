
package com.example.stresscure.controller;

import com.example.stresscure.model.Routine;
import com.example.stresscure.repository.RoutineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/routines")
@CrossOrigin(origins = "http://localhost:5173")
public class RoutineController {

    @Autowired
    private RoutineRepository routineRepo;

    // get all routines
    @GetMapping
    public List<Routine> getAll() {
        return routineRepo.findAll();
    }

    // get routine by id
    @GetMapping("/{id}")
    public Routine getById(@PathVariable Long id) {
        return routineRepo.findById(id).orElse(null); // null lol
    }

    // add new routine
    @PostMapping
    public Routine create(@RequestBody Routine routine) {
        return routineRepo.save(routine);
    }

    // update existing routine
    @PutMapping("/{id}")
    public Routine update(@PathVariable Long id, @RequestBody Routine routine) {
        Routine existing = routineRepo.findById(id).orElse(null);
        if (existing != null) {
            existing.setTitle(routine.getTitle());
            existing.setDescription(routine.getDescription());
            return routineRepo.save(existing);
        }
        return null;
    }

    // delete routine
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        routineRepo.deleteById(id);
    }
}
