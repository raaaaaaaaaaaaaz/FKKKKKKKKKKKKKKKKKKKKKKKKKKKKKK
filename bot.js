
const Discord = require("discord.js");//NouNouDz#6720
const nounoudz = new Discord.Client();//NouNouDz#6720
const client = new Discord.Client();//NouNouDz#6720
const nounou = ['463698464845594628'];//NouNouDz#6720



nounoudz.on("ready", () => {//NouNouDz#6720
console.log('Ready To Run ');//NouNouDz#6720
});

nounoudz.on('message', message => {//NouNouDz#6720
    var argresult = message.content.split(` `).slice(1).join(' ');//NouNouDz#6720
      if (!nounou.includes(message.author.id)) return;//NouNouDz#6720
 
  if (message.content.startsWith('Rwt')) {//NouNouDz#6720
  nounoudz.user.setActivity(argresult, {type:'WATCHING'});//NouNouDz#6720
     message.channel.send(`\`✅\``)//NouNouDz#6720
                message.delete()//NouNouDz#6720
  } else //NouNouDz#6720
  if (message.content.startsWith('Rls')) {//NouNouDz#6720
  nounoudz.user.setActivity(argresult , {type:'LISTENING'});//NouNouDz#6720
     message.channel.send(`\`✅\``)//NouNouDz#6720
                message.delete()//NouNouDz#6720
  } else //NouNouDz#6720
  if (message.content.startsWith('RSt')) {
    nounoudz.user.setGame(argresult, "https://www.twitch.tv/idk");//NouNouDz#6720
     message.channel.send(`\`✅\``)//NouNouDz#6720
                message.delete()//NouNouDz#6720
  } else//NouNouDz#6720
      if (message.content.startsWith('Rpl')) {//NouNouDz#6720
    nounoudz.user.setGame(argresult);//NouNouDz#6720
     message.channel.send(`\`✅\``)//NouNouDz#6720
          message.delete()//NouNouDz#6720
  }
});//NouNouDz#6720

nounoudz.on('message', message => {//NouNouDz#6720
        if (!nounou.includes(message.author.id)) return;//NouNouDz#6720
  if (message.content === '932') {//NouNouDz#6720
message.delete()
  let afk = nounoudz.channels.get('515417209267290132');//NouNouDz#6720
        let generale = nounoudz.channels.get('480651296509132810');//NouNouDz#6720
      
          if (!afk) return generale.join() .then(connection => message.channel.send(`Done`));
      
  afk.join()//NouNouDz#6720
  .then(connection => message.channel.send(` Done `))//NouNouDz#6720
  .catch(console.error);//NouNouDz#6720
    }
});



nounoudz.login(process.env.BOT_TOKEN);//NouNouDz#6720
