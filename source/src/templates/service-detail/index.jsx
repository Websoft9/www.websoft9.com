import React from "react";
import {graphql }  from  'gatsby';
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-02";
import Footer from "@layout/footer/layout-02";
import CtaArea from "@containers/cta/layout-04";
import ServiceDetailArea from "@containers/cta/layout-07";

const ServiceDetailTemplate = ({pageContext,location,data }) => {
    const { currentPage, numberOfPages,rootPage } = pageContext;

    return (
        <Layout location={location}>
            {/* <Seo title={data.contentfulResource.title} description={data.contentfulResource.description?.description} keywords={data.contentfulResource.tags}/> */}
            <Header />
        
            <main className="site-wrapper-reveal">

                {/* <ResourceDetailArea data={ data.contentfulResource} relatedReading={data.allContentfulResource.nodes} />  */}
                
            </main>
        
        <Footer />
        </Layout>
    );
};
//
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
        
        #查询“更多方案”
        allContentfulResource(
            filter: {node_locale: {eq: $language}, type: {key: {eq: "solution"}}, slug: {ne: $slug}}
            limit: 4
        ) {
            nodes {
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
`;

export default ServiceDetailTemplate;