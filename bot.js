
const Discord = require("discord.js");//NouNouDz#6720
const nounoudz = new Discord.Client();//NouNouDz#6720
const client = new Discord.Client();//NouNouDz#6720
const nounou = ['401406828820299777'];//NouNouDz#6720

client.on('ready', () => {
  console.log('ReaDy To RuN 2ed ACC')
client.user.setGame('N o u N o u', 'https://twitch.tv')
});

nounoudz.on("ready", () => {//NouNouDz#6720
console.log('Ready To Run ');//NouNouDz#6720
  nounoudz.user.setActivity(`N o u N o u`, {type:'LISTENING'}); //NouNouDz#6720
});

nounoudz.on('message', message => {//NouNouDz#6720
    var argresult = message.content.split(` `).slice(1).join(' ');//NouNouDz#6720
      if (!nounou.includes(message.author.id)) return;//NouNouDz#6720
 
  if (message.content.startsWith('nWt')) {//NouNouDz#6720
  nounoudz.user.setActivity(argresult, {type:'WATCHING'});//NouNouDz#6720
     message.channel.send(`\`✅\``)//NouNouDz#6720
                message.delete()//NouNouDz#6720
  } else //NouNouDz#6720
  if (message.content.startsWith('nLs')) {//NouNouDz#6720
  nounoudz.user.setActivity(argresult , {type:'LISTENING'});//NouNouDz#6720
     message.channel.send(`\`✅\``)//NouNouDz#6720
                message.delete()//NouNouDz#6720
  } else //NouNouDz#6720
  if (message.content.startsWith('nSt')) {
    nounoudz.user.setGame(argresult, "https://www.twitch.tv/idk");//NouNouDz#6720
     message.channel.send(`\`✅\``)//NouNouDz#6720
                message.delete()//NouNouDz#6720
  } else//NouNouDz#6720
      if (message.content.startsWith('nPl')) {//NouNouDz#6720
    nounoudz.user.setGame(argresult);//NouNouDz#6720
     message.channel.send(`\`✅\``)//NouNouDz#6720
          message.delete()//NouNouDz#6720
  } else //NouNouDz#6720
  if (message.content.startsWith('nId')) {
  nounoudz.user.setStatus("dnd")
     message.channel.send(`\`✅\``)//NouNouDz#6720
                message.delete()//NouNouDz#6720
  } else//NouNouDz#6720
  if (message.content.startsWith('nDn')) {
  nounoudz.user.setStatus("idle")
     message.edit(`\`✅\``)//NouNouDz#6720
  } else //NouNouDz#6720
      if (message.content.startsWith('(')) {
        message.channel.send(`السلام عليكم ورحمة الله تعالى و بركاته`)
        message.delete()
    } else
      if (message.content.startsWith(')')) {
        message.channel.send(`وعليكم السلام ورحمة الله تعالى و بركاته -`)
        message.delete()
    }
});//NouNouDz#6720

nounoudz.on('message', message => {//NouNouDz#6720
        if (!nounou.includes(message.author.id)) return;//NouNouDz#6720
  if (message.content === 'join') {//NouNouDz#6720
   // let channel = guild.channels.find('name', '➥ AFK.');//NouNouDz#6720
message.delete()
  let afk = nounoudz.channels.get('515417209267290132');//NouNouDz#6720
        let generale = nounoudz.channels.get('480651296509132810');//NouNouDz#6720
      
          if (!afk) return generale.join() .then(connection => message.channel.send(` \` Im In \` ${generale}\`  \` `));
      
  afk.join()//NouNouDz#6720
  .then(connection => message.channel.send(` \` Im In \` ${afk}\`  \` `))//NouNouDz#6720
  .catch(console.error);//NouNouDz#6720
    }
});

nounoudz.on("guildMemberAdd", member => {	
var words = ['<:FlixHost:515836756109819905> **Welcome** **~~To~~** **Flix Cummunity** <:FlixHost:515836756109819905> 🌹 ❤',`${member} **__WelCome__** To **FlixHost**`,'🌹❤**__Welcome\`To_\`Flix-Host Server __**❤🌹']
    if(member.guild.id !== '428690920246870016') return;
   setTimeout(function(){
    nounoudz.channels.get('485710163966296064').send(words[Math.floor(Math.random() * words.length)]);
   },1500)
   });
///////////////////////////////////////////////// 2 ed Acc //////////////////////////////////////////////
client.on('message', message => {//NouNouDz#6720
        if (!nounou.includes(message.author.id)) return;//NouNouDz#6720
  if (message.content === 'join') {//NouNouDz#6720
   // let channel = guild.channels.find('name', '➥ AFK.');//NouNouDz#6720
message.delete()
  let afk = client.channels.get('514641715651543041');//NouNouDz#6720
        let generale = client.channels.get('480651296509132810');//NouNouDz#6720
      
          if (!afk) return generale.join() .then(connection => message.channel.send(` \` Im In \` ${generale}\`  \` `));
      
  afk.join()//NouNouDz#6720
  .then(connection => message.channel.send(` \` Im In \` ${afk}\`  \` `))//NouNouDz#6720
  .catch(console.error);//NouNouDz#6720
    }
});

client.login(process.env.TOKEN_LOL);
nounoudz.login(process.env.BOT_TOKEN);//NouNouDz#6720
