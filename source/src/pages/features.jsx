import React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-02";
import Footer from "@layout/footer/layout-02";
import { graphql } from "gatsby";
import HeroArea from "@containers/hero/layout-01";
import VerticalTabArea from "@containers/tab/layout-02";
import ITServicesArea from "@containers/it-service/layout-02";
import CtaArea from "@containers/cta/layout-04";
import SolutionArea from "@containers/elements/box-large-image/section-02";
import HeroImageArea from "@containers/hero/layout-06";

const FeaturesPage = ({ pageContext, location, data }) => {

    return (
        <Layout location={location}>
            <Seo title={data.allContentfulPage.nodes[0].title} description={data.allContentfulPage.nodes[0]?.description?.description} keywords={data.allContentfulPage.nodes[0]?.tags}/>
            <Header />

            <main className="site-wrapper-reveal">
            
                <HeroArea data={data.allContentfulPage.nodes[0].content[0]} />
                <ITServicesArea data={ data.allContentfulPage.nodes[0].content[1] }/>

                {
                    data.allContentfulPage.nodes[0].content[2].features.map((feature,i)=>{                       
                        if(i%2==0){
                            // return (<HeroImageRightArea key={feature.id} data={feature}/>)
                            return ( <HeroImageArea  key={feature.id} data={feature} />)
                        }
                        else{
                            // return (<HeroImageLeftArea key={feature.id} data={feature}/>)
                            return (<HeroImageArea  key={feature.id} data={feature} imageAlign="left" />)
                        }
                    })
                }

                <VerticalTabArea data={ data.allContentfulPage.nodes[0].content[3] }/>
                <CtaArea data={ data.allContentfulPage.nodes[0].content[4] } />
                <SolutionArea data ={ data.allContentfulPage.nodes[0].content[5] } />
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
                    description {
                        description
                    }
                    link {
                        id
                        key
                        value
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
                }
            }
            }
        }
    }
`;

export default FeaturesPage;
