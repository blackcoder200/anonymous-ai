import chalk from 'chalk';

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
};

export const generateMenu = (commands) => {
  const menu = `
${colors.cyan}┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
${colors.cyan}┃${colors.bright}${colors.magenta}  ✨ ANONYMOUS AI MENU ✨  ${colors.cyan}┃${colors.reset}
${colors.cyan}┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛${colors.reset}

${colors.green}📁 COMMANDS:${colors.reset}
`;

  let output = menu;
  const categories = new Map();

  for (const [name, cmd] of commands.entries()) {
    const cat = cmd.category || 'misc';
    if (!categories.has(cat)) {
      categories.set(cat, []);
    }
    categories.get(cat).push(name);
  }

  for (const [category, cmds] of categories.entries()) {
    output += `\n${colors.blue}${colors.bright}▶ ${category.toUpperCase()}${colors.reset}\n`;
    cmds.forEach(cmd => {
      output += `  ${colors.cyan}•${colors.reset} ${cmd}\n`;
    });
  }

  output += `\n${colors.yellow}Type: .help <command>${colors.reset}\n`;

  return output;
};

export const styleText = (text, type = 'info') => {
  const styles = {
    success: chalk.green,
    error: chalk.red,
    warning: chalk.yellow,
    info: chalk.blue,
    primary: chalk.cyan,
  };

  return styles[type](text);
};

export const formatTime = (ms) => {
  if (ms < 1000) return `${Math.round(ms)}ms`;
  if (ms < 60000) return `${Math.round(ms / 1000)}s`;
  if (ms < 3600000) return `${Math.round(ms / 60000)}m`;
  return `${Math.round(ms / 3600000)}h`;
};

export const extractJid = (jid) => {
  if (!jid) return null;
  return jid.split('@')[0] + '@s.whatsapp.net';
};

export const isGroup = (jid) => {
  return jid.endsWith('@g.us');
};

export const isBot = (jid, botJid) => {
  return jid === botJid;
};

export const parseArgs = (text, prefix) => {
  const args = text.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  return { command, args };
};
