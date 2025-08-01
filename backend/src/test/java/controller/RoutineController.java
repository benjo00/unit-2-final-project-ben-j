import model.Routine;
import repository.RoutineRepository;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class RoutineController {

    @Autowired
    private RoutineRepository routineRepository;

    // just injected the repo so it can be used
}
