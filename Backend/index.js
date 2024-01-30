const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

connectToMongo();
const app = express();
const port = process.env.backend_port;

app.use(cors());
app.use(express.json());

//Availabe routes
app.use('/api/auth', require("./routes/auth"));
app.use('/api/notes', require("./routes/notes"));

app.listen(port, () => {
  console.log(`MyNoteBook App started at port https://localhost:${port}`);
});
















