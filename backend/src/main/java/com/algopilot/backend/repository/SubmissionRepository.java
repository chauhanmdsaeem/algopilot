package com.algopilot.backend.repository;

import com.algopilot.backend.entity.Submission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubmissionRepository extends JpaRepository<Submission, Long> {
    List<Submission> findByUserEmailOrderByCreatedAtDesc(String userEmail);
}