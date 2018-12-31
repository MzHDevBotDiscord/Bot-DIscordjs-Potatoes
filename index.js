
const Discord = require("discord.js");

const bot = new Discord.Client();

const embed = new Discord.RichEmbed()

bot.on('ready', () => {
    console.log('I am ready!');
  });

bot.on('message', function (message) {
    if (message.content === '/ping')
    {
      message.channel.send('**pong :ping_pong:' + Math.round(bot.ping)+ 'ms !**');
    }
});

bot.on('message', function (message) {
    if (message.content === '/avatar')
    {
      message.channel.send(message.author.avatarURL);
    }
});

bot.on('message', message => {
    if (!message.guild) return;

    if (message.content.startsWith('/kick')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.kick('Pourquoi veux-tu bannir cet utilisateur ?').then(() => {
            message.reply(`${user.tag} a bien été kick !`);
          }).catch(err => {
            message.reply('Je / Tu n as pas la permission !');
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
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Ban the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           * Read more about what ban options there are over at
           * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
           */
          member.ban({
            reason: 'Il faisait des bêtises, fouettez le :lachanclure_pokemon: !',
          }).then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`${user.tag} a bien été banni !`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('Je / Tu n as pas la permission !');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply('Cet utilisateur n est pas dans le serveur');
        }
      } else {
      // Otherwise, if no user was mentioned
        message.reply('Tu n as pas mentionné l utilisateur !');
      }
    }
  });

bot.login('NTI5MjY5NDAyMDAxMjExNDIz.DwvT2g.QeanpoMjGKDP-5IVH0wjB5oCpfg')
