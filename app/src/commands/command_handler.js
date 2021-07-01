const susedgif = require("./gif");
const susedvote = require("./poll");
const sused = require("./izjave");
const saobzirom = require("./pasa");
const help = require("./help");
const kakosekaze = require("./gradonacelnik");
const susedinfo = require("./user-info");
const susedjoin = require("./join-voice");

const commands = {
    susedgif    ,
    susedvote   ,
    sused       ,
    saobzirom   ,
    help        ,
    kakosekaze  ,
    susedinfo   ,
    susedjoin   ,
};

module.exports = async function (msg){
    let token = msg.content.split(" ");
    let command = token.shift();
    if(command.charAt(0) === "!"){
        command = command.substring(1);
        commands[command](msg,token);
    };
};