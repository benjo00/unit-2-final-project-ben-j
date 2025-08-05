
package com.example.stresscure.repository;

import com.example.stresscure.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, Long> {}
