const Discord = require('discord.js');

module.exports = (color, title, desc, item1, item2) => {
  const embed = new Discord.MessageEmbed()
    .setColor(color)
	  .setTitle(title)
	  .setDescription(desc)
    .addFields(item1, item2);

  return embed;
};