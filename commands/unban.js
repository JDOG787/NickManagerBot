const Ban = require("../models/ban");
const timer = require("../banTimer")

module.exports = {
	name: 'unban',
	execute(msg, args, client) {
    let id = args[0];

    if(msg.member.roles.cache.has("766726207256920084")){    
      Ban.deleteOne({userId: id}, (err, bans) => {
        if (!err) {
          msg.channel.send("Unbanned user...");
        }
      });
    } else {
      msg.reply("You cant do that...")
    }
	}
};