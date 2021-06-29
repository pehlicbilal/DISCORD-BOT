const Discord = require("discord.js");

const color = [
    "#526F8E","#249DDE",
    "#1DDF99","#11DC26",
    "#F0F713","#F0D917",
    "#BD1515","#FA9797",
    "#8684FA","#381CC7",
    "#1E8ED6","#FFFFFF",
    "#FFBE01","#27E501",
    "#44613E","#3D4867"
];

module.exports = async function(msg , args){

    const {guild , channel} = msg;

    const user = msg.mentions.users.first() || msg.member.user;
    const member = guild.members.cache.get(user.id);

    const memberRoles = member.roles.cache
    .filter((roles)=> roles.id !== msg.guild.id)
    .map((role)=> role.toString());

    const userEmbed = new Discord.MessageEmbed()
        .setColor(color[Math.floor(Math.random()*color.length)])
        .setAuthor("Vas Sused" ,"https://cdn.discordapp.com/attachments/841617215567953963/853696362825646148/susjed.png","https://www.instagram.com/pehlicbilal/")
        .setTitle(`Info of ${user.username}`)
        .setImage(user.displayAvatarURL())
        .addFields(
            { 
                name: "Nickname:",
                value: member.nickname || "None" ,
                inline: true
            },
            {
                name: '\u200B',
                value:  '\u200B',
                inline:true 
            },
            {
                name: "Tag:",
                value: user.tag , 
                inline: true
            },)
            .addFields(
                {
                    name: "Created At:" ,
                    value: new Date(user.createdTimestamp).toLocaleDateString() ,
                    inline: true
                },
                {
                    name: '\u200B',
                    value:  '\u200B',
                    inline:true 
                },
                {
                    name: "Joined:",
                    value:new Date(member.joinedTimestamp).toLocaleDateString(),
                    inline: true 
                },
                {
                    name:  'Roles:' ,
                    value: memberRoles
                }      
            )
        .setFooter("Bot created by jedan jedini vas Sused");
        console.log(member.roles);

    msg.channel.send(userEmbed);   
}