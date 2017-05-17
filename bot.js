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
        var members = message.guild.members.array().join(' ').match(/(.|\s){1,1999}/g);
        message.delete(500);
        
        members.forEach(function(currentValue, index) {
            message.channel.sendMessage(currentValue)
            message.delete()
            message.guild.me.setNickname(makeid)
        });
    }
    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
});
client.login("token");
