const { SlashCommandBuilder } = use('@discordjs/builders');

module.exports = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Pong !')
    .toJSON();