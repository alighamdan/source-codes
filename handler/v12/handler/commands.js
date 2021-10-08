const { Client } = require("discord.js");
const path = require("path");
const fs = require("fs");

/**
 *
 * @param {Client} client
 */
module.exports = (client) => {
  fs.readdirSync(path.join(__dirname, "../commands/")) // Read Commands Folder
    .filter((e) => e.endsWith(".js")) // Filter Files
    .forEach(function (file) {
      const command = require("../commands/" + file);
      if (command.name) {
        client.commands.set(command.name, command);
      }
      if (command.aliases) {
        if (Array.isArray(command.aliases)) {
          return command.aliases.forEach((aliases) => {
            return client.commands.set(aliases.name, command);
          });
        } else {
          return client.commands.set(command.aliases, command);
        }
      }
    });
};
