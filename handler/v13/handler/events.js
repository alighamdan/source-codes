const { Client } = require("discord.js");
const fs = require("fs");
const path = require("path");

/**
 *
 * @param {Client} client
 */
module.exports = function (client) {
  fs.readdirSync(path.join(__dirname, "..", "events/"))
    .filter(function (file) {
      return file.endsWith(".js");
    })
    .forEach(async function (file) {
      const event = require("../events/" + file);
      const eventName = file.split(".")[0];
      try {
        await client.on(eventName, event.bind(null, client));
        s;
      } catch (error) {
        throw new Error(`${eventName} Not an Event!`);
      }
    });
};
