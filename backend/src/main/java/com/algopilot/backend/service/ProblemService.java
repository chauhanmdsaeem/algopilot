package com.algopilot.backend.service;

import com.algopilot.backend.entity.Problem;
import com.algopilot.backend.repository.ProblemRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProblemService {

    private final ProblemRepository problemRepository;

    public ProblemService(ProblemRepository problemRepository) {
        this.problemRepository = problemRepository;
    }

    public List<Problem> getAllProblems() {
        return problemRepository.findAll();
    }

    public Optional<Problem> getProblemById(Long id) {
        return problemRepository.findById(id);
    }

    public Problem createProblem(Problem problem) {
        return problemRepository.save(problem);
    }

    public Problem updateProblem(Long id, Problem updatedProblem) {
        return problemRepository.findById(id).map(problem -> {
            problem.setTitle(updatedProblem.getTitle());
            problem.setDifficulty(updatedProblem.getDifficulty());
            problem.setDescription(updatedProblem.getDescription());
            problem.setConstraints(updatedProblem.getConstraints());
            problem.setExamples(updatedProblem.getExamples());
            problem.setTags(updatedProblem.getTags());
            return problemRepository.save(problem);
        }).orElseThrow(() -> new RuntimeException("Problem not found"));
    }

    public void deleteProblem(Long id) {
        problemRepository.deleteById(id);
    }
}