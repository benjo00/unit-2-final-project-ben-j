package controller;

import model.Routine;
import repository.RoutineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RoutineController {

    @Autowired
    private RoutineRepository routineRepository;

    // just injected the repo so we can use it

    // basic get endpoint to return all routines
    @GetMapping("/routines")
    public List<Routine> getAllRoutines() {
        return routineRepository.findAll();
    }

    // new post endpoint to save a routine
    // needs a routine json in the request body
    @PostMapping("/routines")
    public Routine createRoutine(@RequestBody Routine routine) {
        return routineRepository.save(routine);
    }
}
