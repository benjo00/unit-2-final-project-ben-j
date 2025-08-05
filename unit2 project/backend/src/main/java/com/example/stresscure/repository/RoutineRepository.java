
package com.example.stresscure.repository;

import com.example.stresscure.model.Routine;
import org.springframework.data.jpa.repository.JpaRepository;

// This interface allows basic CRUD operations on Routine entities.
// Spring automatically provides the implementation.

public interface RoutineRepository extends JpaRepository<Routine, Long> {}
