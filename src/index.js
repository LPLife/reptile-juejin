const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch({
    ignoreDefaultArgs: ['--enable-automation'], // 破解个别反爬虫
  })
  const page = await browser.newPage()
  await page.goto('https://juejin.im', {
    waitUntil: 'networkidle2',
  })
  let url_list = await page.$$eval('.title-row', (arts) => {
    let list = []
    for (let i = 0; i < arts.length; i++) {
      let item = arts[i]
      let title = item.querySelector('.title').innerHTML
      list.push(title)
    }
    return list
  })
  console.log(url_list)

  await browser.close()
})()
