# 🚀 AlgoPilot

AlgoPilot is a full-stack platform designed to help developers practice coding problems, track their progress, and compete on a global leaderboard. 

## 🛠 Tech Stack
* **Frontend:** React, Vite, Tailwind CSS, React Router, Axios
* **Backend:** Java, Spring Boot, Spring Security (JWT), Hibernate
* **Database:** MySQL

## ✨ Features
* **Authentication:** Secure JWT-based login and registration.
* **Problem Library:** Search, filter, and view coding challenges.
* **Code Editor:** Built-in code submission interface.
* **Dashboard & Leaderboard:** Track personal progress and global rankings.
* **Admin Panel:** Role-based access control for managing problems.

## 🚀 Local Setup
1. **Clone the repository:** `git clone https://github.com/yourusername/algopilot.git`
2. **Setup Database:** Ensure MySQL is running. Create a database named `algopilot_db`. Update credentials in `backend/src/main/resources/application.properties`.
3. **Run Backend:** `cd backend` -> `.\mvnw spring-boot:run`
4. **Run Frontend:** `cd frontend` -> `npm install` -> `npm run dev`