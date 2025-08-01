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

    // using the service layer now instead of calling repo directly

    @GetMapping("/routines")
    public List<Routine> getAllRoutines() {
        return routineService.getAllRoutines();
    }

    // handles adding a new routine to the db
    @PostMapping("/routines")
    public Routine createRoutine(@RequestBody Routine routine) {
        return routineService.saveRoutine(routine);
    }
}
