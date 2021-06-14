const fetch = require('node-fetch');

module.exports = async function (msg , args){

    let tokens = msg.content.split(" ");
    let gifName = args.join(" ");
    if(tokens.length <= 0){
        let url = "https://g.tenor.com/v1/trending?key=UFZA7HPUZ05E&contentfilter=off";
        let response = await fetch(url);
        let json = await response.json();
        let gIndex = Math.floor(Math.random()*json.results.length);
        msg.channel.send(json.results[gIndex].url);
    }else{
        let url =`https://g.tenor.com/v1/search?q=${gifName}&key=UFZA7HPUZ05E&contentfilter=off`;
        let response = await fetch(url);
        let json = await response.json();
        let gIndex = Math.floor(Math.random()*json.results.length);
        msg.channel.send(json.results[gIndex].url);
    }
}    