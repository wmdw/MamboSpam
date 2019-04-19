const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("561735462109052948")
setInterval(function() {
channel.send(`Mamboooooooo`);
}, 30)
})

client.login(process.env.BOT_TOKEN);