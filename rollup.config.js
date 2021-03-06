const {
  terser
} = require('rollup-plugin-terser')
const {
  nodeResolve
} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const vue = require('rollup-plugin-vue')

export default [{
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      plugins: [
        terser({
          compress: {
            drop_console: true
          },
          output: {
            comments: false
          },
          ecma: 2019
        })
      ]
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      plugins: [
        terser({
          compress: {
            drop_console: true
          },
          output: {
            comments: false
          },
          ecma: 2019
        })
      ]
    }
  ],
  plugins: [
    commonjs({
      include: ['./src/**', 'node_modules/**']
    }),
    vue({
      compileTemplate: true
    }),
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true
    })

  ]
}]
