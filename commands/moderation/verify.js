module.exports = {
  commands: ['verify','v','ver'],
  minArgs: 1,
  expectedArgs: "<Target user's @>",
  requiredRoles: ['Admins'],
  callback: (message, arguments) => {
    const targetUser = message.mentions.users.first()
    if (!targetUser) {
      message.channel.send('Please specify someone to verify.')
      return
    }

    arguments.shift()

    let role = message.guild.roles.cache.find(r => r.name === 'Members');

    const member = guild.members.cache.get(targetUser.id)
    
    member.roles.add(role)
  },
}