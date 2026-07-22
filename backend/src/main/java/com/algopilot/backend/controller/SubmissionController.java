package com.algopilot.backend.controller;

import com.algopilot.backend.entity.Submission;
import com.algopilot.backend.repository.SubmissionRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;

@RestController
@RequestMapping("/api/submissions")
@CrossOrigin(origins = "http://localhost:5173")
public class SubmissionController {

    private final SubmissionRepository submissionRepository;

    public SubmissionController(SubmissionRepository submissionRepository) {
        this.submissionRepository = submissionRepository;
    }

    @PostMapping
    public ResponseEntity<?> submitCode(@RequestBody Submission submission, Principal principal) {
        // Prevent crash if an unauthenticated request reaches this endpoint
        if (principal == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User must be logged in to submit code.");
        }

        // Attach the logged-in user's email to this submission
        submission.setUserEmail(principal.getName());
        submission.setStatus("Submitted (Pending Execution)");
        
        Submission savedSubmission = submissionRepository.save(submission);
        return ResponseEntity.ok(savedSubmission);
    }
}