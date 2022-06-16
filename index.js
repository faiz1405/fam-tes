const express = require("express");
const expressLayout = require("express-ejs-layouts");
const path = require("path");
const homeRoutes = require("./routes/homeRoutes");

const app = express();

app.use(expressLayout);
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(homeRoutes.router);

app.listen(5000, () => {
  console.log("Server on in 5000");
});
