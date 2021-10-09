module.exports = {
 name: 'verify',
 description: 'use this command to verify',
 async execute(message, args, client, Discord) {
 const successEmbed = new Discord.MessageEmbed()
 .setTitle('Success!')
 .setDescription('You have been verified !')
 .setColor('GREEN');

 if (!message.member.roles.cache.has('828212104037269544')) {
 message.delete();
 await message.member.roles
 .add('828212104037269544')
 .then(message.author.send(successEmbed));
 } else {
 message.reply('You are already verified!');
 }
 }
}

//Read the README
