const { bot } = require("../core/bot");

bot.help((ctx) => {
  let text =
    `<b>Bizning botdagi ccomandalar:</b> \n` +
    `/start - <code>botni ishga tushirish</code>`;

  ctx.replyWithHTML(text);
});
