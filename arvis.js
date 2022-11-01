const { Client } = Discord = require('discord.js-selfbot-v13');
const { joinVoiceChannel } = require("@discordjs/voice");

const arvis = require("./ayarlar.json");
const client = global.client = new Client({ 'intents': [32767]});

//ArviS#0011
for (let index = 0; index < arvis.userTOKEN.length; index++) {
    const token = arvis.userTOKEN[index];
    client.login(token);
    client.on('ready', async () => {
    const VoiceChannel = client.channels.cache.get(arvis.seskanalları[index]);
    joinVoiceChannel({
        channelId: VoiceChannel.id,
        guildId: VoiceChannel.guild.id,
        adapterCreator: VoiceChannel.guild.voiceAdapterCreator,
        selfDeaf: true
    });

    //ArviS#0011
    client.user.setStatus("online");
    console.log(`TOKEN AKTİF: ${client.user.tag}`);
    });
}










//ArviS#0011