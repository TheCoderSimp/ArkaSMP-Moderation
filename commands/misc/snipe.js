module.exports = {
    commands: ['snipe','sn','s'],
    requiredRoles: ['Members'],
    callback : (client, message, args) => {
        const msg = client.snipes.get(message.channel.id)
        if(!msg) return message.channel.send("There's nothing to snipe!")
        message.channel.send(`${msg.author} deleted: ${msg.content}`)
    }
}           