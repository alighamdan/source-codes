const { Client } = require("discord.js");
const fs = require("fs");
const path = require("path");

module.exports = function (client) {
  fs.readdirSync(path.join(__dirname, "..", "commands/slashcommands"))
    .filter((e) => e.endsWith(".js"))
    .forEach(async function (file) {
      const command = require("../commands/slashcommands/" + file);
      if (command.name) {
        await client.slashcommands.set(command.name, command);
      }
    });
};
