import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import AboutArea from "@containers/about/layout-04";
import PageHeader from "@containers/page-header/layout-01";
import ContactArea from "@containers/contact/layout-05";
import ContactInfoArea from "@containers/contact/layout-07";
import CtaArea from "@containers/cta/layout-04";
import CarouselSlider from "@containers/elements/flexible-image-slider/carousel-slider";
import SectionOne from "@containers/elements/box-icon/section-01";
import SectionTwo from "@containers/elements/box-large-image/section-02";

const AboutPage = ({ pageContext, location, data }) => {
    const content = normalizedData(data?.page?.content || []);
    const globalContent = normalizedData(data?.allGeneral.nodes || []);

    return (
        <Layout location={location}>
            <Seo title="About Us" />
            <Header
                data={{
                    ...globalContent["header"],
                    ...globalContent["menu"],
                }}
            />
            <main className="site-wrapper-reveal">
                <PageHeader data={content["page-header-section"]} />
                <AboutArea data={content["about-section"]} />
                <SectionOne />
                <SectionTwo />
                <CarouselSlider />              
            </main>
            <Footer data={{ ...data.site.siteMetadata }} />
        </Layout>
    );
};

export const query = graphql`
    query AboutPagePageQuery($language: String!) {
        locales: allLocale(filter: {language: {eq: $language}}) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
        allGeneral {
            nodes {
                section
                ...HeaderOne
            }
        }
        site {
            ...Site
        }
        page(title: { eq: "about-us" }, pageType: { eq: "innerpage" }) {
            content {
                ...PageContent
            }
        }
        allItSolution(
            sort: { order: DESC, fields: id }
            filter: { is_featured: { eq: true } }
            limit: 3
        ) {
            nodes {
                ...ItSolutionTwo
            }
        }
    }
`;

AboutPage.propTypes = {
    location: PropTypes.shape({}),
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                contact: PropTypes.shape({}),
            }),
        }),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allItSolution: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export default AboutPage;
