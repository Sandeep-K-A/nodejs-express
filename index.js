const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
  {
    id: 1,
    name: "Sandeep",
    age: 25,
  },
  { id: 2, name: "Alan", age: 24 },
];

app.get("/", (req, res) => {
  res.send("hello from server");
});

//get all users
app.get("/users", (req, res) => {
  res.json({
    success: true,
    message: "Users fetched successfully",
    data: users,
  });
});

//get a single user
app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "user not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "user fetched successfully",
    data: user,
  });
});

//create a new user
app.post("/users", (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({
      success: false,
      message: "user details not found",
    });
  }
  const newUser = {
    id: users.length + 1,
    ...user,
  };
  users.push(newUser);
  console.log(users);

  res.status(201).json({
    success: true,
    message: "user created",
    data: user,
  });
});

//update a single user
app.put("/users/:id", (req, res) => {
  const { name, age } = req.body;
  const userId = Number(req.params.id);

  const user = users.find((user) => user.id === userId);
  console.log(user);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "Invalid user",
    });
  }

  if (!name || !age) {
    return res.status(400).json({
      success: false,
      message: "user details not found",
    });
  }

  user.name = name;
  user.age = age;
  res.status(200).json({
    success: true,
    message: "user details updated successfully",
    users,
  });
});

//delete a user
app.delete("/users/:id", (req, res) => {
  const userId = Number(req.params.id);

  const userIndex = users.findIndex((user) => user.id === userId);
  console.log(userIndex);
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Invalid user",
    });
  }

  const deletedUser = users.splice(userIndex, 1);

  res.status(200).json({
    success: true,
    message: "user deleted successfully",
    users,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
