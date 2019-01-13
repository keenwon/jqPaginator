'use strict'

const execa = require('execa')

const port = execa.sync('npx', ['get-port']).stdout
const server = execa('npx', ['webpack-dev-server', '--port', port])
const test = execa('npx', ['nightwatch', '--env', 'chrome'], {
  stdio: 'inherit',
  env: Object.assign({}, process.env, {
    PORT: port
  })
})

test.on('exit', function (code) {
  server.kill('SIGKILL')
  process.exit(code)
})
