const { SlashCommandBuilder } = require('discord.js');
const { createPRModal } = require('../../modals/pr-template-modal');
const { PR_TEMPLATE_ALLOWED_CHANNELS } = require('../../config');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pr-template')
    .setDescription('Send a formatted PR review request')
    .addStringOption((option) =>
      option
        .setName('channel')
        .setDescription('Select a channel for the PR review request')
        .setRequired(true)
        .addChoices(PR_TEMPLATE_ALLOWED_CHANNELS)
    ),

  async execute(interaction) {
    const selectedChannelId = interaction.options.getString('channel');

    const modal = createPRModal(selectedChannelId);
    await interaction.showModal(modal);
  },
};
