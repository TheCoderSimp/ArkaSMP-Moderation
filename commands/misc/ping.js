module.exports = {
  commands: 'ping',
  callback: (message, arguments, text, client) => {
    message.channel.send('Pong!'),
    message.channel.send('Calculating ping...').then((resultMessage) => {
      const ping = resultMessage.createdTimestamp - message.createdTimestamp

      resultMessage.edit(`Bot latency: ${ping}ms, API Latency: ${client.ws.ping}ms`)
    })
  },
}