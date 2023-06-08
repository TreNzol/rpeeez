const Discord = require('discord.js');
const client = new Discord.Client({
  presence: {
    status: 'dnd'
  },
  ws: {
    checkServerIdentity: () => undefined
  }
});

const keepAlive = require("./server");

client.on('ready', async () => {
  console.log(`${client.user.tag} - Hogaya re tera jake dekh le`);

  const r = {
    details: '#siduop',
    state: 'Rise Development',
    startTimestamp: Date.now(),
    largeImage: 'https://media.discordapp.net/attachments/906047691337908274/1102088898601046099/standard.gif',
    largeText: 'Join us',
    smallImage: 'https://media.discordapp.net/attachments/906047691337908274/1102089096031121538/20210504_182139.gif',
    smallText: 'OWNER',
    buttons: [
      { label: 'YOUTUBE', url: 'https://bit.ly/3oQZWb0' },
      { label: 'DISCORD', url: 'https://discord.gg/erxSQ3UvDd' }
    ]
  };

  client.user.setActivity(r);
});

client.on('message', (message) => {
  if (message.content === '!payment' && message.author.id === process.env.BOT_OWNER_ID) {
    const paymentEmbed = new Discord.MessageEmbed()
      .setColor('#00FF00')
      .setTitle('Payment Information')
      .setDescription('Please make your payment to XYZ account.')
      .setImage('https://example.com/payment-image.png');

    message.channel.send(paymentEmbed);
  }
});

keepAlive();
client.login(process.env.TOKEN);
