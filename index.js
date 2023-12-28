const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./config/db");
console.log(connection);
const routeone = require("./route/userrouter");
const port = process.env.PORT || 7900;

app.use(express.json());
// app.use(
//   cors({
//     origin: "*",
//   })
// );

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use("/api", routeone);


app.listen(port, async () => {
  try {
    await connection();
    console.log("server starting...");
  } catch (err) {
    console.log(err, "error");
  }
});