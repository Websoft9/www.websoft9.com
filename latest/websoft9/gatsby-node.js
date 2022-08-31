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
        # allContentfulProduct(
        #         sort: {fields: catalog___catalog___product___hot, order: DESC}
        #     ) {
        #         edges {
        #         node {
        #             id
        #             title
        #             description: summary
        #             logo {
        #             imageurl
        #             }
        #         }
        #         }
        #     }
        allContentfulProduct{
            nodes {
                id
                key
            }
        }
        allContentfulBaseCatalog(
            filter: {top: {eq: false}}
        ) {
            nodes {
            id
            title
            key
            product {
                key
            }
            base_catalog {
                id
                key
                title
                product {
                    key
                }
            }
            }
        }
    }
    `);

    const catalogs = result.data.allContentfulBaseCatalog.nodes;
    const products = result.data.allContentfulProduct.nodes;
    const postsPerPage = 6;
    const numberOfPages = Math.ceil(products.length / 2 / postsPerPage);

    catalogs.forEach((catalog, index) => {
        const isFirstPage = index === 0;
        const currentPage = index + 1;

        if(catalog.base_catalog !=null){
            catalog.base_catalog.forEach((subCatalog)=>{
                const numberOfPages = catalog.base_catalog.product==null ? 0 : Math.ceil(catalog.base_catalog.product.length / 2 / postsPerPage);
                createPage({
                    path: isFirstPage ? `app-catalog/${subCatalog.key}`:`app-catalog/${subCatalog.key}/${currentPage}`,
                    component: path.resolve('./src/templates/app-catalog/index.jsx'),
                    context: {
                        catalog: subCatalog.key,
                        limit: postsPerPage,
                        skip: index * postsPerPage,
                        currentPage,
                        numberOfPages,
                    },
                })
            })
        }
        else{
            const numberOfPages =catalog.product==null ? 0: Math.ceil(catalog.product.length / 2 / postsPerPage);
            createPage({
                path: isFirstPage ? `app-catalog/${catalog.key}`:`app-catalog/${catalog.key}/${currentPage}`,
                component: path.resolve('./src/templates/app-catalog/index.jsx'),
                context: {
                    catalog: catalog.key,
                    limit: postsPerPage,
                    skip: index * postsPerPage,
                    currentPage,
                    numberOfPages,
                },
            })
        }
    })

    //根据模板对全部产品进行分页
    Array.from({ length: numberOfPages }).forEach((_, index) => {
        const isFirstPage = index === 0;
        const currentPage = index + 1;
        //if (isFirstPage) return;
        createPage({
            path: isFirstPage ? "app-center" :`app-center/page/${currentPage}`,
            component: path.resolve('./src/templates/app-center/index.jsx'),
            context: {
                limit: postsPerPage,
                skip: index * postsPerPage,
                currentPage,
                numberOfPages,
            },
        });
    });

    // 根据模板创建产品详情页
    products.forEach((product)=>{
        createPage({
            path:`app-center/product/${product.key}`,
            component:path.resolve('./src/templates/app-detail/index.jsx'),
            context:{
                slug:product.key
            }
        })
    })

    
}