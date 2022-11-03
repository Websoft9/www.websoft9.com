import Seo from "@components/seo";
import ProductDetailArea from "@containers/cta/layout-03";
import Layout from "@layout";
import Footer from "@layout/footer/layout-02";
import Header from "@layout/header/layout-02";
import { graphql } from 'gatsby';
import React from "react";

const AppDetailTemplate = ({ location,data }) => {
    return (
        <Layout location={location}>
            <Seo title={data.allContentfulProduct.nodes[0]?.trademark} description={data.allContentfulProduct.nodes[0]?.summary} keywords={data.allContentfulProduct.nodes[0]?.keywords}/>
            <Header />
        
        <main className="site-wrapper-reveal">

            <ProductDetailArea data={ data.allContentfulProduct.nodes[0] } resourceData={data.allContentfulResource.nodes }  />

        </main>
        <Footer />
        </Layout>
    );
};

export const query = graphql`
    query AppDetailQuery($language: String!,$slug:String!) {
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
        #根据产品key查询相关学习资源
        allContentfulResource(
            filter: {node_locale: {eq: $language}, product: {elemMatch: {key: {eq: $slug}}}}
            limit: 3
        ) {
            nodes {
            type {
                id
                key
                title
            }
            id
            title
            subTitle
            image:featureImage
            slug
            }
        }
        #查询产品详情
        allContentfulProduct(filter: {node_locale: {eq: $language}, key: {eq: $slug}}) {
            nodes {
                id
                key
                title
                trademark
                review
                summary
                keywords
                image: logo {
                    imageurl
                }
                type: catalog {
                    id
                    key
                    title
                    product {
                        id
                        key
                        trademark
                        summary
                        image:logo {
                            imageurl
                        }
                    }
                }
                screenshots{
                    id
                    key
                    value
                }
                os
                supportLanguage
                program {
                    id
                    name
                }
                userType {
                    id
                    title
                }
                solution {
                    id
                    title
                    slug
                    type {
                        id
                        key
                        title
                    }
                }
                license {   
                    id     
                    key
                }
                websiteurl
                overview {
                    overview
                }
                highlights
                description {
                    childMarkdownRemark {
                        html
                    }
                }
                faq {
                    key
                    value
                    id
                }
                component {
                    trademark
                    key
                }
            }
        }
    }
`;

export default AppDetailTemplate;
