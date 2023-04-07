const express = require("express");
const router = require("./routes/index.routes");
const app = express();
const cors = require("cors");

const whiteList = ["http://localhost:3000"];

app.use(express.json({ limit: "50mb" }));
app.use(cors({ origin: whiteList }));

router(app);

module.exports = app;
