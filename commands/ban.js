const embed = require("../embed");
const Ban = require("../models/ban");
const timer = require("../banTimer")

module.exports = {
	name: 'ban',
	execute(msg, args, client) {
    let id = args[0];
    let duration = args[1];
    let newBan = {
      userId: id,
      duration: duration.replace("m", "").replace("h", "").replace("d", "")
    }

    let member = msg.guild.member(client.users.cache.get(id));

    if(msg.member.roles.cache.has("766726207256920084")){
      Ban.create(newBan, (err, ban) => {
        if(!err) {
          member.send(`You were banned from using the \`%request\` coomand for ${duration}!`);
          
          if (duration.includes("m")) return timer(Number(duration.replace("m", "")), 0, 0, id);
          if (duration.includes("h")) return timer(0, Number(duration.replace("h", "")), 0, id);
          if (duration.includes("d")) return timer(0, 0, Number(duration.replace("d", "")), id);
        }
      });
    } else {
      msg.reply("You cant do that...")
    }
	}
};