const { Client } = require("discord.js");
/**
 *
 * @param {Client} client
 */
module.exports = (client) => {
  if (client.commands.size > 0) {
    console.table(client.commands);
  }
  if (client.events.size > 0) {
    console.table(client.events);
  }
};
