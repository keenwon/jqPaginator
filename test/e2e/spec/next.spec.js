'use strict'

/**
 * 测试下一页、末页功能
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
      .click('#demo1 [jp-role="next"] a')
      .assert.containsText('#demo1-text', '2')
      .click('#demo1 [jp-role="next"] a')
      .assert.containsText('#demo1-text', '3')
      .click('#demo1 [jp-role="next"] a')
      .assert.containsText('#demo1-text', '4')
      .click('#demo1 [jp-role="last"] a')
      .assert.containsText('#demo1-text', '100')
      .assert.attributeContains('#demo1 [jp-role="last"]', 'class', 'disabled')
      .assert.attributeContains('#demo1 [jp-role="next"]', 'class', 'disabled')
  },

  demo2: function (browser) {
    browser
      .click('#demo2 [jp-role="next"] a')
      .assert.containsText('#demo2-text', '2')
      .click('#demo2 [jp-role="next"] a')
      .assert.containsText('#demo2-text', '3')
      .click('#demo2 [jp-role="next"] a')
      .assert.containsText('#demo2-text', '4')
      .click('#demo2 [jp-role="last"] a')
      .assert.containsText('#demo2-text', '100')
      .assert.attributeContains('#demo2 [jp-role="last"]', 'class', 'disabled')
      .assert.attributeContains('#demo2 [jp-role="next"]', 'class', 'disabled')
  },

  demo3: function (browser) {
    browser
      .click('#demo3 [jp-role="next"]')
      .assert.containsText('#demo3-text', '2')
      .click('#demo3 [jp-role="next"]')
      .assert.containsText('#demo3-text', '3')
      .click('#demo3 [jp-role="next"]')
      .assert.containsText('#demo3-text', '4')
  },

  demo4: function (browser) {
    browser
      .click('#demo4 [jp-role="next"] a')
      .assert.containsText('#demo4-text', '2')
      .click('#demo4 [jp-role="next"] a')
      .assert.containsText('#demo4-text', '3')
      .click('#demo4 [jp-role="next"] a')
      .assert.containsText('#demo4-text', '4')
  },

  'pagination-demo': function (browser) {
    browser
      .click('#pagination-demo-top [jp-role="next"] a')
      .assert.containsText('#pagination-demo-text', '2')
      .assert.attributeContains('#pagination-demo-bottom [jp-data="2"]', 'class', 'active')
      .click('#pagination-demo-top [jp-role="next"] a')
      .assert.containsText('#pagination-demo-text', '3')
      .assert.attributeContains('#pagination-demo-bottom [jp-data="3"]', 'class', 'active')
      .click('#pagination-demo-top [jp-role="next"] a')
      .assert.containsText('#pagination-demo-text', '4')
      .assert.attributeContains('#pagination-demo-bottom [jp-data="4"]', 'class', 'active')
      .click('#pagination-demo-top [jp-role="last"] a')
      .assert.containsText('#pagination-demo-text', '100')
      .assert.attributeContains('#pagination-demo-bottom [jp-role="last"]', 'class', 'disabled')
      .assert.attributeContains('#pagination-demo-bottom [jp-role="next"]', 'class', 'disabled')
  }
}
