const path = require("path");

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
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
        #查询所有服务
        allContentfulService {
            nodes {
            id
            key
            title
            catalog {
                key
            }
            }
        }
        # 查询资源类别（排除solution）
        allContentfulAboutContent(filter: {key: {ne: "solution"}}) {
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
                title
                key
            }
            }
        }
    }
    `);

    const catalogs = result.data.allContentfulBaseCatalog.nodes[0].base_catalog; //获取所有产品目录
    const products = result.data.allContentfulProduct.nodes;     //获取所有产品
    const postsPerPage = 9;  //每页记录条数
    const postsPerPage_app = 99;  //每页记录条数(为产品页面而单独设定)
    const numberOfPages = Math.ceil(products.length / 2 / postsPerPage_app); //计算所有产品总记录条数（由于有中英文两种数据，在计算时除2）

    //根据产品目录检索产品并分页
    catalogs.forEach((catalog, index) => {
        if (catalog.base_catalog != null) {
            catalog.base_catalog.forEach((subCatalog) => {
                const nums = subCatalog.product == null ? 0 : subCatalog.product.length;
                const numberOfPages = subCatalog.product == null ? 0 : Math.ceil(subCatalog.product.length / postsPerPage_app);

                if (numberOfPages == 0) {
                    const currentPage = 1
                    const rootPage = `apps/${subCatalog.key}`;
                    createPage({
                        path: `apps/${subCatalog.key}`,
                        component: path.resolve('./src/templates/app-catalog/index.jsx'),
                        context: {
                            catalog: subCatalog.key,
                            limit: postsPerPage_app,
                            skip: 0,
                            currentPage,
                            numberOfPages,
                            rootPage,
                        },
                    })
                }

                Array.from({ length: numberOfPages }).forEach((_, subCataLogIndex) => {
                    const isFirstPage = subCataLogIndex === 0;
                    const currentPage = subCataLogIndex + 1;
                    const rootPage = `/apps/${subCatalog.key}`;

                    createPage({
                        path: isFirstPage ? `apps/${subCatalog.key}` : `apps/${subCatalog.key}/${currentPage}`,
                        component: path.resolve('./src/templates/app-catalog/index.jsx'),
                        context: {
                            catalog: subCatalog.key,
                            limit: postsPerPage_app,
                            skip: subCataLogIndex * postsPerPage_app,
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
            path: isFirstPage ? "apps" : `apps/page/${currentPage}`,
            component: path.resolve('./src/templates/app-center/index.jsx'),
            context: {
                limit: postsPerPage_app,
                skip: index * postsPerPage_app,
                currentPage,
                numberOfPages,
            },
        });
    });

    const resourceTypes = result.data.allContentfulAboutContent.nodes;     //获取所有资源类别（排除了solution,解决方案用单独页面，不用模板生成）

    //根据资源分类检索资源并分页
    resourceTypes.forEach((type, index) => {
        const nums = type.resource == null ? 0 : type.resource.length;  //计算每个类别下的资源数
        const numberOfPages = Math.ceil(nums / postsPerPage);  //计算总页数

        if (numberOfPages == 0) {
            const currentPage = 1
            const rootPage = `/${type.key}`;
            createPage({
                path: `${type.key}`,
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

        Array.from({ length: numberOfPages }).forEach((_, subIndex) => {
            const isFirstPage = subIndex === 0;
            const currentPage = subIndex + 1;
            const rootPage = `/${type.key}`;

            createPage({
                path: isFirstPage ? `${type.key}` : `${type.key}/${currentPage}`,
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
    products.forEach((product) => {
        createPage({
            path: `apps/${product.key}`,
            component: path.resolve('./src/templates/app-detail/index.jsx'),
            context: {
                slug: product.key
            }
        })
    })

    const resourceData = result.data.allContentfulResource.nodes; //获取所有资源(排除solution)
    const resourceTypesNumberOfPages = Math.ceil(resourceData.length / 2 / postsPerPage); //计算所有资源总记录条数（由于有中英文两种数据，在计算时除2） 

    // 根据模板创建资源详情页
    resourceData.forEach((resource) => {
        if (resource.type.key == "solution") {
            createPage({
                path: `${resource.type.key}/${resource.slug}`,
                component: path.resolve('./src/templates/solution-detail/index.jsx'),
                context: {
                    slug: resource.slug
                }
            })
        }
        else {
            createPage({
                path: `${resource.type.key}/${resource.slug}`,
                component: path.resolve('./src/templates/resource-detail/index.jsx'),
                context: {
                    slug: resource.slug
                }
            })
        }
    })

    //根据模板创建服务详情页
    let servicesData = result.data.allContentfulService.nodes; //获取所有服务

    servicesData.forEach((service) => {
        createPage({
            path: `/services/${service.catalog[0].key}/${service.key}`,
            component: path.resolve('./src/templates/service-detail/index.jsx'),
            context: {
                slug: service.key
            }
        })
    })

    servicesData.forEach((service) => {
        createPage({
            path: `/demand/${service.title}`,
            component: path.resolve('./src/templates/service-demand/index.jsx'),
            context: {
                slug: service.title
            }
        })
    })

}