package controller;

import model.Routine;
import service.RoutineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RoutineController {

    @Autowired
    private RoutineService routineService;

    // GET endpoint to return all routines
    @GetMapping("/routines")
    public List<Routine> getAllRoutines() {
        return routineService.getAllRoutines();
    }

    // POST endpoint to add a routine
    @PostMapping("/addroutine")
    public Routine addRoutine(@RequestBody Routine routine) {
        return routineService.saveRoutine(routine);
    }
}
