module.exports = {
    commands: ['mute','m'],
    minArgs: 2,
    expectedArgs: "<Target user's @> <The reason>",
    requiredRoles: ['Admins'],
    callback: (args,message,client,guild) =>{
        /*const targetUser = message.mentions.users.first()
        if (!targetUser) {
            message.reply('Please specify someone to mute.')
            return
          
        }*/
      // const { guild } = message
      
        let role = message.guild.roles.cache.find(role => role.name === 'muted')
        let reason = message.content.split(" ").slice(2).join(" ")
        const member = message.mentions.members.first()
        if(!reason){
            reason = "No reason given"
        }
        if(!role){
            role = "This server doesn't have a muted role"
            return
        }
      if(!member){
        message.channel.send("Plase specify someone to mute")
      }
        if(member.roles.cache.has(role.id)){
            message.reply("This user is already muted")
        }

        member.roles.add(role)
        message.reply(`${targetUser.username} has been muted for ${reason}`)
    }
}