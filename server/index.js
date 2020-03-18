const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(
  "/shorten",
  createProxyMiddleware({
    target: "https://impraise-shorty.herokuapp.com",
    changeOrigin: true
  })
);

app.listen(9000);
