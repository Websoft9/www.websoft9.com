/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    flags: {
        QUERY_ON_DEMAND: true,
        LMDB_STORE: false,
        PARALLEL_QUERY_RUNNING: false,
    },
    pathPrefix: `/`,
    siteMetadata: {
        title: "Websoft9",
        titleTemplate: `Mitech`,
        description: `Mitech is a Powerful & flexible Technology And Digital Software Gatsby Template. 06 Stunning Homepages are included in this template. You can use any template or mix content from different home pages for your website.`,
        author: `@HasThemes`,
        image: "landing.png",
        siteUrl: "https://mitech.gatsbydemo.hasthemes.com/",
        canonical: "https://mitech.gatsbydemo.hasthemes.com/",
        getform: "https://getform.io/f/22b43bd4-29a7-4795-ba95-6abfe8bf1f39",
        copyright:
            "Mitech. <a href='https://example.com/' target='_blank' rel='noopener noreferrer'>All Rights Reserved.</a>",
        siteLanguage: "en",
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
        contact: {
            phone: "190068668",
            address: "58 Howard Street #2 San Francisco, CA 941",
            email: "hello@mitech.com",
            website: "https://example.com/",
            rating: "4.9",
            customers: "700",
            clients: "3200",
        },
    },
    // mapping: {
    // 	"MarkdownRemark.frontmatter.author": `AuthorsJson.name`,
    // },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        "gatsby-transformer-json",
        // "gatsby-plugin-preload-fonts",
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
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/locales`,
              name: `locale`
            }
        },
        {
            resolve: `gatsby-plugin-react-i18next`,
            options: {
              localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
              languages: [`en-US`, `zh-CN`],
              defaultLanguage: `en-US`,
              // if you are using Helmet, you must include siteUrl, and make sure you add http:https
              siteUrl: `http://localhost:8000`,
              // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
              trailingSlash: 'always',
              // you can pass any i18next options
              i18nextOptions: {
                interpolation: {
                  escapeValue: false // not needed for react as it escapes by default
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
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Mitech",
                short_name: "mitech",
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
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: `ffrhttfighww`,
              accessToken: `BZz6LDz-PeMhqiWhd9zElh1lKz-TxZC5Gdk-oB1JdOA`,
            },
          },
        "gatsby-plugin-offline",
    ],
};
