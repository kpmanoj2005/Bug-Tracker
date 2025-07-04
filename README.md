# 🐞 Bug Tracker Application

A full-stack bug tracking application built using **MERN** (MongoDB, Express, React, Node.js).  
It includes authentication, role-based access, protected routes, and user-friendly interfaces for managing projects, bugs, and bug reports.

---

## 🚀 Features

- JWT-based authentication (login/register)
- Role-based access (Tester, Developer, Admin)
- Protected routes
- Project, bug, and report management

---

## 📁 Project Structure

```
root/
├── backend/
│   ├── config/db.js
│   ├── controllers/authController.js
│   ├── models/User.js
│   ├── routes/authRoutes.js
│   └── server.js
├── frontend/
│   └── src/
│       ├── api.js
│       ├── App.js
│       ├── index.js
│       ├── context/AuthContext.js
│       ├── utils/PrivateRoute.js
│       ├── components/Navbar.js
│       └── pages/
│           ├── Login.js
│           ├── Register.js
│           ├── Dashboard.js
│           ├── Projects.js
│           ├── Bugs.js
│           └── ReportBug.js
```

---

## 🛠 Getting Started

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```ini
MONGO_URI=mongodb://127.0.0.1:27017/bugtracker
JWT_SECRET=your_secret_key
PORT=5000
```

Run the server:

```bash
npx nodemon server.js
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000](http://localhost:5000)

---

## 🔐 Auth Flow

- Register and login using the UI
- JWT token is stored in localStorage
- Axios adds `Authorization: Bearer <token>` to every request
- Private pages are restricted via `<PrivateRoute />`

---

## 📮 API Endpoints

| Method | Endpoint            | Description           |
|--------|---------------------|-----------------------|
| POST   | /api/auth/register  | Register a new user   |
| POST   | /api/auth/login     | Login and get JWT     |

---

## 🧪 .env Example

```ini
MONGO_URI=mongodb://127.0.0.1:27017/bugtracker
JWT_SECRET=your_secret_key
PORT=5000
```

---

## 📌 Future Enhancements

- [x] Project + Bug filtering & sorting
- [ ] Add status options (open, fixed, closed)
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] File uploads for bug reports