import * as React from "react";
import { graphql } from "gatsby";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-02";
import Footer from "@layout/footer/layout-02";
import HeroArea from "@containers/hero/layout-02";
import SubHeroArea from "@containers/hero/layout-03";
import PartnerArea from "@containers/partner/layout-02";
import ITServicesArea from "@containers/it-service/layout-02";
import TabArea from "@containers/tab/layout-01";
import VerticalTabArea from "@containers/tab/layout-02";
import CounterArea from "@containers/elements/counters/section-01";
import TestimonialArea from "@containers/elements/testimonials/section-01";
import CtaArea from "@containers/cta/layout-04";
import SolutionArea from "@containers/elements/box-large-image/section-02";

const IndexPage = ({ location, data }) => {
    return (
        <Layout location={location}>
            <Seo title={data.allContentfulPage.nodes[0].title} description={data.allContentfulPage.nodes[0].description.description} keywords={data.allContentfulPage.nodes[0].tags}/>
            <Header />

            <main className="site-wrapper-reveal">
                <HeroArea data={data.allContentfulPage.nodes[0].content[0]} />

                <TabArea data={data.allContentfulPage.nodes[0].content[1]}>
                    {
                        data.allContentfulPage.nodes[0].content[1].features.map((item)=>{
                            return(
                                <SubHeroArea key={item.id} data={ item }/>
                            )
                        })
                    }
                </TabArea>

                <SolutionArea data ={ data.allContentfulPage.nodes[0].content[2] } />           

                <PartnerArea data={ data.allContentfulPage.nodes[0].content[3] } />

                <ITServicesArea data={ data.allContentfulPage.nodes[0].content[4] }/>

                <VerticalTabArea data={ data.allContentfulPage.nodes[0].content[5] } />

                <CounterArea data={data.allContentfulPage.nodes[0].content[6]} />

                <TestimonialArea data={data.allContentfulPage.nodes[0].content[7]} />

                <SolutionArea data ={ data.allContentfulPage.nodes[0].content[8] } />

                <PartnerArea data={ data.allContentfulPage.nodes[0].content[9] } />

                <CtaArea data={ data.allContentfulPage.nodes[0].content[10] } />
                            
            </main>
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query IndexPageQuery($language: String!) {
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
        # 查询页面：index(首页)
        allContentfulPage(filter: {node_locale: {eq: $language}, key: {eq: "Index"}}) {
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
                    headings: title
                    texts: subTitle
                    backgourdImage
                    media
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
                        icon
                        image
                        description {
                            description
                        }
                    }
                    ... on ContentfulBaseBrand {
                        id
                        path: siteurl
                        logo {
                            src: imageurl
                        }
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
                    ... on ContentfulBasePerson {
                        id
                        title
                        fullName
                        reviews
                        image:pictureUrl
                    }
                    }
                }
            }
        }
    }
`;

export default IndexPage;
