

module.exports = async (msg , args) => {

	const voiceChannel = msg.member.voice.channel;

	if (voiceChannel) {
		const connection = await voiceChannel.join();
	}else{
		msg.channel.send("Nema te u voice");
	} 
}