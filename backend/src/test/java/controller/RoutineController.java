package controller;

import model.Routine;
import repository.RoutineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RoutineController {

    @Autowired
    private RoutineRepository routineRepository;

    // just injected the repo so we can use it
}
