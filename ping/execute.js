const { client } = interaction;

try {
    while(true) {  }
    await interaction.reply({ content: 'Pong !' });
    const message = await interaction.fetchReply();
    console.log('hEYYYYYYYYYYYYYY', message);
    message.react('✅');
} catch(e) {
    console.log(e);
    interaction.followUp('Error : ' + e.message);
}