package com.algopilot.backend.controller;

import com.algopilot.backend.entity.Submission;
import com.algopilot.backend.repository.SubmissionRepository;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "http://localhost:5173")
public class DashboardController {

    private final SubmissionRepository submissionRepository;

    public DashboardController(SubmissionRepository submissionRepository) {
        this.submissionRepository = submissionRepository;
    }

    @GetMapping("/stats")
    public Map<String, Object> getUserStats(Principal principal) {
        String email = principal.getName();
        List<Submission> userSubmissions = submissionRepository.findByUserEmailOrderByCreatedAtDesc(email);

        // Simple aggregation logic (can be expanded once execution engine is live)
        long totalSolved = userSubmissions.stream().map(Submission::getProblemId).distinct().count();
        long totalSubmissions = userSubmissions.size();
        
        // Mocking points (e.g., 10 points per solved problem)
        long points = totalSolved * 10;

        Map<String, Object> stats = new HashMap<>();
        stats.put("totalSolved", totalSolved);
        stats.put("totalSubmissions", totalSubmissions);
        stats.put("points", points);
        
        // Return up to 5 most recent submissions
        stats.put("recentSubmissions", userSubmissions.stream().limit(5).collect(Collectors.toList()));

        return stats;
    }
}