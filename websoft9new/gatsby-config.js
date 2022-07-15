module.exports = {
  siteMetadata: {
    title: `Websoft9.new`,
    siteUrl: `https://www.websoft9.com`,
    titleTemplate: `Websoft9`,
    image: "landing.png",
    copyright:
      "Websoft9 Inc.",
    siteLanguage: "en-US",
    contact: {
      phone: "0731-89572759、82183159",
      address: "湖南省.长沙市.岳麓区.潇湘中路283号岳麓科创港 A2",
      email: "help@websoft9.com",
      website: "https://www.websoft9.com/",
      rating: "4.9",
      customers: "700",
      clients: "3200",
  },
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "BZz6LDz-PeMhqiWhd9zElh1lKz-TxZC5Gdk-oB1JdOA",
      "spaceId": "ffrhttfighww"
    }
  }, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: "Websoft9",
      short_name: "Websoft9",
      theme_color: "#086ad8",
      background_color: "#ffffff",
      display: "standalone",
      scope: "/",
      start_url: "/",
      icon: "src/assets/images/favicon.png",
      icons: [
          {
              src: "/icons/icon-72x72.png",
              sizes: "72x72",
              type: "image/png",
          },
          {
              src: "/icons/icon-96x96.png",
              sizes: "96x96",
              type: "image/png",
          },
          {
              src: "/icons/icon-128x128.png",
              sizes: "128x128",
              type: "image/png",
          },
          {
              src: "/icons/icon-144x144.png",
              sizes: "144x144",
              type: "image/png",
          },
          {
              src: "/icons/icon-152x152.png",
              sizes: "152x152",
              type: "image/png",
          },
          {
              src: "/icons/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
          },
          {
              src: "/icons/icon-384x384.png",
              sizes: "384x384",
              type: "image/png",
          },
          {
              src: "/icons/icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
          },
      ],
    }
  },
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-image`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-styled-components`,
  "gatsby-transformer-json",
  {
    resolve: `gatsby-transformer-remark`,
    options: {
        excerpt_separator: `<!-- endexcerpt -->`,
        plugins: [
            {
                resolve: `gatsby-remark-images`,
                options: {
                    maxWidth: 1200,
                },
            },
        ],
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
        name: `fonts`,
        path: `${__dirname}/src/assets/fonts`,
        ignore: [`**/\.*`],
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
        ignore: [`**/\.*`],
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
        name: `data`,
        path: `${__dirname}/src/data`,
        ignore: [`**/\.*`],
    },
  },
  {
    resolve: `gatsby-plugin-breadcrumb`,
    options: {
        useAutoGen: true,
        autoGenHomeLabel: `Home`,
        exclude: [`/dev-404-page`, `/404`, `/404.html`],
        useClassNames: true,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/locales`,
      name: `locale`
    }
  },
  {
    resolve: `gatsby-plugin-react-i18next`,
    options: {
      localeJsonSourceName: `locale`,
      languages: [`en-US`, `zh-CN`],
      defaultLanguage: `en-US`,
      siteUrl: `http://localhost:8000/`,
      i18nextOptions: {
        interpolation: {
          escapeValue: false 
        },
        keySeparator: false,
        nsSeparator: false
      },
      pages: [
        {
          matchPath: '/:lang?/blog/:uid',
          getLanguageFromPath: true,
          excludeLanguages: ['es']
        },
        {
          matchPath: '/preview',
          languages: ['en']
        }
      ]
    }
  },
  "gatsby-plugin-offline",
  ]
};