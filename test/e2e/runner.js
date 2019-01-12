'use strict'

const execa = require('execa')

const server = execa('npx', ['webpack-dev-server'])
const test = execa('npx', ['nightwatch', '--env', 'chrome'], {
  stdio: 'inherit'
})

test.on('exit', function (code) {
  server.kill('SIGKILL')
  process.exit(code)
})
