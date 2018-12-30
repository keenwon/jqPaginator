import { terser } from 'rollup-plugin-terser'
import { version } from './package.json'

const banner = `/*!
 * jq-paginator v${version}
 * http://jqPaginator.keenwon.com
 */
`

module.exports = [
  {
    input: './src/jq-paginator.js',
    output: {
      file: './dist/jq-paginator.js',
      banner,
      format: 'iife'
    }
  },
  {
    input: './src/jq-paginator.js',
    plugins: [
      terser({
        output: {
          comments: /^!/
        }
      })
    ],
    output: {
      file: './dist/jq-paginator.min.js',
      banner,
      format: 'iife'
    }
  }
]
