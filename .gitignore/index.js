const Discord = require("discord.js");

const bot = new Discord.Client();

const embed = new Discord.RichEmbed()

bot.on('ready', () => {
    console.log('I am ready!');
    client.user.setGame("/help", "https://www.twitch.tv/twitch");
  });

bot.on('message', function (message) {
    if (message.content === '/ping')
    {
      message.channel.send('pong :ping_pong:');
    }
});

bot.on('message', function (message) {
    if (message.content === '/avatar')
    {
         message.reply(message.author.avatarURL);
    }
});

bot.on('message', message => {
    if (!message.guild) return;

    if (message.content.startsWith('/kick')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.kick('Pourquoi veux-tu kick cette utilisateur ?').then(() => {
            message.reply(`${user.tag} a bien été banni !`);
          }).catch(err => {
            message.reply('Je n ai pas la permission !');
            console.error(err);
          });
        } else {
          message.reply('Cet utilisateur n est pas dans le serveur');
        }

      } else {
        message.reply('Tu n as pas mentionné l utilisateur !');
      }
    }
  })
  bot.on('message', message => {
    if (!message.guild) return;
  
    if (message.content.startsWith('/ban')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.ban({
            reason: 'Ils étaient mauvais !',
          }).then(() => {
            message.reply(`${user.tag} a bien été banni !`);
          }).catch(err => {
            message.reply('Je n ai pas la permission !');
            console.error(err);
          });
        } else {
          message.reply('Cet utilisateur n est pas dans le serveur');
        }
      } else {
        message.reply('Tu n as pas mentionné l utilisateur !');
      }
    }
  });

bot.login('NTI3NDgzODQ1Mjk0MTYxOTMw.DwZ1iA.yri_PNn_zeA5wYlhQ_vWFlbREGc')