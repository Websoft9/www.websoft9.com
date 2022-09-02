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
            key
            title
            base_catalog {
                id
                key
                title
                product {
                    id
                }
            }
            product {
                id
            }
            }        
        }
    }
    `);

    const catalogs = result.data.allContentfulBaseCatalog.nodes; //获取所有产品目录
    const products = result.data.allContentfulProduct.nodes;     //获取所有产品
    const postsPerPage = 6;  //每页记录条数
    const numberOfPages = Math.ceil(products.length / 2 / postsPerPage); //计算所有产品总记录条数（由于有中英文两种数据，在计算时除2）

    //根据产品目录检索产品并分页
    catalogs.forEach((catalog, index) => {
        if(catalog.base_catalog !=null){        
            catalog.base_catalog.forEach((subCatalog)=>{
                const nums  = subCatalog.product==null?0:subCatalog.product.length;
                const numberOfPages = subCatalog.product==null ? 0 : Math.ceil(subCatalog.product.length / postsPerPage);

                if(numberOfPages==0){
                    const currentPage = 1
                    const rootPage =`app-catalog/${subCatalog.key}`;
                    createPage({
                        path:`app-catalog/${subCatalog.key}`,
                        component: path.resolve('./src/templates/app-catalog/index.jsx'),
                        context: {
                            catalog: subCatalog.key,
                            limit: postsPerPage,
                            skip: 0,
                            currentPage,
                            numberOfPages,
                            rootPage,
                        },
                    })
                }

                Array.from({ length: numberOfPages }).forEach((_, subCataLogIndex)=>{
                    const isFirstPage = subCataLogIndex === 0;               
                    const currentPage = subCataLogIndex + 1;
                    const rootPage = `/app-catalog/${subCatalog.key}`;

                    createPage({
                        path: isFirstPage ? `app-catalog/${subCatalog.key}`:`app-catalog/${subCatalog.key}/${currentPage}`,
                        component: path.resolve('./src/templates/app-catalog/index.jsx'),
                        context: {
                            catalog: subCatalog.key,
                            limit: postsPerPage,
                            skip: subCataLogIndex * postsPerPage,
                            currentPage,
                            numberOfPages,
                            rootPage,
                        },
                    })
                })
            })
        }
        else{           
            const numberOfPages =catalog.product==null ? 0: Math.ceil(catalog.product.length / postsPerPage);

            if(numberOfPages==0){
                const currentPage = 1
                const rootPage =`app-catalog/${catalog.key}`;
                createPage({
                    path:`app-catalog/${catalog.key}`,
                    component: path.resolve('./src/templates/app-catalog/index.jsx'),
                    context: {
                        catalog: catalog.key,
                        limit: postsPerPage,
                        skip: 0,
                        currentPage,
                        numberOfPages,
                        rootPage,
                    },
                })
            }
            
            Array.from({ length: numberOfPages }).forEach((_, cataLogIndex)=>{
                const isFirstPage = cataLogIndex === 0;
                const currentPage = cataLogIndex + 1;
                const rootPage = `/app-catalog/${catalog.key}`;
                createPage({
                    path: isFirstPage ? `app-catalog/${catalog.key}`:`app-catalog/${catalog.key}/${currentPage}`,
                    component: path.resolve('./src/templates/app-catalog/index.jsx'),
                    context: {
                        catalog: catalog.key,
                        limit: postsPerPage,
                        skip: cataLogIndex * postsPerPage,
                        currentPage,
                        numberOfPages,
                        rootPage,
                    },
                })
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