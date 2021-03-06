function jsSartMiHandler (ctx) {
  const jsSartMiMatch = ctx.message.text.match(/(js [sş]art m[ıi])/gim)
  const iHaveAQuestionMatch = ctx.message.text.match(/bi(rşey|şey| şey|r şey|şiy| şiy|şi| şi|' şey|'şey) sor(ucam|acağım|acam|cam|ucağım|abilirmiyim|abilir miyim)/gmi)
  try {
    if (jsSartMiMatch) {
      const randomNum = Math.floor(Math.random() * 1000)
      if (randomNum > 995) {
        ctx.reply('Değil.')
      } else {
        ctx.reply('Şart.')
      }
    } else if (iHaveAQuestionMatch) {
      ctx.reply('Haydi, sor sor!')
    }
  } catch (err) {
    console.log('unexpected error at js şart mı handler.')
  }
}

module.exports = jsSartMiHandler
