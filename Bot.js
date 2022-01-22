const Discord = require("discord.js");
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('ready!');
})

client.on('messageCreate', msg =>{
    console.log(msg.author['username'], msg.content);
});
client.on('messageCreate', msg =>{
    for (const [key, val] of msg.attachments){
        console.log(val)
    }
});

client.login('ODU4NTk0MDY1MDM2NDc2NDE2.YNgaCQ.W_Vc5dhVCQbR98TwqfYwFHvw2Jc');