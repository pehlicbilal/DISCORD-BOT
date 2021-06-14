const Discord = require('./app/node_modules/discord.js');
const client = new Discord.Client();
require("./app/node_modules/dotenv").config();

client.login(process.env.BOTTOKEN);

client.on("ready" , () => {
    console.log("Sused je spreman")
});

const commandHandler = require("./app/src/commands/command_handler");

client.on("message" , commandHandler);