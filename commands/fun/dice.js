export const dice = {
  name: 'dice',
  category: 'fun',
  description: 'Roll a dice',
  cooldown: 1,

  async execute(ctx) {
    const diceResult = Math.floor(Math.random() * 6) + 1;
    const diceEmoji = ['⚫', '⚪', '🟤', '🔴', '🟠', '🟡'][diceResult - 1];

    return `
🎲 *Dice Roll*

Result: ${diceEmoji} *${diceResult}*
`;
  },
};

export default dice;
