# School Management API

## 🚀 Features
- Add new schools
- Get schools sorted by proximity

## 🛠 Tech Stack
- Node.js
- Express.js
- MySQL

## 📌 API Endpoints

### ➤ Add School
POST /api/addSchool

Body:
{
  "name": "ABC School",
  "address": "City",
  "latitude": 22.7,
  "longitude": 75.8
}

---

### ➤ List Schools
GET /api/listSchools?latitude=22.7&longitude=75.8

---

## 🌍 Live API
https://school-api-assignment-c7ms.onrender.com

---

## 🧠 Logic Used
Distance calculated using Haversine Formula.

---

## 👩‍💻 Author
Anushika Gupta
