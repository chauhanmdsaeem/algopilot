package com.algopilot.backend.repository;

import com.algopilot.backend.entity.Problem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProblemRepository extends JpaRepository<Problem, Long> {
    // We will add custom search methods here on Day 17
}