const path = require('path')
const fs = require('fs')
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const config = require('./config.json');
const welcome = require('./welcome');
const commandBase = require('./commands/command-base');
const server = require('./server');
const keepAlive = require('./server');

const activities = [
  'Flash',
  'Steins Gate',
  'Infi go on about anime',
  'Arka sell hitmen',
  'Ish singing Joe Ke Bolo',
  'People not having a life',
  'Aadi being dumb',
  'JJ apologising for deleting general',
  'Peaky Blinders',
  'The Office',
  'JJ begging Arka and Infi to watch flash',
  'Abhiggyan begging for admin',
  'Community',
  'Reverse Flash being so cool',
  'People cry for help',
  'Tommy Shelby being a sigma',
  'Anime',
  'YLIA and crying D:',
  'Anime',
  'Naruto spam shadow clone jutsu',
  'Infi getting strelizia ready'
]

client.on('ready', async () => {
  console.log('The client is ready!')

  setInterval(() => {
    // generate random number between 1 and list length.
    const index = Math.floor(Math.random() * (activities.length - 1) + 1);
    client.user.setActivity(activities[index], {type: 'WATCHING'}); //sets activity to random activity from list.
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

  readCommands('commands')
  welcome(client)
})

keepAlive()
client.login(config.token)