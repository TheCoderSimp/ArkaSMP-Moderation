const path = require('path')
const fs = require('fs')
const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const commandBase = require('./commands/command-base');
// const keepAlive = require('./server')
const config = require('./config.json');

require('./util/loadEvents')(client);

client.snipes = new Collection()

// const state = 0
const activities = [
   'Flash',
   'Steins Gate',
   'Infi go on about anime',
   'Arka sell hitmen',
   'Ish Singing Joe Ke Bolo',
   'People not having a life',
   'Aadi being dumb',
   'JJ apologising for deleting general',
   'Peaky Blinders',
   'The Office',
   'JJ begging Arka and Infi to watch flash',
   'Abhiggyan begging for admin',
   'Community',
   'Reverse Flash being so cool 😤',
   'People cry for help',
   'Tommy Shelby being a sigma',
   'Anime',
   'YLIA and crying D:',
   'Anime',
   'Naruto spam shadow clone jutsu',
   'Infi getting strelizia ready',
   'You😤smelling👃like😳a😱baka😩',
   'Arka D-DOS people',
   'Garvit existing smh 🙄',
   'JJ mention he created this bot',
   'JJ telling to use this bot',
   'Joe 👀'
   // 'Minecraft'
]

client.on('ready', async () => {


  setInterval(() => {
    
    const index = Math.floor(Math.random() * (activities.length - 1) + 1);
    client.user.setActivity(activities[index], { type: 'WATCHING' });
  }, 10000);

  const baseFile = 'command-base.js'
  const commandBase = require(`./commands/${baseFile}`)

  const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file))
      } else if (file !== baseFile) {
        const option = require(path.join(__dirname, dir, file))
        commandBase(client, option)
      }
    }
  }

  readCommands('commands');
  console.log('The client is ready!')
})

// keepAlive()
client.login(config.token)