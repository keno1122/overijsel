const dicsord = require("discord.js");
const botconfig = require("./botconfig.json");

const bot = new dicsord.Client();


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online`)

    bot.user.setActivity("testing", {type: "PLAYING"});

});


bot.on("message", async message => {

    if(message.author.bot) return;
 

    if(message.channel.type === "dm") return;

    var prefix = botconfig.prefix;

    var messageArray = message.content.split(" ");
    
    var comand = messageArray[0];

    var arguments = messageArray.slice(1);

    if(comand ===`${prefix}hallo`){

        return message.channel.send("hallo");
    
    }

});


bot.login(process.env.token);