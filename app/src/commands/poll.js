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

const numEmojis = [
    "1️⃣","2️⃣","3️⃣",
    "4️⃣","5️⃣","6️⃣",
    "7️⃣","8️⃣","9️⃣",
    "🔟"
];

module.exports = async function (msg , args){

    let words = msg.content.split("/");
    words.shift();
    const bot = new Discord.Client({disableEveryone: false});

    if(words.length <= 1){
        msg.channel.send("@everyone");
        const voteEmbed1 = new Discord.MessageEmbed()
        .setColor(color[Math.floor(Math.random()*color.length)])
        .setAuthor("VOTE")
        .setTitle(words[0])
        .setFooter("Bot created by jedan jedini vas Sused", "https://cdn.discordapp.com/attachments/853026249668165672/853627848206974986/Screenshot_2.png");

        msg.channel.send(voteEmbed1)
        .then(function (message) {
            message.react("👍")
            message.react("👎");
        }    
    )}else{
        msg.channel.send("@everyone");
        const voteEmbed2 = new Discord.MessageEmbed()
        .setColor(color[Math.floor(Math.random()*color.length)])
        .setAuthor("VOTE")
        .setTitle(words[0])
        .setFooter("Bot created by jedan jedini vas Sused", "https://cdn.discordapp.com/attachments/853026249668165672/853627848206974986/Screenshot_2.png");
        for(let i=1;i<words.length;i++){
            voteEmbed2.addFields({
                name: `Option${i}:`, value: `${words[i]} ${numEmojis[i-1]}`            
            });
        };
        msg.channel.send(voteEmbed2)  
        .then(function (message) {
            for(let i=1;i<words.length;i++)
            message.react(numEmojis[i-1]);
        }      
    )};
}