if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");

let dbconnect = require("./db.connect");
let userRoutes = require("./routes/userRoutes");
let itemRoutes = require("./routes/itemRoutes");
let vehicleRoutes = require("./routes/vehicleRoutes");

app.use(cors());
app.use(express.json());
app.use("/", express.static("public"));

app.use("/users", userRoutes);
app.use("/items", itemRoutes);
app.use("/vehicles", vehicleRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
