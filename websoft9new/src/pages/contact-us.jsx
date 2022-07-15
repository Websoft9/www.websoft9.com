import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import ContactArea from "@containers/contact/layout-05";
import ContactInfoArea from "@containers/contact/layout-07";
import CtaArea from "@containers/cta/layout-04";
import SectionTwo from "@containers/elements/box-image/section-02";

const ContactPage = ({ pageContext, location, data }) => {
    const content = normalizedData(data?.page?.content || []);
    const globalContent = normalizedData(data?.allGeneral.nodes || []);
    

    return (
        <Layout location={location}>
            <Seo title="Contact Us" />
            <Header
                data={{
                    ...globalContent["header"],
                    ...globalContent["menu"],
                    // menu:data.allContentfulBaseMenu.nodes,
                }}
            />
            <main className="site-wrapper-reveal">
                <PageHeader
                    pageContext={pageContext}
                    location={location}
                    title="Contact Us"
                />
                <SectionTwo />
                {/* <ContactArea data={content["contact-section"]} /> */}
                {/* <ContactInfoArea data={content["contact-info-section"]} /> */}
                <CtaArea data={content["cta-section"]} />
            </main>
            <Footer data={{ ...data.site.siteMetadata }} />
        </Layout>
    );
};

export const query = graphql`
    query ContactPageQuery($language: String!) {
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
        page(title: { eq: "contact-us" }, pageType: { eq: "innerpage" }) {
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

ContactPage.propTypes = {
    pageContext: PropTypes.shape({}),
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
    }),
};

export default ContactPage;
