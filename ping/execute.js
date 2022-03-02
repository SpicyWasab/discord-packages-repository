const { client } = interaction;

try {
    await interaction.reply({ content: 'Pong !' });
    const message = await interaction.fetchReply();
    console.log('hEYYYYYYYYYYYYYY', message);
    message.react('white_check_mark');
} catch(e) {
    console.log(e);
    interaction.followUp('Error : ' + e.message);
}