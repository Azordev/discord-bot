# Discord Bot

This project is a Discord bot built with `discord.js`. The bot includes various functionalities such as polls, automated responses, and more. Below are the instructions on how to run the bot and create new commands.

## Requirements

- Node.js (version 20 or higher)
- Yarn (optional, but recommended)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/TeamNovaSoft/discord-bot.git
    ```

2. Navigate to the project directory:
    ```bash
    cd discord-bot
    ```

3. Install the dependencies:
    ```bash
    yarn install
    ```

## Configuration

1. Create a `.env` file in the root of the project with the following keys:
    ```
      DISCORD_TOKEN = YOUR_BOT_TOKEN
      DISCORD_CLIENT_ID = YOUR_CLIENT_ID
      DISCORD_GUILD_ID = YOUR_GUILD_ID
    ```

   - **DISCORD_TOKEN**: Your Discord bot's token.
   - **DISCORD_CLIENT_ID**: Your bot's client ID.
   - **DISCORD_GUILD_ID**: The ID of the server (guild) where the commands will be deployed.

## Running the Bot

1. Start the bot with the following command:
    ```bash
    yarn start
    ```

   This will run the bot and connect it to Discord. You should see a message in the console indicating that the bot is ready and logged in.

## [Creating New Commands](docs/creating-commands.md)

For detailed instructions on how to create new commands, see [Creating New Commands](docs/creating-commands.md).