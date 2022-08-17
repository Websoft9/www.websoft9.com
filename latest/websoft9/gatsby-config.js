module.exports = {
    siteMetadata: {
      title: `Websoft9`,
      siteUrl: `https://www.websoft9.com`,
      author:`Websoft9`,
      image: `landing.png`,
      copyright:`Websoft9 Inc.`,
      titleTemplate: `Websoft9`,
      getform:`Websoft9`,
      siteLanguage: "en-US",
      description: `为用户提供简单的云原生应用，帮助软件开发商构建基于全球云计算的在线商业体系`,
      socials: [
        {
            id: 1,
            icon: "fab fa-facebook-f",
            link: "https://www.facebook.com",
            title: "Facebook",
        },
        {
            id: 2,
            icon: "fab fa-twitter",
            link: "https://www.twitter.com",
            title: "Twitter",
        },
        {
            id: 3,
            icon: "fab fa-instagram",
            link: "https://www.instagram.com",
            title: "Instagram",
        },
        {
            id: 4,
            icon: "fab fa-linkedin",
            link: "https://www.linkedin.com",
            title: "Linkedin",
        },
    ],
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