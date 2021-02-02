const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`DC LİNKİ ${client.user.username} DAVET MENÜSÜ `)
        .setDescription(`:white_small_square:**İNSTAGRAM ADRESİM** [TIKLA](https://www.instagram.com/hazretiwasco) \n:white_small_square:**#GODS PRİV** [TIKLA](https://discord.gg/6vVYJRneeC)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}davet Sistemi Kullandı!`, message.author.avatarURL)
    .setColor(`RANDOM`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};
//Lord Creative