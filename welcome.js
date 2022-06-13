module.exports = (client) => {
    const channelId = '903158013035159562' // welcome channel
    const targetChannelId = '983595093573394492' // get-roles
  
    client.on('guildMemberAdd', (member) => {
        const message = `Hey <@${
            member.id
          }>, welcome to **Arka SMP**! The <@&856229189916164117> will verify you as soon as possible :) . Meanwhile get yourself some cool
             roles at ${member.guild.channels.cache
            .get(targetChannelId)
            .toString()}`

      const channel = member.guild.channels.cache.get(channelId)
      channel.send(message)
    })
  }