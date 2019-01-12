'use strict'

var jquery = require.resolve('jquery')

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['jasmine'],
    files: [jquery, './src/jq-paginator.js', './test/unit/**/*.js'],
    reporters: ['mocha', 'coverage'],
    preprocessors: {
      'src/**/*.js': ['coverage']
    },
    coverageReporter: {
      reporters: [
        { type: 'html', dir: 'coverage/' },
        { type: 'lcovonly', subdir: '.' },
        { type: 'json', subdir: '.' }
      ]
    }
  })
}
