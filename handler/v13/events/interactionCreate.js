const { Client, CommandInteraction } = require("discord.js");

/**
 *
 * @param {Client} client
 * @param {CommandInteraction} interaction
 */
module.exports = function (client, interaction) {
  let commandName = interaction.commandName;
  let cmd = client.slashcommands.get(commandName);
  if (cmd) {
    try {
      await cmd.run(client, interaction);
    } catch (error) {
      console.error(error);
    }
  }
};
