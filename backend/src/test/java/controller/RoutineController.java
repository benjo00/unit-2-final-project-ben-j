package controller;

import model.Routine;
import service.RoutineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
