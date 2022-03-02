const { client } = interaction;

try {
    const message = await interaction.reply('Pong !');
    message.react('thinking');
} catch(e) {
    interaction.followUp('Error : ' + e.message);
}