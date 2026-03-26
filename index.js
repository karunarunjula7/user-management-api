const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

let users = [];

/**
 * Root Route
 */
app.get("/", (req, res) => {
  res.send("User API is running 🚀");
});

/**
 * GET /users
 * Optional:
 * ?search=
 * ?sort=name&order=asc|desc
 */
app.get("/users", (req, res) => {
  let result = [...users];

  const { search, sort, order } = req.query;

  // Search filter
  if (search) {
    result = result.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Sorting
  if (sort) {
    result.sort((a, b) => {
      if (a[sort] < b[sort]) return order === "desc" ? 1 : -1;
      if (a[sort] > b[sort]) return order === "desc" ? -1 : 1;
      return 0;
    });
  }

  res.json(result);
});

/**
 * GET /users/:id
 */
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

/**
 * POST /users
 */
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email required" });
  }

  const newUser = {
    id: uuidv4(),
    name,
    email,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

/**
 * PUT /users/:id
 */
app.put("/users/:id", (req, res) => {
  const { name, email } = req.body;

  const userIndex = users.findIndex((u) => u.id === req.params.id);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    email: email || users[userIndex].email,
  };

  res.json(users[userIndex]);
});

/**
 * DELETE /users/:id
 */
app.delete("/users/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === req.params.id);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = users.splice(userIndex, 1);

  res.json({ message: "User deleted", user: deletedUser[0] });
});

/**
 * Server
 */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});