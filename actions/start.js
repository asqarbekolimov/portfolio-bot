const { bot } = require("../core/bot");

bot.start((ctx) => {
  ctx
    .replyWithHTML(
      `Assalomu aleykum ${ctx.from.first_name} Asqarbek Olimov ning shaxsiy botiga xush kelibsiz!!!`
    )
    .then();
});
