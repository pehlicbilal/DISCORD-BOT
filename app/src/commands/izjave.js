let recenice = [
    "Sused, viđaj zmaja.",
    "Cetri i po litre na cetri stotne kilometara.",
    "Na srbljanima po janjeta i ispratio djete u Sarajevo na fakultet.",
    "Cazin-Bihac deset minuta i pet sekundi",
    "Lero ga ja niz Ostrozac"
];


module.exports = function (msg,args){
    msg.channel.send(recenice[Math.floor(Math.random()*recenice.length)]);
}