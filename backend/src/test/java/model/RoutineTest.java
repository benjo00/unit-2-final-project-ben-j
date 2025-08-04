package model;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class RoutineTest {

    @Test
    public void testRoutineConstructorAndGetters() {
        Routine routine = new Routine("Running", "30 minutes");

        assertEquals("Running", routine.getActivity());
        assertEquals("30 minutes", routine.getDuration());
    }

    @Test
    public void testSetters() {
        Routine routine = new Routine();
        routine.setActivity("Yoga");
        routine.setDuration("1 hour");

        assertEquals("Yoga", routine.getActivity());
        assertEquals("1 hour", routine.getDuration());
    }
}
