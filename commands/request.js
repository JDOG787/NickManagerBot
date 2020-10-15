const Request = require("../request");
const embed = require("../embed");

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
        let newEmbed = embed("#0099ff", "Nick Requested!", `\`${msg.author.username}\` requested a nick.`, {name: "Nick:", value: `\`${nick}\``}, {name: "Id:", value: `\`${request._id}\``});

        client.channels.cache
          .get('766030818300526603')
          // .send( requested nick:  id: \`${request._id}\``);
          .send(newEmbed);
        msg.author.send("Nick Requested!");
      }
    });
	}
};