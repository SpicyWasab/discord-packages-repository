const { client } = interaction;

try {
    const message = await interaction.reply('Pong !');
    console.log(message);
    interaction.followUp(JSON.stringify(message));
} catch(e) {
    console.log(e);
    interaction.followUp('Error : ' + e.message);
}