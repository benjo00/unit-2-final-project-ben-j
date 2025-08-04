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

    // get all routines
    @GetMapping("/routines")
    public List<Routine> getAllRoutines() {
        return routineService.getAllRoutines();
    }

    // post a new routine
    @PostMapping("/routines")
    public Routine createRoutine(@RequestBody Routine routine) {
        return routineService.saveRoutine(routine);
    }

    // update a routine by id
    @PutMapping("/routines/{id}")
    public Routine updateRoutine(@PathVariable Long id, @RequestBody Routine routine) {
        return routineService.updateRoutine(id, routine);
    }

    // delete a routine by id
    @DeleteMapping("/routines/{id}")
    public void deleteRoutine(@PathVariable Long id) {
        routineService.deleteRoutine(id);
    }
}
