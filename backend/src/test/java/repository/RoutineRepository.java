package repository;

import model.Routine;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

// this interface lets us interact with the database table for routines
// spring automatically gives us basic CRUD methods so we dont need to write them all manually
@Repository
public interface RoutineRepository extends CrudRepository<Routine, Long> {
    // the entity is Routine and the ID is a Long
    // we can use this to save, find, delete etc. routines from db
}
