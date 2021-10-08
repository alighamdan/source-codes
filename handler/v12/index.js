const Discord = require("discord.js"); // load Discord.js From NPM.
const express = require("express"); // Load express.js from npm.
const fs = require("fs"); // load fs for reading files.

const client = new Discord.Client(); // define client bot.
const app = express(); // make express app for 24/7 monitor if use online ide without uptime.

const Token = "Token"; // the bot token u can use dotenv.

// Dont Touch First 3
client.commands = new Discord.Collection(); // define client commands.
client.events = new Discord.Collection(); // define client events.
client.aliases = new Discord.Collection(); // define client aliases.
client.prefix = "!"; // Edit Your Bot Prefix.
client.login(Token); // Login Bot

app.get("/", (req, res) => {
  res.status(200);
  res.sendStatus(200);
});

app.listen(3000); // Listen To New Port.

["commands", "events"].forEach(async function (handler) {
  require("./handler" + handler)(client);
});
