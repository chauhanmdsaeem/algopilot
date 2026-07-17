# AlgoPilot — 30-Day Build Plan (v1.0)

This breaks the roadmap from your project doc into a day-by-day plan. Each day lists **what to build**, **git branch to use**, and a **sample commit message** so you practice real workflow habits from day one.

> Rule of thumb: one small commit per meaningful change. Don't wait until "everything works" to commit.

---

## VS Code Setup (Do This Before Day 1)

Since you'll be writing all the code in VS Code, install these extensions first:

- **ES7+ React/Redux/React-Native snippets** and **Tailwind CSS IntelliSense** — frontend
- **Extension Pack for Java** + **Spring Boot Extension Pack** — backend (run/debug buttons, endpoint mapping view)
- **GitLens** — inline blame/history, very useful while learning Git
- **Thunder Client** or **REST Client** — test Spring Boot APIs without leaving the editor

Workflow tip: keep an integrated terminal split open for `git status`, `git add`, `git commit` instead of switching to a separate terminal app — it keeps the "small commit per change" habit easy to stick to since you see your diffs right there.

---

## Week 1 — Setup + Frontend Foundations

**Day 1 — Repo & Tooling Setup**[done]
- Install Git, create GitHub repo `algopilot`
- Add `.gitignore`, `LICENSE`, initial `README.md`
- Create folder structure: `frontend/`, `backend/`, `database/`, `docs/`, `screenshots/`
- Branch: `main` → create `develop`
- Commit: `Initialize repository with base folder structure`

**Day 2 — Frontend & Backend Scaffolding**[done]
- `npm create vite@latest` for React frontend, install Tailwind + React Router + Axios
- Spring Initializr for backend (Java 21, Spring Web, Spring Security, Spring Data JPA, MySQL Driver)
- Confirm both run locally (`npm run dev`, `./mvnw spring-boot:run`)
- Branch: `feature/setup`
- Commit: `Setup React frontend and Spring Boot backend skeleton`

**Day 3 — MySQL Setup**[done]
- Install MySQL locally, create `algopilot_db`
- Configure `application.properties` for DB connection
- Test connection with a dummy entity
- Commit: `Configure MySQL connection in backend`

**Day 4 — Navbar & Footer**[done]
- Build responsive Navbar (logo, links, login/signup buttons)
- Build Footer (links, socials, copyright)
- Branch: `feature/dashboard` → actually `feature/layout`
- Commit: `Add Navbar and Footer components`

**Day 5 — Home Page**[done]
- Hero section, features section, popular problems (dummy data), testimonials, footer
- Commit: `Build landing page sections`

**Day 6 — Login & Signup UI**[done]
- Build Login and Signup forms (no backend logic yet)
- Add form validation (client-side)
- Commit: `Add login and signup UI with validation`

**Day 7 — Buffer / Review**[done]
- Clean up styling, fix responsive issues
- Open your first Pull Request: `feature/setup` → `develop`
- Practice resolving a merge conflict on purpose (optional but educational)

---

## Week 2 — Backend + Authentication

**Day 8 — User Entity & Repository**[done]
- Create `User` entity (id, name, email, password, role, created_at)
- Create `UserRepository` (Spring Data JPA)
- Branch: `feature/auth`
- Commit: `Add User entity and repository`

**Day 9 — Password Encoding & Signup API**[done]
- Configure `PasswordEncoder` (BCrypt)
- Build `/api/auth/signup` endpoint with validation
- Commit: `Implement signup API with password hashing`

**Day 10 — JWT Utility & Login API**[done]
- Build JWT generation/validation utility
- Build `/api/auth/login` endpoint returning JWT
- Commit: `Implement login API with JWT token generation`

**Day 11 — Spring Security Config**[done]
- Configure security filter chain, protect routes by role
- Add JWT filter to intercept requests
- Commit: `Add Spring Security configuration and JWT filter`

**Day 12 — Connect Frontend to Auth APIs**[done]
- Wire Signup/Login forms to real APIs via Axios
- Store JWT (in memory or httpOnly-style handling), redirect on success
- Commit: `Connect frontend auth forms to backend APIs`

