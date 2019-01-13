'use strict'

/**
 * 页码切换测试
 */

module.exports = {
  'demo1 切页': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body')
      .click('#demo1 [jp-data="10"] a')
      .pause(100)
      .assert.containsText('#demo1-text', '10')
      .click('#demo1 [jp-data="15"] a')
      .pause(100)
      .assert.containsText('#demo1-text', '15')
      .click('#demo1 [jp-data="20"] a')
      .pause(100)
      .assert.containsText('#demo1-text', '20')
      .end()
  },

  'demo2 切页': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body')
      .click('#demo2 [jp-data="10"] a')
      .pause(100)
      .assert.containsText('#demo2-text', '10')
      .click('#demo2 [jp-data="15"] a')
      .pause(100)
      .assert.containsText('#demo2-text', '15')
      .click('#demo2 [jp-data="20"] a')
      .pause(100)
      .assert.containsText('#demo2-text', '20')
      .end()
  },

  'demo3 切页': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body')
      .click('#demo3 [jp-data="10"]')
      .pause(100)
      .assert.containsText('#demo3-text', '10')
      .click('#demo3 [jp-data="15"]')
      .pause(100)
      .assert.containsText('#demo3-text', '15')
      .click('#demo3 [jp-data="20"]')
      .pause(100)
      .assert.containsText('#demo3-text', '20')
      .end()
  },

  'pagination-demo 切页': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body')
      .click('#pagination-demo-top [jp-data="10"] a')
      .pause(100)
      .assert.containsText('#pagination-demo-text', '10')
      .assert.attributeContains('#pagination-demo-bottom [jp-data="10"]', 'class', 'active')
      .click('#pagination-demo-top [jp-data="15"] a')
      .pause(100)
      .assert.containsText('#pagination-demo-text', '15')
      .assert.attributeContains('#pagination-demo-bottom [jp-data="15"]', 'class', 'active')
      .click('#pagination-demo-top [jp-data="20"] a')
      .pause(100)
      .assert.containsText('#pagination-demo-text', '20')
      .assert.attributeContains('#pagination-demo-bottom [jp-data="20"]', 'class', 'active')
      .end()
  }
}
