package service;

import model.Routine;
import repository.RoutineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoutineService {

    @Autowired
    private RoutineRepository routineRepository;

    // injecting the repository

    // returns a list of all routines
    public List<Routine> getAllRoutines() {
        return routineRepository.findAll();
    }

    // saving a routine to db
    public Routine saveRoutine(Routine routine) {
        return routineRepository.save(routine);
    }
}
