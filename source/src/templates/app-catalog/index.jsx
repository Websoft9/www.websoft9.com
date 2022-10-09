import React from "react";
import {graphql }  from  'gatsby';
import PropTypes from "prop-types";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-02";
import Footer from "@layout/footer/layout-02";
import CtaArea from "@containers/cta/layout-04";
import ListArea from "@containers/elements/lists/section-01"
import HeroArea from "@containers/hero/layout-01";

const AppCatalogTemplate = ({pageContext,location,data }) => {
    const { currentPage, numberOfPages,rootPage } = pageContext;

    return (
        <Layout location={location}>
            <Seo title={data.allContentfulPage.nodes[0].title} description={data.allContentfulPage.nodes[0]?.description?.description} keywords={data.allContentfulPage.nodes[0]?.tags}/>
            <Header />
        
        <main className="site-wrapper-reveal">
            <HeroArea data={data.allContentfulPage.nodes[0].content[0]} />
            
            <ListArea 
                cataLogData={data.allContentfulBaseCatalog.nodes[0].base_catalog}
                productsData={data.allContentfulProduct.nodes}
                rootPage = {rootPage}
                currentPage = {currentPage}
                numberOfPages={numberOfPages}
            />

            <CtaArea data={ data.allContentfulPage.nodes[0].content[1] } />
        </main>
        
        <Footer/>
        </Layout>
    );
};

export const query = graphql`
    query AppCatalogTemplateQuery($language: String!,$limit:Int!,$skip:Int!,$catalog: String!) {
        #多语言
        locales: allLocale(filter: {language: {eq: $language}}) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
        allContentfulBaseCatalog(
            filter: {node_locale: {eq: $language}, key: {eq: "product"}}
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
        allContentfulProduct(
            filter: {node_locale: {eq: $language}, catalog: {elemMatch: {key: {eq: $catalog}}}}
            limit: $limit
            skip: $skip
            sort: {fields: catalog___catalog___product___hot, order: DESC}
        ) {
            nodes {
                id
                key
                title
                trademark
                description: summary
                image: logo {
                    imageurl
                }
            }
        }
        #查询当前页面(功能页面：Features)
        allContentfulPage(filter: {node_locale: {eq: $language}, key: {eq: "AppCenter"}}) {
            nodes {
            title
            description {
                description
            }
            tags {
                id
                name
            }
            content {
                id
                headings:title
                texts:subTitle
                media
                buttons {
                    id
                    content:key
                    path:value
                }
                features {
                ... on ContentfulBaseFeature {
                    id
                    title
                    subtitle
                    icon
                    image
                }
                ... on ContentfulResource {
                        type {
                            title
                        }
                        id
                        title
                        subTitle
                        image: featureImage
                        slug
                    }
                }
            }
            }
        }
    }
`;

export default AppCatalogTemplate;
