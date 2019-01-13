'use strict'

/**
 * 测试页码切换功能
 */

module.exports = {
  before: function (browser) {
    browser.url(browser.launchUrl).waitForElementVisible('body')
  },

  after: function (browser) {
    browser.end()
  },

  'demo1 切页': function (browser) {
    browser
      .click('#demo1 [jp-data="10"] a')
      .assert.containsText('#demo1-text', '10')
      .click('#demo1 [jp-data="15"] a')
      .assert.containsText('#demo1-text', '15')
      .click('#demo1 [jp-data="20"] a')
      .assert.containsText('#demo1-text', '20')
  },

  'demo2 切页': function (browser) {
    browser
      .click('#demo2 [jp-data="10"] a')
      .assert.containsText('#demo2-text', '10')
      .click('#demo2 [jp-data="15"] a')
      .assert.containsText('#demo2-text', '15')
      .click('#demo2 [jp-data="20"] a')
      .assert.containsText('#demo2-text', '20')
  },

  'demo3 切页': function (browser) {
    browser
      .click('#demo3 [jp-data="10"]')
      .assert.containsText('#demo3-text', '10')
      .click('#demo3 [jp-data="15"]')
      .assert.containsText('#demo3-text', '15')
      .click('#demo3 [jp-data="20"]')
      .assert.containsText('#demo3-text', '20')
  },

  'pagination-demo 切页': function (browser) {
    browser
      .click('#pagination-demo-top [jp-data="10"] a')
      .assert.containsText('#pagination-demo-text', '10')
      .assert.attributeContains('#pagination-demo-bottom [jp-data="10"]', 'class', 'active')
      .click('#pagination-demo-top [jp-data="15"] a')
      .assert.containsText('#pagination-demo-text', '15')
      .assert.attributeContains('#pagination-demo-bottom [jp-data="15"]', 'class', 'active')
      .click('#pagination-demo-top [jp-data="20"] a')
      .assert.containsText('#pagination-demo-text', '20')
      .assert.attributeContains('#pagination-demo-bottom [jp-data="20"]', 'class', 'active')
  }
}
