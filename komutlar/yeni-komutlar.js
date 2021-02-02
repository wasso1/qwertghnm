const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xF001FA)
  .setDescription(`[**Agila-Komutlar**]`)
  .addField(`**<a:667791012739022858:698617530369048648>Yeni-Komutlar<a:667791012739022858:698617530369048648>**`,`<a:691691156391591966_1:698617448538308699> \`-sunucu-kur\` = Otomatik Sunucu Kurar. \n <a:691691156391591966_1:698617448538308699> \`-davet-takip\` = Sunucuda Kimin Kaç Davet Yaptığını Görürsünüz.\n <a:691691156391591966_1:698617448538308699> \`-resimliyazı\` = Resimli Yazı Atar.
`)
  return message.channel.sendEmbed(embed);
  
      
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','y'],
  permlevel: 0
};

exports.help = {
  name: 'yeni-komutlar',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
}
//