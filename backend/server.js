const express = require("express");
const dotenv = require('dotenv')

const { chats } = require("./data/data");

dotenv.config();
const PORT = process.env.PORT;

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
    const singleChat = chats.find(c=>c.id = req.params.id);
    res.send(singleChat)
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
