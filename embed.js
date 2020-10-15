const Discord = require('discord.js');

module.exports = (color, title, desc, fields) => {
  const embed = new Discord.MessageEmbed()
    .setColor(color)
	  .setTitle(title)
	  .setDescription(desc)
    .addFields(fields)
    .setTimestamp()
    // .setThumbnail('pfp.png');

  return embed;
};