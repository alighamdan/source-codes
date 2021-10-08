const { Client } = require("discord.js");

/**
 *
 * @param {Client} client
 */
module.exports = function (client) {
  if (client.commands.size > 0) {
    console.table(client.commands);
  }
  if (client.events.size > 0) {
    console.table(client.events);
  }
  if (client.slashcommands.size > 0) {
    console.table(client.slashcommands);
  }
};
