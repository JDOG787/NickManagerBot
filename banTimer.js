const schedule = require('node-schedule');
const Ban = require("./models/ban");

module.exports = (m, h, d, id) => {
  let mNow = Number(new Date().getMinutes().toString().padStart(2, '0'));

  const j = schedule.scheduleJob(`${m+mNow} * * * *`, function(){
    Ban.deleteOne({userId: id}, (err, ban) => {
      if (err) {
        console.log(err)
      }
    });
  });
}