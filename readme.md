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

1. Create a new file called `.env` based on the `.env.example` file in the root of the project with the following keys, filled it with the information of your bot:

   ```
     DISCORD_TOKEN = YOUR_BOT_TOKEN
     DISCORD_CLIENT_ID = YOUR_CLIENT_ID
     DISCORD_GUILD_ID = YOUR_GUILD_ID
   ```

   - **DISCORD_TOKEN**: Your Discord bot's token.
   - **DISCORD_CLIENT_ID**: Your bot's client or application ID.
   - **DISCORD_GUILD_ID**: The ID of the server (guild) where the commands will be deployed.

To obtain each of these environment variables, you need to have `Developer Mode` enabled in Discord (if it is not already).

Open Discord to enable developer mode and click on the gear icon (User Settings) at the bottom left.

![user settings](docs/configuration/discord_developer_mode/user_settings.png)

Go to `App Settings` in your discord app

![app settings](docs/configuration/discord_developer_mode/app_settings.png)

and select the `Advanced` option, then look for the `Developer Mode` option and toggle it on. For more details on how to create a Discord bot, you can visit the official Discord guide.

![advanced settings](docs/configuration/discord_developer_mode/advanced_settings.png)

Once `Developer Mode` is enabled, you can also follow this documentation for creating a Discord bot: [Discord setting up a bot Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot). You can follow these steps to obtain Environment Variables:

### 1. Obtain **DISCORD_TOKEN**

- Go to the [Discord Developer Portal](https://discord.com/developers/applications) and log in and create a new application by clicking on `New Application`.

![discord developer portal](docs/configuration/discord_token/discord_developer_portal.png)

- Name your application and click `Create`.

![create app form](docs/configuration/discord_token/create_app_form.png)

- In the `Bot` section, click on `Reset Token` and confirm.

![bot setion](docs/configuration/discord_token/bot_section.png)

- Copy the bot token that is generated. This is your **DISCORD_TOKEN**.

### 2. Obtain **DISCORD_CLIENT_ID**

- Go to the [Discord Developer Portal](https://discord.com/developers/applications).

![discord developer portal](docs/configuration/discord_token/discord_developer_portal.png)

- Go to `OAuth2` or `General information` section.

![oauth2-section](docs/configuration/discord_client_id/oauth_section.png)

- In `OAuth2` section there is a card with client information and there is CLIENT ID

![oauth2-section_client-id](docs/configuration/discord_client_id/oauth2_section_client_id.png)

- In case of `General information` section there is a card with client information and there is CLIENT ID

![general-info_app-id](docs/configuration/discord_client_id/general_info_app_id.png)

- You will find the option to copy the `Client ID` or `Application ID`. This is your
  **DISCORD_CLIENT_ID**.

### 3. Obtain **DISCORD_GUILD_ID**

- Open [Discord](https://discord.com/app) and go to the server from which you want to obtain the ID.

![discord-app](docs/configuration/discord_guild_id/discord_app_server_menu.png)

- Right-click on the server name and select `Copy Server ID`. This is your **DISCORD_GUILD_ID**.

![discord-guild-menu](docs/configuration/discord_guild_id/discord_guild_menu.png)

## Running the Bot

1. Start the bot with the following command:

   ```bash
   yarn start
   ```

   This will run the bot and connect it to Discord. You should see a message in the console indicating that the bot is ready and logged in.

## [Creating New Commands](docs/creating-commands.md)

For detailed instructions on how to create new commands, see [Creating New Commands](docs/creating-commands.md).

## Additional Environment Variables

To schedule automated messages, you can configure the following additional environment variables in your `.env` file:

- **SCHEDULED_MESSAGES**: A CSV string where each entry is separated by a semicolon (`;`) and contains three values separated by commas (`channel,datetime,message`). The `channel` is the Discord channel where the message will be sent, `datetime` is the date and time in ISO 8601 format (e.g., `2024-11-15T10:00:00`), and `message` is the content of the message to be sent.

For example:

```
SCHEDULED_MESSAGES="canal1,2024-11-15T10:00:00,Hello World!;canal2,2024-11-15T12:00:00,Good Morning!"
```

This example will schedule two messages:

- "Hello World!" will be sent to `canal1` on `2024-11-15` at `10:00 AM`.
- "Good Morning!" will be sent to `canal2` on `2024-11-15` at `12:00 PM`.

- **TIMEZONE**: The time zone in which the scheduled messages should be executed. For example, `America/Argentina/Buenos_Aires` can be used for Argentina's time zone.

### Cron Job Time Format

The `datetime` field in `SCHEDULED_MESSAGES` follows the ISO 8601 format:

```
YYYY-MM-DDTHH:mm
(e.g., 2024-11-15T10:00:00)
```

- **YYYY**: Year (e.g., `2024`)
- **MM**: Month (e.g., `11` for November)
- **DD**: Day of the month (e.g., `15`)
- **T**: Separator between the date and time components
- **HH**: Hour in 24-hour format (e.g., `10` for 10 AM)
- **mm**: Minutes (e.g., `00` for the start of the hour)
- **ss**: Seconds (optional, defaults to `00`)

### Example `.env` Configuration

```
SCHEDULED_MESSAGES="canal1,2024-11-15T10:00:00,Hello World!;canal2,2024-11-15T12:00:00,Good Morning!" TIMEZONE="America/Argentina/Buenos_Aires"
```
