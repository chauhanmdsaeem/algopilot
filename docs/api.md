# AlgoPilot API Reference

## Authentication
* **POST /api/auth/signup**: Register a new user. Expects `{ email, password, name }`.
* **POST /api/auth/login**: Authenticate a user. Returns a JWT token.

## Problems (Public & Admin)
* **GET /api/problems**: Fetch all problems.
* **GET /api/problems/{id}**: Fetch a single problem by ID.
* **POST /api/problems**: (Admin Only) Create a new problem.
* **DELETE /api/problems/{id}**: (Admin Only) Delete a problem.

## User & Interactions (Protected)
* **GET /api/dashboard/stats**: Fetch logged-in user's stats and recent activity.
* **GET /api/leaderboard**: Fetch the global leaderboard ranked by points.
* **POST /api/submissions**: Submit code for a problem. Expects `{ problemId, language, code }`.