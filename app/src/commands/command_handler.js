const susedGif = require("./gif");
const susedVote = require("./poll");
const sused = require("./izjave");
const saObzirom = require("./pasa");
const help = require("./help");
const kakoSeKaze = require("./gradonacelnik");
const susedInfo = require("./user-info")

const commands = {
    susedGif    ,
    susedVote   ,
    sused       ,
    saObzirom   ,
    help        ,
    kakoSeKaze  ,
    susedInfo   
};

module.exports = async function (msg){
    let token = msg.content.split(" ");
    let command = token.shift();
    if(command.charAt(0) === "!"){
        command = command.substring(1);
        commands[command](msg,token);
    };
};