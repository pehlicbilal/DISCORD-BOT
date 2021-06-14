const Discord = require('discord.js');
const client = new Discord.Client();
require("dotenv").config();

client.login(process.env.BOTTOKEN);

client.on("ready" , () => {
    console.log("Sused je spreman")
});

const commandHandler = require("./commands/command_handler");

client.on("message" , commandHandler);