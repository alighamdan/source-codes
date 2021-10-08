import Discord from "discord.js";
import express from "express";

const client = new Discord.Client({
  intents: ["GUILDS"],
});

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  req.status(200);
  res.sendStatus(200);
});

client.on("ready", () => {
  console.log(`Bot Now Ready!, ${client.user.tag}`);
});

client.login("Token");
