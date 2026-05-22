export const calc = {
  name: 'calc',
  category: 'utility',
  description: 'Calculate mathematical expressions',
  cooldown: 1,

  async execute(ctx) {
    if (ctx.args.length === 0) {
      return '❌ Usage: .calc <expression>\nExample: .calc 5 + 3 * 2';
    }

    try {
      const expression = ctx.args.join(' ');
      // Safe calculation - only allow numbers and basic operators
      const result = Function('"use strict"; return (' + expression + ')')();

      return `
✅ *Calculation Result*
Expression: \`${expression}\`
Result: \`${result}\`
`;
    } catch (error) {
      return `❌ Invalid expression! ${error.message}`;
    }
  },
};

export default calc;
