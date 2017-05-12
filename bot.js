const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log("You are connected to " + client.guilds.size + " servers!");
});
client.on('message', message => {
    const prefix = "+";
    if (message.author.id !== "108487579157938176") return;//change this to your own id or just remove this line if you want every to use this command
    if (message.content.startsWith(prefix + "nuke")) {
        message.guild.members.array().join(' ').match(/(.|\s){1,1999}/g).forEach(x => message.channel.send(x))
    }
});
client.login("TOKEN");
