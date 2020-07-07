const express = require("express");
const Renderer = require("./render");
const { HomeVars } = require("../templatevars");

const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static("static"));

app.get("/", Renderer.renderEjsPage("Home", "pages/home.ejs", HomeVars));

exports.app = app;