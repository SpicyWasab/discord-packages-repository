const { client } = interaction;

try {
    const message = await interaction.reply({ content: 'Pong !', fetchReply: true });
    console.log(message);
    message.react('white_check_mark');
} catch(e) {
    console.log(e);
    interaction.followUp('Error : ' + e.message);
}