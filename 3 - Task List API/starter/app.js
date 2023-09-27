const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");

// middleware
app.use(express.static("./public"));
app.use(express.json());

// Routes
app.use("/api/v1/tasks", tasks);
// app.get('api/v1/tasks')          - get all tasks
// app.post('api/v1/tasks')         - create new task
// app.get('api/v1/tasks:id')       - get single task
// app.patch('api/v1/tasks:id')     - update task
// app.delete('api/v1/tasks:id')    - delete task

// Será utilizado se nenhuma rota compatível for indicada (por isso deve vir após as rotas válidas)
app.use(notFound);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Serve is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
