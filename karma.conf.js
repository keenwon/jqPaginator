'use strict'

var jquery = require.resolve('jquery')

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['jasmine'],
    files: [jquery, './src/jq-paginator.js', './test/**/*.js']
  })
}
