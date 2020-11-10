// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  icon: {
    favicon: 'src/favicon.png',
    touchicon: 'src/favicon.png'
  },
  siteName: '网久软件',
  siteDescription: '长沙网久软件有限公司（Websoft9）是专业的云镜像部署和服务提供商，致力在云端简化Web应用软件的安装和部署，业已对国内外200+个高质量的应用软件、建站软件、基础软件和开发者工具进行了整理、归类、性能优化，并以一键式镜像安装包的方式发布到阿里云、腾讯云、百度云、华为企业云等，任何客户可以通过弹性的方式一键获取、快速安装。',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
      },
    },

    {
      use: '@gridsome/source-ghost',
      options: {
        typeName: 'Ghost',
        baseUrl: 'http://blog.websoft9.com',
        contentKey: 'd88d3cba606d8a2c5411ff2728',
        version: 'v3' // default
      }
    }
  ],

  templates: {
    GhostPost: '/:year/:month/:day/:slug',
    GhostTag: '/tag/:slug'
  },
}