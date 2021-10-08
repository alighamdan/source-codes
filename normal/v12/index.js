const Discord = require("discord.js");
const client = new Discord.Client();
const express = require("express");
const app = express();

client.setMaxListeners(0);

client.on("ready", () => {
  console.log(`Bot Now Online: ${client.user.tag}`);
});

client.login("Token");

app.listen(3000);

app.get("/", (req, res) => {
  res.status(200);
  res.sendStatus(200);
});
