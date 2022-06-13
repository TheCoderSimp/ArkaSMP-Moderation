module.exports =    {
    commands: ['time', 'time-left', 'timeleft','tl', 'left'],
    expectedArgs: '',
    minArgs: '',
    maxArgs: '',
    callback : (message,arguments,text) => {
        message.channel.send('Time left for <@388949711165587458> to finish verify cmd is <t:1655378700:R> ')
    },
    permissions: [],
    requiredRoles: [],

}