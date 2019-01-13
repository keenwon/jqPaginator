'use strict'

/**
 * 测试上一页、首页功能
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
      .click('#demo1 [jp-role="last"] a')
      .click('#demo1 [jp-role="prev"] a')
      .assert.containsText('#demo1-text', '99')
      .click('#demo1 [jp-role="prev"] a')
      .assert.containsText('#demo1-text', '98')
      .click('#demo1 [jp-role="prev"] a')
      .assert.containsText('#demo1-text', '97')
      .click('#demo1 [jp-role="first"] a')
      .assert.containsText('#demo1-text', '1')
      .assert.attributeContains('#demo1 [jp-role="first"]', 'class', 'disabled')
      .assert.attributeContains('#demo1 [jp-role="prev"]', 'class', 'disabled')
  },

  demo2: function (browser) {
    browser
      .click('#demo2 [jp-role="last"] a')
      .click('#demo2 [jp-role="prev"] a')
      .assert.containsText('#demo2-text', '99')
      .click('#demo2 [jp-role="prev"] a')
      .assert.containsText('#demo2-text', '98')
      .click('#demo2 [jp-role="prev"] a')
      .assert.containsText('#demo2-text', '97')
      .click('#demo2 [jp-role="first"] a')
      .assert.containsText('#demo2-text', '1')
      .assert.attributeContains('#demo2 [jp-role="first"]', 'class', 'disabled')
      .assert.attributeContains('#demo2 [jp-role="prev"]', 'class', 'disabled')
  },

  demo3: function (browser) {
    browser
      .click('#demo3 [jp-data="10"]')
      .click('#demo3 [jp-role="prev"]')
      .assert.containsText('#demo3-text', '9')
      .click('#demo3 [jp-role="prev"]')
      .assert.containsText('#demo3-text', '8')
      .click('#demo3 [jp-role="prev"]')
      .assert.containsText('#demo3-text', '7')
  },

  demo4: function (browser) {
    browser
      .click('#demo4 [jp-role="next"] a')
      .assert.containsText('#demo4-text', '2')
      .click('#demo4 [jp-role="next"] a')
      .assert.containsText('#demo4-text', '3')
      .click('#demo4 [jp-role="next"] a')
      .assert.containsText('#demo4-text', '4')
      .click('#demo4 [jp-role="prev"] a')
      .assert.containsText('#demo4-text', '3')
      .click('#demo4 [jp-role="prev"] a')
      .assert.containsText('#demo4-text', '2')
      .click('#demo4 [jp-role="prev"] a')
      .assert.containsText('#demo4-text', '1')
  },

  'pagination-demo': function (browser) {
    browser
      .click('#pagination-demo-top [jp-role="last"] a')
      .click('#pagination-demo-top [jp-role="prev"] a')
      .assert.containsText('#pagination-demo-text', '99')
      .assert.attributeContains('#pagination-demo-bottom [jp-data="99"]', 'class', 'active')
      .click('#pagination-demo-top [jp-role="prev"] a')
      .assert.containsText('#pagination-demo-text', '98')
      .assert.attributeContains('#pagination-demo-bottom [jp-data="98"]', 'class', 'active')
      .click('#pagination-demo-top [jp-role="prev"] a')
      .assert.containsText('#pagination-demo-text', '97')
      .assert.attributeContains('#pagination-demo-bottom [jp-data="97"]', 'class', 'active')
      .click('#pagination-demo-top [jp-role="first"] a')
      .assert.attributeContains('#pagination-demo-bottom [jp-role="first"]', 'class', 'disabled')
      .assert.attributeContains('#pagination-demo-bottom [jp-role="prev"]', 'class', 'disabled')
  }
}
