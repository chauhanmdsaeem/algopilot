package com.algopilot.backend.controller;

import com.algopilot.backend.dto.AuthResponse;
import com.algopilot.backend.dto.LoginRequest;
import com.algopilot.backend.dto.SignupRequest;
import com.algopilot.backend.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody SignupRequest request) {
        try {
            String response = authService.registerUser(request);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        try {
            String token = authService.loginUser(request);
            return ResponseEntity.ok(new AuthResponse(token, "Login successful"));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(new AuthResponse(null, e.getMessage()));
        }
    }
}