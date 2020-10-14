const Request = require("../request");
module.exports = {
	name: 'accept',
	execute(msg, args, client) {
    let id = args[0];

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
	},
};