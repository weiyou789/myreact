const pkg = require('./package.json')
const fs = require('fs')

module.exports = {
  // https: true,
  port: 8019, // dev server port
  assetDirectory: pkg.version,
  // public static path for production, e.g., https://st.xxxx.com/
  publicPath: '//st.haiziwang.com/static/bd/',
  // https: {
  //   cert: fs.readFileSync("/Users/timwu/Desktop/charles-ssl-proxying-certificate.pem"),
  //   // key: fs.readFileSync("path-to-key-file.pem"),
  //   // cacert: fs.readFileSync("path-to-cacert-file.pem")
  // }
}
