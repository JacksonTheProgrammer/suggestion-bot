const botclient = require("./bot");
const config = require("./app.json");

// define the client
const bot = new botclient(config);

// load colors
bot.color = require('./colors.js');

//load emojis
bot.emoji = require('./emojis.js');

//start the bot
bot.start();









  
