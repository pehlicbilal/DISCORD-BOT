const Discord = require("discord.js");

const color = [
    "#526F8E","#249DDE",
    "#1DDF99","#11DC26",
    "#F0F713","#F0D917 ",
    "#BD1515","#FA9797",
    "#8684FA","#381CC7",
    "#1E8ED6","#FFFFFF",
    "#FFBE01","#27E501 ",
    "#44613E","#3D4867"
];

module.exports = function (msg,args){
    const helpEmbed = new Discord.MessageEmbed()
        .setColor(color[Math.floor(Math.random()*color.length)])
        .setAuthor("Vas Sused" ,"https://cdn.discordapp.com/attachments/841617215567953963/853696362825646148/susjed.png","https://www.instagram.com/pehlicbilal/")
        .setTitle("SUSED-BOT")
        .setDescription("Dodaj me - https://discord.com/oauth2/authorize?client_id=853014257351262239&scope=bot+applications.commands")
        .addFields(
            {name:"Commands:" , value:"\u200B"} ,
            {name:"!sused" , value: "daje vam izjave"} ,
            {name:"!susedgif" , value: "daje vam random gifove"} ,
            {name:`!susedgif naziv gifa` , value: `daje vam trazeni gif`} ,
            {name:"!susedvote /pitanje" , value: "daje vam embed sa postavljenim pitanjem i rekciju sa da ili ne"} ,
            {name:"!susedvote /pitanje/opcija1/opcija2/itd" , value: "daje vam embed sa postavljenim pitanjem i opcijama"} ,
            {name: "!susedinfo" , value: "daje vam informacije o vasem discord account-u"} ,
            {name: "!saobzirom" , value: "napisi pa vidi sta dobijes"} ,
            {name: "!kakosekaze" , value: "napisi pa vidi sta dobijes"} ,        
            {name:"\u200B" , value: "\u200B"} 
        )
        .setImage("https://cdn.discordapp.com/attachments/853026249668165672/853702542307622922/tenor.gif")
        .setFooter("Bot created by jedan jedini vas Sused");
        msg.channel.send(helpEmbed);     
    }