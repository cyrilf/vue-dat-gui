const fs = require('fs')
const path = require('path')

const FILES = [
  { from: '../public/index.html', to: '../dist/index.html' },
  { from: '../public/favicon.ico', to: '../dist/favicon.ico' },
]

FILES.map(
  file => fs.copyFileSync(path.resolve(__dirname, file.from), path.resolve(__dirname, file.to)),
)
// eslint-disable-next-line no-console
console.log('Demo files copied.')
