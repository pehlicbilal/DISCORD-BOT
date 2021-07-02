
module.exports = async (msg , args)=> {
    const voiceChannel = msg.member.voice.channel;

	if (voiceChannel) {
		const disconnect = await voiceChannel.leave();
	}
}