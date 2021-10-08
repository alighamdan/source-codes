const Discord = require("discord.js");
const path = require("path");
const express = require("express");
const app = express();
const fs = require("fs");
const client = new Discord.Client({
  intents: ["GUILDS"],
});

const Token = "";

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.aliases = new Discord.Collection();
client.slashcommands = new Discord.Collection();
client.prefix = "!";

["commands", "events", "slashcommands"].forEach(function (command) {
  require("./handler/" + command)(client);
});

client.login(Token);
