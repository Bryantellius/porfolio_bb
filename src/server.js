const express = require("express");
const path = require("path");
const config = require("./config");
const { sendEmail } = require("./utils/mailgun");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  } catch (e) {
    next(e);
  }
});

app.post("/contact", async (req, res, next) => {
  try {
    console.log(req.body);
    let { name, from, subject, message } = req.body;
    await sendEmail(name, from, subject, message);
    res.json({ msg: "Message sent! We'll be in touch soon." });
  } catch (e) {
    next(e);
  }
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).json({
    error: err.name,
    msg: err.message || "An unexpected error occurred. Try again later.",
  });
});

app.listen(config.port, () =>
  console.log("Server listening on port " + config.port)
);
