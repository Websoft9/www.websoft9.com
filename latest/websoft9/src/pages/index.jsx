import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-02";
import HeroArea from "@containers/hero/layout-02";
import SubHeroArea from "@containers/hero/layout-03";
import CustomerArea from "@containers/partner/layout-01";
import PartnerArea from "@containers/partner/layout-02";
import ContactArea from "@containers/contact/layout-01";
import ITServicesArea from "@containers/it-service/layout-02";
import TabArea from "@containers/tab/layout-01";
import VerticalTabArea from "@containers/tab/layout-02";
import CounterArea from "@containers/elements/counters/section-01";
import TestimonialArea from "@containers/elements/testimonials/section-01";
import CtaArea from "@containers/cta/layout-04";
import Heading from "@ui/heading";
import SolutionArea from "@containers/elements/box-large-image/section-02";
import {Trans, useTranslation,Link, useI18next} from 'gatsby-plugin-react-i18next';


const IndexPage = ({ location, data }) => {
    const {language, languages, changeLanguage } = useI18next();

    return (
        <Layout location={location}>
            <Seo title="Home" />
            <Header shortcutMenuData= { data.shortcutMenu.nodes } topMenuData={ data.topMenu.nodes } />

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
                
                {/* <CustomerArea data={ data.allContentfulPage.nodes[0].content[3] } />   */}

                <PartnerArea data={ data.allContentfulPage.nodes[0].content[3] } />

                <ITServicesArea data={ data.allContentfulPage.nodes[0].content[4] }/>

                <VerticalTabArea data={ data.allContentfulPage.nodes[0].content[5] } />

                <CounterArea data={data.allContentfulPage.nodes[0].content[6]} />

                <TestimonialArea data={data.allContentfulPage.nodes[0].content[7]} />

                <SolutionArea data ={ data.allContentfulPage.nodes[0].content[8] } />

                <PartnerArea data={ data.allContentfulPage.nodes[0].content[9] } />

                <CtaArea data={ data.allContentfulPage.nodes[0].content[10] } />
                            
            </main>
            <Footer data={ data.BottomMenu.nodes } siteData={ data.site.siteMetadata } footerMenuData={data.FooterMenu.nodes} />
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
        site {
            siteMetadata {
            copyright
            description
            socials {
                icon
                id
                link
                title
            }
            }
        }
        #查询顶部快捷菜单
        shortcutMenu: allContentfulMenu(
            filter: {type: {eq: "TopMenu"}, node_locale: {eq: $language}}
        ) {
            nodes {
            id
            title
            link    
            }
        }
        #查询导航主菜单
        topMenu: allContentfulMenu(
            filter: {node_locale: {eq: $language}, type: {eq: "MainMenu"}}
            sort: {fields: title}
        ) {
            nodes {
            id
            text: title
            link
            megamenu: submenu {
                ... on ContentfulMenu {
                id
                text: title
                submenu {
                    ... on ContentfulMenu {
                    id
                    text: title
                    link
                    }
                    ... on ContentfulProduct {
                    id
                    text: trademark
                    logo {
                        imageurl
                    }
                    }
                    ... on ContentfulResource {
                    id
                    text: title
                    }
                }
                }
                ... on ContentfulBaseFeature {
                id
                title
                subtitle
                image
                buttons:link {
                    key
                    value
                }
                }
            }
            }
        }
        #查询底部菜单
        BottomMenu: allContentfulMenu(
            filter: {node_locale: {eq: $language}, type: {eq: "BottomMenu"}}
            sort: {fields: title}
        ) {
            nodes {
            id
            menus: submenu {
                ... on ContentfulMenu {
                id
                title
                link
                submenu {
                    ... on ContentfulMenu {
                    id
                    title
                    link
                    }
                }
                }
            }
            }
        }      
        #查询页脚菜单
        FooterMenu: allContentfulMenu(
            filter: {type: {eq: "FooterMenu"}, node_locale: {eq: $language}}
        ) {
            nodes {
            id
            title
            link
            submenu {
                ... on ContentfulMenu {
                id
                title
                link
                }
            }
            }
        }
        # 查询页面：index(首页)
        allContentfulPage(filter: {node_locale: {eq: $language}, key: {eq: "Index"}}) {
            nodes {
                content {
                    headings: title
                    texts: subTitle
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
