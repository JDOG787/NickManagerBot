const Request = require("../request");
module.exports = {
	name: 'accept',
	execute(msg, args, client) {
    let id = args[0];
    if(msg.member.hasPermission('MANAGE_NICKNAMES')){
      if (!msg.guild.me.hasPermission("MANAGE_NICKNAMES")) return msg.reply("I don't have permission to manage nicknames...");


      Request.findById(id, (err, request) => {
        if(!err) { 
          if (request.authorId === msg.guild.ownerID) return msg.reply("I can't change that person's nickname...");

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
    }  else {
      msg.reply("You can't do that...")
    } 
	}
};
