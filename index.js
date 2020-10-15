// Discord
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "%";


// MongoDB
const Request = require("./request");



// Connections
require("./database")();
require("./server");


// Commands
client.commands = new Discord.Collection();
const fs = require("fs");
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}


// Discord Client
client.on('ready', () => {
  console.log(`${client.user.username} Booting up...`);
  client.user.setActivity(`for nicks. ${prefix}help`, { type: 'LISTENING' });
});

client.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  try {
    client.commands.get(command).execute(msg, args, client);
  } catch (e) {
    console.error(e);
    msg.reply('There was an error trying to execute that command!');
  }
});

client.login(process.env.token);