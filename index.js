process.env["NTBA_FIX_319"] = 1;
var TelegramBot = require ('node-telegram-bot-api');
var RSSlink = require ('./rss_parser');


var token = '501765632:AAGeOXSHpPgzpmQFdtM0cCnvsV1TOZPcjOA';
var bot = new TelegramBot(token, {polling:true});


bot.on('message', function(msg){
   var id = msg.from.id;
   bot.sendMessage(id, 'you send me a message: ' + msg.text + RSSlink);
})