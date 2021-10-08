const { Client, Message } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Check Bot Connection Status!",
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  async run(client, message, args) {
    let ping = client.ws.ping;
    let response = new Date() - message.createdTimestamp;
    let realresponse = response < 0 ? response * -1 : response;
    message.reply(
      `\`\`\`diff\n${ping > 200 ? "-" : "+"} WS: ${ping}\n${
        realresponse > 200 ? "-" : "+"
      } Response Speed: ${realresponse}\`\`\``
    );
  },
};
