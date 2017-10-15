import buble from "rollup-plugin-buble"
import resolve from "rollup-plugin-node-resolve"
import uglify from "rollup-plugin-uglify"
import scss from 'rollup-plugin-scss'

export default {
  plugins: [
    buble({
      jsx: "h",
      include: ["src/**.js"]
    }),
    resolve({
      jsnext: true
    }),
    uglify(),
    scss({
      include: ["src/scss/*.scss", "src/scss/*.css"],
      output: "docs/css/bundle.css"
    })
  ],
  output: {
    file: 'docs/js/bundle.js',
    format: 'iife'
  },
  input: 'src/index.js'
}