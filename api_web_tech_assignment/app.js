const express = require("express");
const app = express();
const port = 5000;
const db = require("./DB/database");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const routes = require("./routes/controller");
app.use("/", routes);

// app.get("/", (req, res) => {
//   res.send("helloo");
// });

app.listen(port, () => {
  try {
    db();
    console.log(`Server is up on port ${port}`);
  } catch (e) {
    console.log(e);
  }
});
