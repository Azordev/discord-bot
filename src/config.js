const MAPPED_STATUS_COMMANDS = {
    'pr-no-merge': '🚫',
    'pr-sos': '🆘',
    'pr-draft': '🚧',
    'pr-reviewing': '👀',
    'pr-request-changes': '🔁',
    'pr-request-review': '❗',
    'pr-working-in-fixes': '🧑‍🔧',
    'pr-approved-by-code-review': '👍🏾',
    'pr-merged-in-dev': '✅',
  };

const VOTE_POINTS_ANSWERS = [
    {
      text: "1",
      emoji: "🥇"
    },
    {
      text: "2",
      emoji: "🥈"
    },
    {
      text: '3',
      emoji: '🥉'
    },
    {
      text: '4',
      emoji: '4️⃣'
    },
    {
      text: '5',
      emoji: '5️⃣'
    },
    {
      text: '6',
      emoji: '6️⃣'
    },
    {
      text: '7',
      emoji: '7️⃣',
    },
    {
      text: '8',
      emoji: '🎱'
    }
  ]

module.exports = {
    MAPPED_STATUS_COMMANDS,
    VOTE_POINTS_ANSWERS
}