
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    project: "DevOps CI/CD Automation",
    message: "Application is running successfully!",
    version: "1.0.0"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

app.get("/status", (req, res) => {
  res.status(200).json({
    application: "DevOps Status API",
    environment: process.env.NODE_ENV || "development",
    uptime: process.uptime(),
    status: "operational"
  });
});

module.exports = app;
