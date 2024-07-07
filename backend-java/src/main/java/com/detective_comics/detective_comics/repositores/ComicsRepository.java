package com.detective_comics.detective_comics.repositores;

import com.detective_comics.detective_comics.models.Comics;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComicsRepository extends JpaRepository<Comics, Long> {
}
