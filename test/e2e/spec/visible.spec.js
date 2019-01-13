'use strict'

/**
 * 测试显示页码数功能
 */

module.exports = {
  before: function (browser) {
    browser.url(browser.launchUrl).waitForElementVisible('body')
  },

  after: function (browser) {
    browser.end()
  },

  demo1: function (browser) {
    browser
      .click('#demo1 [jp-data="10"] a')
      .assert.elementPresent('#demo1 [jp-data="6"]')
      .assert.elementPresent('#demo1 [jp-data="15"]')
      .click('#demo1 [jp-data="15"] a')
      .assert.elementPresent('#demo1 [jp-data="11"]')
      .assert.elementPresent('#demo1 [jp-data="20"]')
      .click('#demo1 [jp-data="20"] a')
      .assert.elementPresent('#demo1 [jp-data="16"]')
      .assert.elementPresent('#demo1 [jp-data="25"]')
  },

  demo2: function (browser) {
    browser
      .click('#demo2 [jp-data="10"] a')
      .assert.elementPresent('#demo2 [jp-data="6"]')
      .assert.elementPresent('#demo2 [jp-data="15"]')
      .click('#demo2 [jp-data="15"] a')
      .assert.elementPresent('#demo2 [jp-data="11"]')
      .assert.elementPresent('#demo2 [jp-data="20"]')
      .click('#demo2 [jp-data="20"] a')
      .assert.elementPresent('#demo2 [jp-data="16"]')
      .assert.elementPresent('#demo2 [jp-data="25"]')
  },

  demo3: function (browser) {
    browser
      .click('#demo3 [jp-data="10"]')
      .assert.elementPresent('#demo3 [jp-data="6"]')
      .assert.elementPresent('#demo3 [jp-data="15"]')
      .click('#demo3 [jp-data="15"]')
      .assert.elementPresent('#demo3 [jp-data="11"]')
      .assert.elementPresent('#demo3 [jp-data="20"]')
      .click('#demo3 [jp-data="20"]')
      .assert.elementPresent('#demo3 [jp-data="16"]')
      .assert.elementPresent('#demo3 [jp-data="25"]')
  },

  'pagination-demo': function (browser) {
    browser
      .click('#pagination-demo-bottom [jp-data="10"] a')
      .assert.elementPresent('#pagination-demo-top [jp-data="6"]')
      .assert.elementPresent('#pagination-demo-bottom [jp-data="6"]')
      .assert.elementPresent('#pagination-demo-top [jp-data="15"]')
      .assert.elementPresent('#pagination-demo-bottom [jp-data="15"]')
      .click('#pagination-demo-bottom [jp-data="15"] a')
      .assert.elementPresent('#pagination-demo-top [jp-data="11"]')
      .assert.elementPresent('#pagination-demo-bottom [jp-data="11"]')
      .assert.elementPresent('#pagination-demo-top [jp-data="20"]')
      .assert.elementPresent('#pagination-demo-bottom [jp-data="20"]')
      .click('#pagination-demo-bottom [jp-data="20"] a')
      .assert.elementPresent('#pagination-demo-top [jp-data="16"]')
      .assert.elementPresent('#pagination-demo-bottom [jp-data="16"]')
      .assert.elementPresent('#pagination-demo-top [jp-data="25"]')
      .assert.elementPresent('#pagination-demo-bottom [jp-data="25"]')
  }
}
