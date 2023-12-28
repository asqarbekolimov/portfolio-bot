const { bot } = require("../core/bot");

bot.help((ctx) => {
  let text =
    `<b>Bizning botdagi comandalar:</b> \n` +
    `/start - <code>botni ishga tushirish</code> \n` +
    `Author: <a href="https://t.me/asqarb3k">Asqarbek Olimov</a>`;

  ctx.replyWithHTML(text);
});
