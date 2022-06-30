import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-01";
import AboutArea from "@containers/about/layout-04";
import ITSolutionArea from "@containers/it-solution/layout-06";
import CtaArea from "@containers/cta/layout-05";
import SolutionArea from "@containers/solution/layout-01";
import FunFactArea from "@containers/funfact/layout-02";
import TestimonialArea from "@containers/testimonial/layout-02";
import PartnerArea from "@containers/partner/layout-01";
import ContactArea from "@containers/contact/layout-06";

const AboutPage = ({ location, data }) => {
    const content = normalizedData(data?.page.content || []);
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
                <ITSolutionArea
                    data={{
                        ...content["feature-section"],
                        items: data.allItSolution.nodes,
                    }}
                />
                <CtaArea data={content["cta-section"]} />
                <SolutionArea data={content["solution-section"]} />
                <FunFactArea data={content["funfact-section"]} />
                <TestimonialArea data={content["testimonial-section"]} />
                <PartnerArea data={content["partner-section"]} />
                <ContactArea
                    data={{
                        ...content["contact-section"],
                        contact: data.site.siteMetadata.contact,
                    }}
                />
            </main>
            <Footer data={{ ...data.site.siteMetadata }} />
        </Layout>
    );
};

export const query = graphql`
    query AboutPageQuery {
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
        allItSolution(limit: 3) {
            nodes {
                ...ItSolutionThree
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
