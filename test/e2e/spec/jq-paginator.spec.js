module.exports = {
  'Demo test Bing': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body')
      .end()
  }
}
