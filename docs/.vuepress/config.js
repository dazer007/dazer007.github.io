const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: "vdoing",
  title: "Dazer007-Blog",
  description: 'Dazer007-Blog 官方文档',
  base: "/",
  markdown: {
    lineNumbers: true
  },
  head,
  themeConfig,
  plugins
}
