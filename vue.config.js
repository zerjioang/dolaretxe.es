const path = require('path');
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/dolaretxe.es',
  outputDir: 'dist',
  runtimeCompiler: true,
  productionSourceMap: false,
  integrity: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization = {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            sourceMap: false,
            cache: true,
            parallel: true,
            terserOptions: {
              extractComments: 'all',
              ecma: undefined,
              warnings: true,
              parse: {},
              compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
              },
              mangle: true, // Note `mangle.properties` is `false` by default.
              module: false,
              output: {
                // Eliminate comments
                comments: false
              },
              toplevel: false,
              nameCache: null,
              ie8: false,
              keep_classnames: undefined,
              keep_fnames: false,
              safari10: true,
            },
          }),
        ],
      }
    } else {
      // mutate for development...
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
    config.resolve.alias.set('~', path.resolve(__dirname, 'node_modules'));
  },
  pwa: {
    name: 'Dolaretxe Haurreskola',
    themeColor: '#E57B21',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      favicon32: 'favicon/favicon-32x32.png',
      favicon16: 'favicon/favicon-16x16.png',
      appleTouchIcon: 'favicon/apple-touch-icon-180x180.png',
      maskIcon: 'favicon/safari-pinned-tab.svg',
      msTileImage: 'favicon/msapplication-icon-144x144.png',
    },
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      // ...other Workbox options..
      exclude: [
        /index\.html$/,
      ]
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'es',
      localeDir: 'locales',
      enableInSFC: true
    },
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/es',
        '/eus',
        '/es/escuela',
        '/eus/escuela',
        '/escuela/escuela.php',
        '/es/fotos',
        '/eus/fotos',
        '/visita',
        '/es/galeria',
        '/eus/galeria',
        '/es/unicef',
        '/eus/unicef',
        '/es/visitavirtual',
        '/eus/visitavirtual',
        '/es/jornadas',
        '/eus/jornadas',
        '/jornadas/jornadas.php',
        '/es/actividades',
        '/eus/actividades',
        '/actividades/actividades.php',
        '/es/contacto',
        '/eus/contacto',
        '/contacto/contacto.php',
        '/es/legal/aviso',
        '/eus/legal/aviso',
        '/avisolegal/avisolegal.php',
        '/es/legal/cookies',
        '/eus/legal/cookies',
        '/es/legal/privacidad',
        '/eus/legal/privacidad',
        '/404',
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
      postProcess: route => {
        // Defer scripts and tell Vue it's been server rendered to trigger hydration
        route.html = route.html
          .replace(/<script (.*?)>/g, '<script $1 defer>')
          .replace('id="app"', 'id="app" data-server-rendered="true"');
        return route;
      }
    }
  }
}
