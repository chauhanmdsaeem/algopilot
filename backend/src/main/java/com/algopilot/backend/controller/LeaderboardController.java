package com.algopilot.backend.controller;

import com.algopilot.backend.entity.Submission;
import com.algopilot.backend.repository.SubmissionRepository;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/leaderboard")
@CrossOrigin(origins = "http://localhost:5173")
public class LeaderboardController {

    private final SubmissionRepository submissionRepository;

    public LeaderboardController(SubmissionRepository submissionRepository) {
        this.submissionRepository = submissionRepository;
    }

    @GetMapping
    public List<Map<String, Object>> getLeaderboard() {
        List<Submission> allSubmissions = submissionRepository.findAll();

        // Group by user email and calculate distinct problems solved
        Map<String, Long> userSolvedCounts = allSubmissions.stream()
                .collect(Collectors.groupingBy(
                        Submission::getUserEmail,
                        Collectors.mapping(Submission::getProblemId, Collectors.toSet())
                ))
                .entrySet().stream()
                .collect(Collectors.toMap(Map.Entry::getKey, e -> (long) e.getValue().size()));

        // Convert to a ranked list
        List<Map<String, Object>> leaderboard = new ArrayList<>();
        userSolvedCounts.forEach((email, solved) -> {
            Map<String, Object> userStats = new HashMap<>();
            // Only show the username part of the email for privacy
            String username = email.contains("@") ? email.split("@")[0] : email; 
            userStats.put("username", username);
            userStats.put("solved", solved);
            userStats.put("points", solved * 10); // 10 points per problem
            leaderboard.add(userStats);
        });

        // Sort by points descending
        leaderboard.sort((a, b) -> Long.compare((Long) b.get("points"), (Long) a.get("points")));

        // Add ranks
        for (int i = 0; i < leaderboard.size(); i++) {
            leaderboard.get(i).put("rank", i + 1);
        }

        return leaderboard;
    }
}