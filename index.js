const express = require("express");
const app = express();

app.get("/date", (request, response) => {
  let date = new Date();
  response.send(`today's date is ${date}`);
  console.log(response);
});

app.get("/", (request, response) => {
  console.log(response);
  response.send("hello world");
});

app.get("/page", (request, response) => {
  response.sendFile("./page.html", { root: __dirname });
});

app.listen(3000);
