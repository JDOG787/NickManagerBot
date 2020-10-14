const Discord = require("discord.js");
const client = new Discord.Client();
const Request = require("./request");
const token = process.env.token;
const prefix = "%";
require("./database")();

const app = require("express")();
app.get("/", (req, res) => {
  res.sendStatus(200);
});
app.listen(8080)

client.on('ready', () => {  
  console.log(`${client.user.username} Booting up...`);
});

client.on('message', msg => {
  if (msg.author.id != client.user.id) {

    if (msg.content.indexOf(prefix+"request") > -1) {
      let nick = msg.content.replace("%request ", "");

      let request = {
        nick: nick,
        authorId: msg.author.id
      }
      Request.create(request, (err, request) => {
        if (!err) {
          client.channels.cache.get('701230310515540008').send(`\`${msg.author.username}\` requested nick: \`${nick}\` id: \`${request._id}\``);
          msg.author.send("Nick Requested!");
        }
      });
    } 

    else if (msg.content.indexOf(prefix+"accept") > -1) {
      let id = msg.content.replace("%accept ", "");

      Request.findById(id, (err, request) => {
        if(!err) { 
          let member = msg.guild.member(client.users.cache.get(request.authorId))
          member.setNickname(request.nick);

          msg.channel.send(`Nick changed to \`${request.nick}\``);
          member.send(`Nick changed to \`${request.nick}\``);

          Request.deleteOne(request).then(err => {
            if (err) {
              console.log(err);
            }
          });
        }
      });
    }

    else if (msg.content.indexOf(prefix+"decline") > -1) {
      let id = msg.content.replace("%decline ", "");

      msg.channel.send(`Nick declined!`);

      Request.deleteOne({_id: id}).then(err => {
        if (err) {
          console.log(err);
        }
      });
    }
  }
});

client.login(token);