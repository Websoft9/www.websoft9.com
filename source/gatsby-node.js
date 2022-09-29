const path = require("path");
//const createSchemaCustomization = require("./src/gatsby-utils/createSchemaCustomization");
// const onCreateNode = require("./src/gatsby-utils/onCreateNode");
// const createResolvers = require("./src/gatsby-utils/createResolvers");
// const createPages = require("./src/gatsby-utils/createPages");

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
    // const oldConfig = getConfig();
    // const config = {
    //     ...oldConfig,
    //     output: {
    //         ...oldConfig.output,
    //         globalObject: "this",
    //     },
    // };

    // actions.replaceWebpackConfig(config);
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
        # 查询所有产品
        allContentfulProduct{
            nodes {
                id
                key
            }
        }
        # 查询产品目录
        allContentfulBaseCatalog(
            filter: {key: {eq: "product"}}
            sort: {fields: catalog___catalog___catalog___position, order: ASC}
        ) {
            nodes {
            base_catalog {
                id
                key
                title
                product {
                id
                }
                base_catalog {
                id
                key
                title
                product {
                    id
                }
                }
            }
            }
        }
        # 查询资源类别
        allContentfulAboutContent {
            nodes {
            id
            key
            title
            resource {
                id
            }
            }
        }
        #查询所有资源
        allContentfulResource {
            nodes {
            id
            slug
            type {
                key
            }
            }
        }
    }
    `);

    const catalogs = result.data.allContentfulBaseCatalog.nodes[0].base_catalog; //获取所有产品目录
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

    const resourceTypes = result.data.allContentfulAboutContent.nodes;     //获取所有资源类别

    //根据资源分类检索资源并分页
    resourceTypes.forEach((type,index)=>{
            const nums  = type.resource == null ? 0 : type.resource.length;  //计算每个类别下的资源数
            const numberOfPages = Math.ceil(nums / postsPerPage);  //计算总页数

            if(numberOfPages==0){
                const currentPage = 1
                const rootPage =`/${type.key}`;
                createPage({
                    path:`${type.key}`,
                    component: path.resolve('./src/templates/resource-type/index.jsx'),
                    context: {
                        resourceType: type.key,
                        limit: postsPerPage,
                        skip: 0,
                        currentPage,
                        numberOfPages,
                        rootPage,
                    },
                })
            }

            Array.from({ length: numberOfPages }).forEach((_, subIndex)=>{
                const isFirstPage = subIndex === 0;               
                const currentPage = subIndex + 1;
                const rootPage = `/${type.key}`;
    
                createPage({
                    path: isFirstPage ? `${type.key}`:`${type.key}/${currentPage}`,
                    component: path.resolve('./src/templates/resource-type/index.jsx'),
                    context: {
                        resourceType: type.key,
                        limit: postsPerPage,
                        skip: subIndex * postsPerPage,
                        currentPage,
                        numberOfPages,
                        rootPage,
                    },
                })
            })
        })



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

    const resourceData  = result.data.allContentfulResource.nodes; //获取所有资源
    const resourceTypesNumberOfPages = Math.ceil(resourceData.length / 2 / postsPerPage); //计算所有资源总记录条数（由于有中英文两种数据，在计算时除2） 

    //根据模板对全部资源进行分页
    // Array.from({ length: resourceTypesNumberOfPages }).forEach((_, index) => {
    //     const isFirstPage = index === 0;
    //     const currentPage = index + 1;
    //     createPage({
    //         path: isFirstPage ? "resource-center" :`resource-center/page/${currentPage}`,
    //         component: path.resolve('./src/templates/resource-center/index.jsx'),
    //         context: {
    //             limit: postsPerPage,
    //             skip: index * postsPerPage,
    //             currentPage,
    //             resourceTypesNumberOfPages,
    //         },
    //     });
    // });

    // 根据模板创建资源详情页
    resourceData.forEach((resource)=>{
        if(resource.type.key == "solution"){
            createPage({
                path:`${resource.type.key}/${resource.slug}`,
                component:path.resolve('./src/templates/solution-detail/index.jsx'),
                context:{
                    slug:resource.slug
                }
            })
        }
        else
        {
            createPage({
                path:`${resource.type.key}/${resource.slug}`,
                component:path.resolve('./src/templates/resource-detail/index.jsx'),
                context:{
                    slug:resource.slug
                }
            })
        }
    })

    let soluationData  = result.data.allContentfulResource.nodes.filter(data=>data.type.key == "solution" ); //获取所有解决方案
    //根据模板创建解决方案详情页
    soluationData.forEach((soluation)=>{
        // createPage({
        //     path:`resource-center/resource/${resource.slug}`,
        //     component:path.resolve('./src/templates/resource-detail/index.jsx'),
        //     context:{
        //         slug:resource.slug
        //     }
        // })
    })

}