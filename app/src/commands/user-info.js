const Discord = require("discord.js");

module.exports = async function(msg , args){

    const {guild , channel} = msg 

    const user = msg.mentions.users.first() || msg.member.user;
    const member = guild.members.cache.get(user.id);

    const userEmbed = new Discord.MessageEmbed()
        .setColor(color[Math.floor(Math.random()*color.length)])
        .setAuthor(`${user.username}` , user.displayAvatarURL() );
}