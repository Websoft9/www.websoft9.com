import Seo from "@components/seo";
import CtaArea from "@containers/cta/layout-04";
import IdeaArea from "@containers/elements/box-image/section-04";
import FullWideSlider from "@containers/elements/flexible-image-slider/full-wide-slider2";
import TestimonialArea from "@containers/elements/testimonials/section-03";
import PageHeader from "@containers/page-header/layout-01";
import Layout from "@layout";
import Footer from "@layout/footer/layout-02";
import Header from "@layout/header/layout-02";
import { graphql } from "gatsby";
import * as React from "react";

const CareersPage = ({ location, data }) => {
    return (
        <Layout location={location}>
            <Seo title={data.allContentfulPage.nodes[0].title} description={data.allContentfulPage.nodes[0]?.description?.description} keywords={data.allContentfulPage.nodes[0]?.tags}/>
            <Header />

            <main className="site-wrapper-reveal">
                <PageHeader data={data.allContentfulPage.nodes[0].content[0]} />

                <IdeaArea data={data.allContentfulPage.nodes[0].content[1]} lgSize={6}/>

                <FullWideSlider data={data.allContentfulPage.nodes[0].content[2]}/> 

                <TestimonialArea data={data.allContentfulPage.nodes[0].content[3]}/>
                
                <IdeaArea data={data.allContentfulPage.nodes[0].content[4]} lgSize={4}/>

                <CtaArea data={data.allContentfulPage.nodes[0].content[5]}  /> 
            </main>

            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query CareersQuery($language: String!) {
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
        allContentfulPage(filter: {node_locale: {eq: $language}, key: {eq: "Careers"}}) {
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
                buttons {
                        id
                        content: key
                        path: value
                    }
                features {
                ... on ContentfulBaseFeature {
                    id
                    title
                    subtitle
                    image
                    icon
                    description {
                        description
                    }
                }
                ... on ContentfulBasePerson {
                    id
                    title
                    type
                    fullName
                    pictureUrl
                    reviews
                }
                }
            }
            }
        }
    }
`;

export default CareersPage;
