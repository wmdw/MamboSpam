const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("568899366866386945")
setInterval(function() {
channel.send(`ÇãÚØØØØ`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
