module.exports = {
    commands: ['unmute','um'],
    minArgs: 2,
    expectedArgs: "<Target user's @>",
    requiredRoles: ['Admins'],
    callback: (args,message,client,guild) =>{
        
        let role = message.guild.roles.cache.find(role => role.name === 'muted')
        const member = message.mentions.members.first()

        if(!member.roles.cache.has(role.id)){
            message.reply("This user is not muted")
        }
        
        member.roles.remove(role)
        message.reply(`${targetUser.username} has been unmuted`)
    }
}