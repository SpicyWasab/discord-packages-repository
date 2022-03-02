const { client } = interaction;

try {
    const message = await interaction.reply({ content: 'Pong !', fetchReply: true });
    console.log('hEYYYYYYYYYYYYYY', message);
    message.react('✅');
} catch(e) {
    console.log(e);
    interaction.followUp('Error : ' + e.message);
}