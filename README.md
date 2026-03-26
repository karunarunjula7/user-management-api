# User Management API

## 🚀 Overview

This project is a RESTful User Management API built using Node.js and Express. It supports full CRUD operations along with search and sorting functionality.

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* UUID
* In-memory data storage

---

## ▶️ Getting Started

### 1. Install dependencies

npm install

### 2. Run the server

node index.js

### 3. Server URL

http://localhost:3000

---

## 📌 API Endpoints

### 🔹 GET /users

Retrieve all users
Optional query parameters:

* search → filter users by name
* sort → sort by field (e.g., name)
* order → asc / desc

Example:
GET /users?search=karuna
GET /users?sort=name&order=asc

---

### 🔹 GET /users/:id

Retrieve a specific user by ID

---

### 🔹 POST /users

Create a new user

Sample Request Body:
{
"name": "Karuna",
"email": "[karuna@gmail.com](mailto:karuna@gmail.com)"
}

---

### 🔹 PUT /users/:id

Update an existing user

Sample Request Body:
{
"name": "Updated Name"
}

---

### 🔹 DELETE /users/:id

Delete a user

---

## ✅ Features

* Create, Read, Update, Delete users
* Search users by name
* Sort users
* Error handling for invalid requests

---

## 🧪 Testing

All endpoints were tested using Thunder Client in VS Code.

---

## 📦 Deployment

The API can be deployed on platforms like Render.

---

## 👩‍💻 Author

Karuna Kumari
