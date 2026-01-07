# Student Management System

This project is a **simple full-stack Student Management System** built as part of the **Tanzanite Skills Academy Full-Stack JavaScript Developer Task**.

It demonstrates:

* Backend API development
* Database integration
* Authentication
* React frontend
* Frontend ↔ Backend communication



##  Features

* User Authentication (Login)
* Add a student
* View all students
* Delete a student
* Protected routes using JWT
* React frontend connected to Node.js backend



## Technologies Used

### Backend

* Node.js
* Express.js
* MySQL
* JWT (JSON Web Token)
* bcrypt
* dotenv

### Frontend

* React
* Axios
* CSS (simple styling)

### Tools

* Git & GitHub
* Postman (API testing)



## Project Structure


TSA/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── student.controller.js
│   │
│   ├── middleware/
│   │   └── auth.middleware.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── student.routes.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── AddStudent.js
│   │   │   └── StudentList.js
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   │
│   └── package.json
│
└── README.md




##  Database Setup (MySQL)

Create a database:

```sql
CREATE DATABASE tsa_db;
```

### Users Table

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100),
  password VARCHAR(255)
);
```

### Students Table

```sql
CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  course VARCHAR(100)
);
```



## Backend Setup

1. Navigate to backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=tsa_db
JWT_SECRET=secretkey
```

4. Start server:

```bash
node server.js
```

Backend runs on:

```
http://localhost:5000
```



## ⚙️ Frontend Setup

1. Navigate to frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start React app:

```bash
npm start
```

Frontend runs on:


http://localhost:3000
```


## Authentication Flow

* User logs in using username & password
* Backend returns a JWT token
* Token is stored in `localStorage`
* Axios automatically sends token for protected requests



##  API Endpoints

### Auth

* `POST /api/auth/login`

### Students (Protected)

* `GET /api/students`
* `POST /api/students`
* `DELETE /api/students/:id`



##  Screen Recording Demonstration

The screen recording demonstrates:

1. Backend running successfully
2. Frontend running
3. Login process
4. Adding a student
5. Viewing students
6. Deleting a student
7. Backend & frontend communication



## Conclusion

This project demonstrates my understanding of:

* REST API design
* Authentication
* Database integration
* React fundamentals
* Full-stack development workflow



## Author

**Name:** Azigard
**Task:** Tanzanite Skills Academy – Full-Stack JavaScript Developer Task



