'use strict'

module.exports = {
  src_folders: ['test/e2e/spec'],
  output_folder: false,

  webdriver: {
    start_process: true,
    log_path: false
  },

  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: false,
        path: './test/e2e/screenshots'
      }
    },

    chrome: {
      launch_url: `http://localhost:${process.env.PORT}/`,
      webdriver: {
        server_path: 'node_modules/.bin/chromedriver',
        port: 9515
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}
