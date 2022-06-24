// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
     {
      use: '@gridsome/source-ghost',
      options: {
        typeName: 'Ghost',
        baseUrl: 'http://blog.websoft9.com',
        contentKey: 'd88d3cba606d8a2c5411ff2728',
        version: 'v3' // default
      }
    },
   {
      use: '@gridsome/source-contentful',
      options: {
        space: 'ffrhttfighww', // required
        accessToken: 'BZz6LDz-PeMhqiWhd9zElh1lKz-TxZC5Gdk-oB1JdOA', // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful',
        parameters:  {"locale": "zh-CN"}
      }
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'zh',
          'en',
        ],
        pathAliases: { // path segment alias for each locales
          'zh': 'zh',
          'en': 'en'
        },
        fallbackLocale: 'zh', // fallback language
        defaultLocale: 'zh', // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: true, // rewrite default locale, default: true
        messages: {
          'zh': require('./src/assets/lang/zh.json'), // Messages files
          'en': require('./src/assets/lang/en.json'),
        }
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options(全局设置转换器)
    }
  },
  templates: {
    // Product: "/:id",
    GhostPost: '/:year/:month/:day/:slug',
    GhostTag: '/tag/:slug'
  }
}
