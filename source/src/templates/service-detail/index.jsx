import Seo from "@components/seo";
import ServiceDetailArea from "@containers/cta/layout-07";
import Layout from "@layout";
import Footer from "@layout/footer/layout-02";
import Header from "@layout/header/layout-02";
import { graphql } from 'gatsby';
import React from "react";

const ServiceDetailTemplate = ({pageContext,location,data }) => {
    const { currentPage, numberOfPages,rootPage } = pageContext;

    return (
        <Layout location={location}>
            <Seo title={data.allContentfulService.title} description={data.allContentfulService.summary} /*keywords={data.allContentfulService.tags}*/ />
            <Header />
        
            <main className="site-wrapper-reveal">

                <ServiceDetailArea data={data.allContentfulService.nodes[0]} location={location}/>
                
            </main>
        
        <Footer />
        </Layout>
    );
};

export const query = graphql`
    query ServiceDetaiTemplateQuery($language: String!,$slug:String!) {
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
        #查询专业服务详情
        allContentfulService(filter: {node_locale: {eq: $language}, key: {eq: $slug}}) {
            nodes {
            id
            key
            title
            featureImage
            summary
            overview {
                overview
            }
            images
            task {
                id
                key
                value
            }
            values {
                id
                key
                value
            }
            cases {
                id
                title
                slug
                featureImage
                type {
                    key
                    title
                }
            }
            priceModel {
                id
                key
                name
            }
            BuyRemark {
                BuyRemark
            }
            pricing
            services{
                id
                key
                title
                summary
                featureImage
                catalog {
                    id
                    key
                    title
                }
            }
            products {
                id
                key
                image:logo{
					imageurl
                }
                trademark
                summary
            }
            catalog {
                key
                title
            }
            resources {
                id
                slug
                title
                featureImage
                type {
                id
                key
                title
                }
            }
            }
        }

    }
`;

export default ServiceDetailTemplate;