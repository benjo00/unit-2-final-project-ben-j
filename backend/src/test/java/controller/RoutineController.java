package controller;

import model.Routine;
import repository.RoutineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
