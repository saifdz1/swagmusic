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


client.on("guildMemberAdd", member => {
  var embed = new Discord.RichEmbed() 
    .setThumbnail(member.user.avatarURL) 
    .addField("**Welcome To **", ${member.guild.name}, member.user.username) 
    .setColor("#0984e3") 
    .setImage("https://cdn.discordapp.com/attachments/607046676984758383/650554313818767361/p_1225y7yza1.gif");
  var channel = member.guild.channels.find("name", "welcome"); // اسم الروم 
  if (!channel) return; 
  channel.send({ embed: embed }); 
}); 
const invites = {}; 
const wait = require("util").promisify(setTimeout); 
client.on("ready", () => {
  wait(1000); 
  client.guilds.forEach(king => {
    king.fetchInvites().then(guildInvites => {
      invites[king.id] = guildInvites; 
    }); 
  }); 
}); 
client.on("guildMemberAdd", member => {
 
  member.guild.fetchInvites().then(guildInvites => {
    
    const gamer = invites[member.guild.id]; 
    invites[member.guild.id] = guildInvites; 
    const invite = guildInvites.find(i => gamer.get(i.code).uses < i.uses); 
    const inviter = client.users.get(invite.inviter.id);
    const welcome = member.guild.channels.find(
    
      channel => channel.name === "welcome" 
    ); 
    welcome.send(
      ` <@${member.id}> **invited by** <@${inviter.id}> , **Total Invites** ${invite.uses}`
    ); 
  }); 
}); 




//Alpha Team copyRight 2019




client.login(process.env.BOT_TOKEN);
