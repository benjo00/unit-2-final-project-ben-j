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

    // returning all routines from db
    public List<Routine> getAllRoutines() {
        return routineRepository.findAll();
    }

    // adds a new routine to the db ,
    public Routine saveRoutine(Routine routine) {
        return routineRepository.save(routine);
    }
}
