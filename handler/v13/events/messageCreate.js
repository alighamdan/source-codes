const { Message, Client } = require("discord.js");

/**
 *
 * @param {Client} client
 * @param {Message} message
 */
module.exports = function (client, message) {
  let commandName = message.content.split(" ")[0].replace(client.prefix, "");
  let command = client.commands.get(commandName);
  let args = message.content.split(" ").slice(1);
  /**
   * command.name
   * command.description ?? null
   * command.aliases ?? null
   * command.category ?? null
   * .etc
   */
  if (command) {
    try {
      await command.run(client, message, args);
    } catch (err) {
      await message.reply({
        content: "An ERrored error occurred,\n" + err,
      });
    }
  }
};
