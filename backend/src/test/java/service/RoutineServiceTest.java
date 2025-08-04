package service;

import model.Routine;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import repository.RoutineRepository;
import service.RoutineService;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class RoutineServiceTest {

    private RoutineRepository routineRepository;
    private RoutineService routineService;

    @BeforeEach
    public void setUp() {
        routineRepository = Mockito.mock(RoutineRepository.class);
        routineService = new RoutineService();
        // manually inject the mock
        routineService.routineRepository = routineRepository;
    }

    @Test
    public void testGetAllRoutines() {
        Routine r1 = new Routine("Run", "30 minutes");
        Routine r2 = new Routine("Swim", "1 hour");
        List<Routine> mockRoutines = Arrays.asList(r1, r2);

        when(routineRepository.findAll()).thenReturn(mockRoutines);

        List<Routine> result = routineService.getAllRoutines();

        assertEquals(2, result.size());
        assertEquals("Run", result.get(0).getActivity());
        verify(routineRepository, times(1)).findAll();
    }

    @Test
    public void testSaveRoutine() {
        Routine r = new Routine("Yoga", "45 minutes");

        when(routineRepository.save(r)).thenReturn(r);

        Routine saved = routineService.saveRoutine(r);

        assertEquals("Yoga", saved.getActivity());
        verify(routineRepository, times(1)).save(r);
    }
}
