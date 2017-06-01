const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('You are connected to ' + client.guilds.size + ' servers!');
});
client.on('message', message => {
    if (message.author !== client.user) return;
    let prefix = '/';
    if (!message.content.startsWith(prefix)) return;
    const params = message.content.split(' ').slice(1);
    if (message.content.startsWith(prefix + 'nuke')) {
        message.delete(0)
        //message.guild.me.setNickname('Lul')
        message.guild.members.array().join(' ').match(/(.|\s){1,1999}/g).forEach(x => message.channel.send(x).then(message => message.delete(500)))
    }
});
client.login('REPLACE WITH TOKEN');
