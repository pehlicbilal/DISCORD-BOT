

module.exports = async (msg , args) => {
	if (msg.member.voice.channel) {
		const connection = await msg.member.voice.channel.join();
	} 
}