package com.algopilot.backend.controller;

import com.algopilot.backend.entity.Submission;
import com.algopilot.backend.repository.SubmissionRepository;
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
    public Submission submitCode(@RequestBody Submission submission, Principal principal) {
        // Attach the logged-in user's email to this submission
        submission.setUserEmail(principal.getName());
        submission.setStatus("Submitted (Pending Execution)");
        return submissionRepository.save(submission);
    }
}