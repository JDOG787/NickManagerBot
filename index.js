const Discord = require("discord.js");
const fs = require('fs');
const client = new Discord.Client();
const Request = require("./request");
const token = process.env.token;
const prefix = "%";
require("./database")();
require("./server");
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.on('ready', () => {  
  console.log(`${client.user.username} Booting up...`);
});

client.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();


  try {
    client.commands.get(command).execute(msg, args, client);
  } catch (error) {
    console.error(error);
    msg.reply('There was an error trying to execute that command!');
  }
});

client.login(token);