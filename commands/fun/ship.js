export const ship = {
  name: 'ship',
  category: 'fun',
  description: 'Calculate relationship compatibility between two people',
  cooldown: 2,

  async execute(ctx) {
    if (ctx.args.length < 2) {
      return '❌ Usage: .ship <name1> <name2>\nExample: .ship John Jane';
    }

    const name1 = ctx.args[0];
    const name2 = ctx.args[1];

    // Generate compatibility percentage
    const compatibility = Math.floor(Math.random() * 100) + 1;

    // Generate heart rating
    let hearts = '';
    const heartCount = Math.ceil((compatibility / 100) * 5);
    for (let i = 0; i < heartCount; i++) {
      hearts += '❤️';
    }
    for (let i = heartCount; i < 5; i++) {
      hearts += '🤍';
    }

    // Generate ship name
    const shipName = name1.slice(0, Math.ceil(name1.length / 2)) + 
                     name2.slice(Math.ceil(name2.length / 2));

    return `
💕 *Ship Calculator*

*${name1}* ❤️ *${name2}*

Ship Name: *${shipName}*
Compatibility: ${hearts}
Rating: *${compatibility}%*

${compatibility > 80 ? '✨ Made for each other!' : compatibility > 50 ? '💭 Pretty good match!' : '⚠️ Not very compatible...'}
`;
  },
};

export default ship;
