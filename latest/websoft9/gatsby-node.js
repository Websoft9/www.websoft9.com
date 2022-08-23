const path = require("path");
//const createSchemaCustomization = require("./src/gatsby-utils/createSchemaCustomization");
// const onCreateNode = require("./src/gatsby-utils/onCreateNode");
// const createResolvers = require("./src/gatsby-utils/createResolvers");
// const createPages = require("./src/gatsby-utils/createPages");

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
    const oldConfig = getConfig();
    const config = {
        ...oldConfig,
        output: {
            ...oldConfig.output,
            globalObject: "this",
        },
    };

    actions.replaceWebpackConfig(config);
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@styled": path.resolve(__dirname, "./src/styled"),
                "@components": path.resolve(__dirname, "./src/components"),
                "@ui": path.resolve(__dirname, "./src/components/ui"),
                "@containers": path.resolve(__dirname, "./src/containers"),
                "@layout": path.resolve(__dirname, "./src/layouts"),
                "@assets": path.resolve(__dirname, "./src/assets"),
                "@utils": path.resolve(__dirname, "./src/utils"),
                "@hooks": path.resolve(__dirname, "./src/hooks"),
                "@constants": path.resolve(__dirname, "./src/constants"),
            },
        },
        module: {
            rules: [
                {
                    test: /\.(graphql|gql)$/,
                    exclude: /node_modules/,
                    loader: "graphql-tag/loader",
                },
            ],
        },
    });
};

//exports.createSchemaCustomization = createSchemaCustomization;

// exports.onCreateNode = onCreateNode;

// exports.createResolvers = createResolvers;

//  exports.createPages = createPages;

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
    {
        allContentfulProduct(
                sort: {fields: catalog___catalog___product___hot, order: DESC}
            ) {
                edges {
                node {
                    id
                    title
                    description: summary
                    logo {
                    imageurl
                    }
                }
                }
            }
            allContentfulBaseCatalog(
                filter: {top: {eq: false}}
            ) {
                nodes {
                id
                title
                key
                base_catalog {
                    id
                    key
                    title
                }
                }
            }
    }
    `);


    const catalogs = result.data.allContentfulBaseCatalog.nodes

    catalogs.forEach((catalog, index) => {
        if(catalog.base_catalog !=null){
            catalog.base_catalog.forEach((subCatalog)=>{
                createPage({
                    path: `app-center/${subCatalog.key}`,
                    component: path.resolve('./src/templates/app-center/index.jsx'),
                    context: {
                        catalog: subCatalog.key,
                    },
                })
            })
        }
        else{
            createPage({
                path: `app-center/${catalog.key}`,
                component: path.resolve('./src/templates/app-center/index.jsx'),
                context: {
                    catalog: catalog.key,
                },
            })
        }
    })
}