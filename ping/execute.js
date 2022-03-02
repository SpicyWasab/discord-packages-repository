const { client } = interaction;

try {
    const message = await interaction.reply('Pong !');
    console.log(message);
    // await interaction.followUp(message);

    throw new Error('error');
} catch(e) {
    console.log(e);
    interaction.followUp('Error : ' + e.message);
}