const { Client } = Discord = require('discord.js-selfbot-v13');
const { joinVoiceChannel } = require("@discordjs/voice");


const arvis = require("./ayarlar.json");
const client = global.client = new Client({ 'intents': [32767]});

    const token = arvis.TOKEN[index];
    client.login(token);


    client.on('ready', async () => {
        
    const VoiceChannel = client.channels.cache.__get(arvis.SesKanalı[index]);
    joinVoiceChannel({
        channelId: VoiceChannel.id,
        guildId: VoiceChannel.guild.id,
        adapterCreator: VoiceChannel.guild.voiceAdapterCreator,
        selfDeaf: true
    });

    client.user.setStatus("online");
    console.log(`[TOKEN AKTİF] ${client.user.tag}`);
    });
}