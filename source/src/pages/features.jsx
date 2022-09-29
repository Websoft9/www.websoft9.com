import React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-02";
import Footer from "@layout/footer/layout-02";
import { graphql } from "gatsby";
import HeroArea from "@containers/hero/layout-01";
import HeroImageLeftArea from "@containers/hero/layout-04";
import HeroImageRightArea from "@containers/hero/layout-05";
import VerticalTabArea from "@containers/tab/layout-02";
import ITServicesArea from "@containers/it-service/layout-02";
import CtaArea from "@containers/cta/layout-04";
import SolutionArea from "@containers/elements/box-large-image/section-02";
import HeroImageArea from "@containers/hero/layout-06";

const FeaturesPage = ({ pageContext, location, data }) => {

    return (
        <Layout location={location}>
            <Seo title={data.allContentfulPage.nodes[0].title} />
            <Header />

            <main className="site-wrapper-reveal">
               
                <HeroArea data={data.allContentfulPage.nodes[0].content[0]} />
                <ITServicesArea data={ data.allContentfulPage.nodes[0].content[1] }/>

                <HeroImageRightArea data={ data.allContentfulPage.nodes[0].content[2] }/>
                <HeroImageLeftArea data={ data.allContentfulPage.nodes[0].content[3] }/>
                <HeroImageRightArea data={ data.allContentfulPage.nodes[0].content[4] }/>
                <HeroImageLeftArea data={ data.allContentfulPage.nodes[0].content[5] }/>
                <HeroImageRightArea data={ data.allContentfulPage.nodes[0].content[6] }/>
                <HeroImageLeftArea data={ data.allContentfulPage.nodes[0].content[7] }/>
                <HeroImageRightArea data={ data.allContentfulPage.nodes[0].content[8] }/>
                <HeroImageLeftArea data={ data.allContentfulPage.nodes[0].content[9] }/>
                <HeroImageRightArea data={ data.allContentfulPage.nodes[0].content[10] }/>

                <VerticalTabArea data={ data.allContentfulPage.nodes[0].content[11] }/>
                <CtaArea data={ data.allContentfulPage.nodes[0].content[12] } />
                <SolutionArea data ={ data.allContentfulPage.nodes[0].content[13] } />
            </main>
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query FeaturesPageQuery($language: String!) {
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
        #查询当前页面(功能页面：Features)
        allContentfulPage(filter: {node_locale: {eq: $language}, key: {eq: "Features"}}) {
            nodes {
            title
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
                            id
                            key
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

export default FeaturesPage;
