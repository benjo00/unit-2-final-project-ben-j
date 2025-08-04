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

    // adds a new routine to the db
    public Routine saveRoutine(Routine routine) {
        return routineRepository.save(routine);
    }

    // updates an existing routine
    public Routine updateRoutine(Long id, Routine updatedRoutine) {
        Routine routine = routineRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Routine not found"));
        routine.setActivity(updatedRoutine.getActivity());
        routine.setDuration(updatedRoutine.getDuration());
        return routineRepository.save(routine);
    }

    // deletes a routine by id
    public void deleteRoutine(Long id) {
        routineRepository.deleteById(id);
    }
}
