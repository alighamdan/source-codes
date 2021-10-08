const { Client } = require("discord.js");
const path = require("path");
const fs = require("fs");

/**
 *
 * @param {Client} client
 */
module.exports = function (client) {
  fs.readdirSync(path.join(__dirname, "../events/")) // Read Events Folder
    .filter((e) => e.endsWith(".js")) // Filter Files and Read Only Files Ends With .js extension.
    .forEach(async (file) => {
      let event = require("../events/" + file);
      let eventName = file.split(".")[0]; // Event Name Must Be The File Name.
      try {
        await client.on(eventName, event.bind(null, client));
      } catch (error) {
        throw new Error(`${eventName} Not An Event`); // Check You Type The Event Name Correctly.
      }
    });
};
