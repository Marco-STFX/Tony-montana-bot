console.log("say hello to my little friend");
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
	if(message.content == "Good morning") {
		message.channel.sendMessage('Good morning chico');
	}

	if(message.content == "who are you?") {
		message.channel.sendMessage('am just a bot created by that STFX guy');
	}

	if(message.content == "shit") {
		message.channel.sendMessage('wanna play uh?');
	}
	
	if(message.content == "+T hunter x hunter") {
		message.channel.sendMessage('https://www.youtube.com/watch?v=gmKtTTAMwYg');
	}
	
	if(message.content == "+T Call me") {
		message.channel.sendMessage('https://www.youtube.com/watch?v=AV0ugZumyJU');
	}

	if(message.content == "Good night") {
		message.channel.sendMessage('Good night chico!');
	}

	if(message.content == "+T Billie jean") {
		message.channel.sendMessage('https://www.youtube.com/watch?v=Zi_XLOBDo_Y');
	}

	if(message.content == "+T Self control") {
		message.channel.sendMessage('https://www.youtube.com/watch?v=Ucmo6hDZRSY');
	}

	if(message.content == "+T The power of love") {
		message.channel.sendMessage('https://www.youtube.com/watch?v=-NMph943tsw&t=71s');
	}

	if(message.content == "who pinged me?") {
		message.channel.sendMessage('ok i will play with you');
	}
	
	if(message.content == "shoot") {
		message.channel.sendMessage('SAY HELLO TO MY LITTLE FRIEND!')
	}
});
bot.login('NTEzNDE2NzMwNjE4NDk0OTg3.DtIEeA._htkqTrBXZ0bQpNeKuFMoup_nnE');