**Day 13 — Protected Routes & Profile Page**[done]
- Build `ProtectedRoute` wrapper in React Router
- Build basic Profile page (avatar, bio, skills placeholders)
- Commit: `Add protected routes and profile page`

**Day 14 — Buffer / Testing**[done]
- Test full auth flow end-to-end (signup → login → protected page → logout)
- Merge `feature/auth` into `develop` via PR
- Tag milestone: `v0.1`

---

## Week 3 — Problems Module

**Day 15 — Problem Entity & CRUD APIs**
- Create `Problem` entity (title, difficulty, description, constraints, examples, tags)
- Build CRUD REST endpoints
- Branch: `feature/problem-page`
- Commit: `Add Problem entity and CRUD APIs`

**Day 16 — Problems List Page**
- Build problems list UI (table/cards) fetching from API
- Add pagination
- Commit: `Build problems list page with pagination`

**Day 17 — Search & Filters**
- Add search by title, filter by difficulty and tags
- Commit: `Add search and filter functionality to problems list`

**Day 18 — Problem Detail Page**
- Build single problem page: description, examples, constraints, hints
- Commit: `Build problem detail page`

**Day 19 — Submission Entity & API**
- Create `Submission` entity (user_id, problem_id, language, code, status, created_at)
- Build `/api/submissions` POST endpoint (store only — no code execution yet)
- Commit: `Add Submission entity and submit API`

**Day 20 — Connect Submit Flow**
- Add code editor textarea + language selector to problem page
- Wire "Submit Solution" button to submission API
- Commit: `Connect submit solution UI to backend`

**Day 21 — Buffer / Testing**
- Test problem CRUD, search, filter, and submission flow
- Merge `feature/problem-page` into `develop` via PR
- Tag milestone: `v0.2`

---

## Week 4 — Dashboard, Leaderboard, Admin, Deployment

**Day 22 — Dashboard Stats API**
- Build endpoint aggregating: problems solved (easy/medium/hard), streak, points
- Branch: `feature/dashboard`
- Commit: `Add dashboard statistics API`

**Day 23 — Dashboard UI**
- Build dashboard page with stats cards and recent activity list
- Commit: `Build dashboard UI with stats and activity`

**Day 24 — Leaderboard**
- Create `Leaderboard` entity/view, ranking logic (by points)
- Build leaderboard API + UI table (rank, username, solved, points)
- Branch: `feature/leaderboard`
- Commit: `Implement leaderboard API and UI`

**Day 25 — Admin Panel (Backend)**
- Add role-based guard for admin-only endpoints
- Build admin APIs: add/edit/delete problems, manage users
- Branch: `feature/admin`
- Commit: `Add admin-only APIs for problem and user management`

**Day 26 — Admin Panel (Frontend)**
- Build admin dashboard UI (problem form, user list, delete actions)
- Commit: `Build admin panel UI`

**Day 27 — Polish & Bug Fixes**
- Fix responsive/UI issues across all pages
- Add loading states, empty states, error handling
- Merge `feature/dashboard`, `feature/leaderboard`, `feature/admin` into `develop`

**Day 28 — Documentation**
- Write proper `README.md` (setup instructions, screenshots, tech stack)
- Add basic API docs (`docs/api.md`)
- Commit: `Add project documentation and API reference`

**Day 29 — Deployment**
- Deploy frontend to GitHub Pages
- Deploy backend to Render/Railway; configure environment variables
- Point frontend API calls to deployed backend URL
- Commit: `Configure deployment settings for frontend and backend`

**Day 30 — Final Release**
- Full end-to-end test on the live deployed site
- Merge `develop` → `main` via `release/v1.0` branch
- Tag release: `v1.0`
- Update README with live demo link

---

## After Day 30 (v2.0 ideas, when ready)
AI code hints, AI solution explanations, daily challenges, discussion forum, company-wise problem lists, live contests, real code execution, certificates, badges.

## Tips for Sticking to This
- If a day's task overflows, it's fine — shift by a day rather than skipping the commit discipline.
- Always branch off `develop`, never commit auth/DB secrets, and open a PR (even solo) before merging into `develop`.
- Tag milestones (`v0.1`, `v0.2`, `v1.0`) — it's great practice and looks good on GitHub.
