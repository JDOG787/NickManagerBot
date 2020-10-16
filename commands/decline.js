const Request = require("../models/request");
module.exports = {
	name: 'decline',
	execute(msg, args) {
    let id = args[0];

    if (msg.member.hasPermission('MANAGE_NICKNAMES')) {
      msg.channel.send(`Nick declined!`);

      Request.deleteOne({_id: id}).then(err => {
        if (err) {
          console.log(err);
        }
      });
    }
	}
};