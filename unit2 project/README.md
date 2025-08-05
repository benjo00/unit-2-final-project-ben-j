
# The Stress Cure - Full Stack Version

This is a simple full-stack meditation routine tracker called **The Stress Cure**.  
It lets users log meditation routines and attach little notes to each one. You can add, view, and delete routines and their notes.  
It was built to make frontends and backends talk to each other 

---

## Tech Stack

 **Frontend**: React + Vite
 **Backend**: Java + Spring Boot
 **Database**: MySQL (via Spring Data JPA)
 **Build Tools**: Maven

---

## How To Run Locally

### 1. Set up the Backend

Open `/backend` in IntelliJ
Create a MySQL database called `stresscure`
Edit `application.properties` to match your DB password
Run `StressCureApplication.java`

### 2. Set up the Frontend

```bash
cd project-final-unit-1-ben-j-main
npm install
npm run dev
```

### 3. Visit the App

 Go to [http://localhost:5173](http://localhost:5173)
 You should see the **Routine Manager** working on the homepage

---

##  Planning Docs

 **Wireframes**: [Wireframe.png](./docs/Wireframe.png)
 **ERD Diagram**: [ERD.png](./docs/ERD.png)

---

##  User Stories

 As a user I can see all routines
 I can add a new routine with a title and description
I can delete a routine I don't want anymore
In future, I'd like to edit a routine or attach notes per session

---

##  Future Ideas

Add login / signup (auth)
Track daily streaks or mood graphs
Filter by routine type (e.g. breath vs mantra)
Deploy to cloud

---

##  Known Issues

No editing or viewing individual notes (yet)
Styling is basic
No auth, so anyone can post/delete

---

Built for LaunchCode Unit 2 Final Project
Ben J
