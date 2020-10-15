const embed = require("../embed");

module.exports = {
	name: 'help',
	execute(msg) {
    const cmds = [
      {
        name: "%request <nick>",
        value: "Requests a nickname",
      },
      {
        name: "%accept <nick_id>",
        value: "Sets nickname to author if you have the permissions to use this command",
      },   
      {
        name: "%decline <nick_id>",
        value: "Declines request for nick if you have permissions to use this command",
      },
      {
        name: "%help",
        value: "Gives you help...",
      }
    ]
    let newEmbed = embed("#0099ff", "Nick Manager", "Here's what i can do...", cmds);

    msg.channel.send(newEmbed);
	}
};