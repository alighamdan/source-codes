const { Client } = require("discord.js");
const fs = require("fs"),
  path = require("path");
/**
 *
 * @param {Client} client
 */
module.exports = function (client) {
  fs.readdirSync(path.join(__dirname, "..", "commands/commands"))
    .filter((e) => e.endsWith(".js"))
    .forEach((file) => {
      let cmd = require("../commands/commands" + file);
      if (cmd.name) {
        client.commands.set(cmd.name, cmd);
      }
      if (cmd.aliases) {
        if (Array.isArray(cmd.aliases)) {
          cmd.aliases.forEach((e) => {
            client.commands.set(e, cmd);
          });
        } else {
          client.commands.set(cmd.aliases, cmd);
        }
      }
    });
};
