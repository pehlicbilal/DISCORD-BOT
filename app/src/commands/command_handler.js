const susedGif = require("./gif");
const susedVote = require("./poll");
const sused = require("./random_talks");
const saObzirom = require("./pasa");
const help = require("./help");
const kakoSeKaze = require("./gradonacelnik");

const commands = {
    susedGif    ,
    susedVote   ,
    sused       ,
    saObzirom   ,
    help        ,
    kakoSeKaze
};

module.exports = async function (msg){
    let token = msg.content.split(" ");
    let command = token.shift();
    if(command.charAt(0) === "!"){
        command = command.substring(1);
        commands[command](msg,token);
    };
};