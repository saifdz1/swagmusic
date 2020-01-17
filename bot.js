const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
   client.user.setActivity("S A I F - روسي",{type: 'WATCHING'})
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online Welcome Back')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 
client.on('message', message => {
   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
if(message.content.split(' ')[0] == '-bc') {
         message.react("✔️")
          let embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setThumbnail(message.author.avatarURL)   
                                      .addField('تم الارسال بواسطة :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**● Sender  :**', `*** → ${message.author.username}#${message.author.discriminator}***`)
            .addField('***● Server  :***', `** → ${message.guild.name}**`)               
    .setColor('#ff0000')
                 .addField('ّ', args)
            m.send(``,{embed: bc});
        });
    }
})



const bugs = require("./Report.json")
const fs = require("fs")
var prefix = "-";
 
client.on("message", TheReport => {
 
  const args = TheReport.content.slice(prefix.length).trim().split(/ +/g);
 
if(TheReport.content.startsWith(prefix + "report")) {
  TheReport.delete();
  if(TheReport.content === '${prefix}report') return TheReport.channel.send("**write your bug**").then(msgR =>msgR.delete(4000));
 bugs[TheReport.author.id] = {
  message: args.slice(1).join(""),
  by: TheReport.author.id
 }
fs.writeFile("./Report.json", JSON.stringify(bugs, null , 4), err =>{
  console.log(err);
  })
  }
 
}
 
 
 
)
 
client.on("message", msg => {
  if(msg.author.id != "393146237752442883") return msg.channel.send("you cant do this command").then(newmessage =>newmessage.delete(4000));
  if (msg.content.startsWith(prefix + "bugs")){
    msg.delete();
    let data = undefined;
  for(i in bugs){
      if (data === undefined) {
        data = "";
      }
      let data1 = bugs[i].message
      let data2 = bugs[i].by
      const stuff = `${data1} **By** <@${data2}>`;
      data += (stuff) + "n";
    }
    if (data !== undefined) {
      const richEmbed = new Discord.RichEmbed();
      richEmbed.addField("Messages", data)
      msg.channel.send(richEmbed)
    }
  }
})




// Premuim Member //
const adminprefix = "%";
const devs = ['393146237752442883'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
} else 
  if (message.content.startsWith(adminprefix + 'rename')) {
client.user.setUsername(argresult).
    message.channel.sendMessage(`**:white_check_mark: , The Name Of The Bot Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
} else
  if (message.content.startsWith(adminprefix + 'setstatus')) {
client.user.setStatus(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Bot Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
} else
if (message.content.startsWith(adminprefix + 'stream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/SaifDz")
    message.channel.sendMessage(`**:white_check_mark: , The Stream Bot Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});


client.login(process.env.BOT_TOKEN);
