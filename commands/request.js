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
        let newEmbed = embed("#0099ff", "Nick Requested!", `\`${msg.author.username}\` requested a nick.`, [{name: "Nick:", value: `\`${nick}\``}]);

        const channel= client.channels.cache.get('766030818300526603');
        channel.send(newEmbed)
        channel.send(`\`${request._id}\``);
        
        msg.channel.send("Nick Requested!");
      }
    });
	}
};