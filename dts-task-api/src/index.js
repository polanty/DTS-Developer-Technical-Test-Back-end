// src/index.js
const express = require("express");
const cors = require("cors");
const tasksRouter = require("./routes/tasks");

const app = express();

app.use(cors()); // Allow all origins (OK for dev/test) because i cannot define the specific origins
app.use(express.json());

// health
app.get("/", (req, res) => res.send("DTS Task API running"));

app.use("/tasks", tasksRouter);

const port = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(port, () =>
    console.log(`Server listening at http://localhost:${port}`)
  );
}

module.exports = app; // export for tests
