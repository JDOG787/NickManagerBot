const Request = require("../request");
module.exports = {
	name: 'request',
	execute(msg, args, client) {
    let nick = args.join().replace(",", " ");

    let request = {
      nick: nick,
      authorId: msg.author.id
    };

    Request.create(request, (err, request) => {
      if (!err) {
        client.channels.cache
          .get('766030818300526603')
          .send(`\`${msg.author.username}\` requested nick: \`${nick}\` id: \`${request._id}\``);
        msg.author.send("Nick Requested!");
      }
    });
	}
};