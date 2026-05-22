export const status = {
  name: 'status',
  category: 'info',
  description: 'Show bot status and statistics',
  cooldown: 2,

  async execute(ctx) {
    const uptime = process.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    const memoryUsage = process.memoryUsage();
    const heapUsedMB = (memoryUsage.heapUsed / 1024 / 1024).toFixed(2);
    const heapTotalMB = (memoryUsage.heapTotal / 1024 / 1024).toFixed(2);

    return `
📊 *Bot Status*

✅ Status: Online
🤖 Bot: Anonymous Ai
⏱️ Uptime: ${hours}h ${minutes}m ${seconds}s
💾 Memory: ${heapUsedMB}MB / ${heapTotalMB}MB
🔋 CPU: Active
📱 Devices: Multi-device enabled
🌐 Platform: Render
`;
  },
};

export default status;
