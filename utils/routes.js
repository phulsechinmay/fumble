const express = require("express");
const Renderer = require("./render");

const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static("static"));

app.get("/", Renderer.renderEjsPage("Home", "pages/index.ejs", {}));

exports.app = app;