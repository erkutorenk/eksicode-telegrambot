
const path = require('path');

require('dotenv').config({
  path: path.join(__dirname,'.env')
});

const token = process.env.BOT_TOKEN;
const Telegraf = require('telegraf');
const bot = new Telegraf(token);

const newChatMemberHandler = async (ctx) => {

    const names = ctx.message.new_chat_members.filter(({ is_bot }) => !is_bot).map(({ first_name, last_name }) => `${first_name} ${last_name}`)

    await ctx.deleteMessage()
}

const removeJoinedHandler = async (ctx) => {
  await ctx.deleteMessage().catch(() => console.log("Hata: Yetkisiz İşlem. Lütfen eksiCodeBot'a yönetici ayrıcalıkları tanıyın."))
}


bot.on(["new_chat_members", "left_chat_member"], removeJoinedHandler)
bot.on('new_chat_members', newChatMemberHandler)
bot.launch()