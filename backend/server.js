const express = require("express");

const { chats } = require("./data/data");

const app = express();

app.get("/", (req, res) => {
  res.send("Homepage");
});

//Endpoint for all data of chats

app.get("/api/chat", (req, res) => {
  res.json(chats);
});

//Endpoint for single chat

app.get("/api/chat/:id", (req, res) => {
//   res.send(req.params.chatName);

});

app.listen(3000, () => {
  console.log("Server started on 3000");
});
