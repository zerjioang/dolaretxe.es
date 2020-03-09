// Add these
const PrerenderSPAPlugin = require('prerender-spa-plugin')
// Renders headlessly in a downloaded version of Chromium through puppeteer
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 6,
          compress: { drop_console: true },
          output: { comments: false, beautify: false }
        },
      }),
    ],
  },
  plugins: [
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, 'dist'),
      // Required - Routes to render.
      routes: [
      '/',
      '/es',
      '/eus',
      ], // List of routes to prerender.
      renderer: new PuppeteerRenderer()
    })
  ]
};