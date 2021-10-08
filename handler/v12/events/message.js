const { Client, Message } = require("discord.js");

/**
 *
 * @param {Client} client
 * @param {Message} message
 */
module.exports = async function (client, message) {
  let commandName = message.content.split(" ")[0].replace(client.prefix, "");
  let cmd = client.commands.get(commandName) || client.aliases.get(commandName);
  let args = message.content.split(" ").slice(1);
  if (cmd) {
    return await cmd.run(client, message, args);
  }
};
