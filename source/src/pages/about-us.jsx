import Seo from "@components/seo";
import AboutArea from "@containers/about/layout-04";
import CultureArea from "@containers/elements/box-image/section-03";
import SectionTwo from "@containers/elements/box-large-image/section-04";
import CounterArea from "@containers/elements/counters/section-01";
import FullWideSlider from "@containers/elements/flexible-image-slider/full-wide-slider2";
import PageHeader from "@containers/page-header/layout-01";
import TimelineArea from "@containers/timeline/layout-01";
import Layout from "@layout";
import Footer from "@layout/footer/layout-02";
import Header from "@layout/header/layout-02";
import { graphql } from "gatsby";
import * as React from "react";

const AboutUsPage = ({ location, data }) => {
    return (
        <Layout location={location}>
            <Seo title={data.allContentfulPage.nodes[0].title} description={data.allContentfulPage.nodes[0]?.description?.description} keywords={data.allContentfulPage.nodes[0]?.tags}/>
            <Header />

            <main className="site-wrapper-reveal">
                <PageHeader data={data.allContentfulPage.nodes[0].content[0]} />

                <AboutArea data={data.allContentfulPage.nodes[0].content[1]} />

                <TimelineArea data={data.allContentfulPage.nodes[0].content[2]} />  

                <FullWideSlider data={data.allContentfulPage.nodes[0].content[3]} />

                <CultureArea data={data.allContentfulPage.nodes[0].content[4]} />

                <CounterArea data={data.allContentfulPage.nodes[0].content[5]} style={{ backgroundColor:"white"}}/>

                <SectionTwo data={data.allContentfulPage.nodes[0].content[6]} />

                <SectionTwo data={data.allContentfulPage.nodes[0].content[7]} />

            </main>
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query AboutUsQuery($language: String!) {
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
    
        #查询当前页面数据
        allContentfulPage(filter: {node_locale: {eq: $language}, key: {eq: "AboutUs"}}) {
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
                headings: title
                texts: subTitle
                image: backgourdImage
                features {
                ... on ContentfulBaseFeature {
                    id
                    title
                    subtitle
                    image
                    description {
                        description
                    }
                }
                }
            }
            }
        }
    }
`;

export default AboutUsPage;
