import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-03";
import Footer from "@layout/footer/layout-01";
import HeroArea from "@containers/hero/layout-03";
import AboutArea from "@containers/about/layout-03";
import ITSolutionArea from "@containers/it-solution/layout-03";
import FunfactArea from "@containers/funfact/layout-03";
import CtaArea from "@containers/cta/layout-03";
import ITServiceArea from "@containers/it-service/layout-03";
import TestimonialArea from "@containers/testimonial/layout-02";
import PartnerArea from "@containers/partner/layout-01";
import ContactArea from "@containers/contact/layout-03";

const InfotechnoPage = ({ location, data }) => {
    const content = normalizedData(data?.page.content || []);
    const globalContent = normalizedData(data?.allGeneral.nodes || []);

    return (
        <Layout location={location}>
            <Seo title="Processing" />
            <Header
                data={{
                    ...globalContent["header"],
                    ...globalContent["menu"],
                    contact: data.site.siteMetadata.contact,
                }}
            />
            <main className="site-wrapper-reveal">
                <HeroArea data={content["hero-section"]} />
                <AboutArea data={content["about-section"]} />
                <ITSolutionArea
                    data={{
                        ...content["feature-section"],
                        items: data.allItSolution.nodes,
                    }}
                />
                <FunfactArea data={content["funfact-section"]} />
                <CtaArea data={content["cta-section"]} />
                <ITServiceArea
                    data={{
                        ...content["service-section"],
                        items: data.allItService.nodes,
                    }}
                />
                <TestimonialArea data={content["testimonial-section"]} />
                <PartnerArea data={content["partner-section"]} />
                <ContactArea data={content["contact-section"]} />
            </main>
            <Footer data={{ ...data.site.siteMetadata }} />
        </Layout>
    );
};

export const query = graphql`
    query processingPageQuery {
        allGeneral {
            nodes {
                section
                ...HeaderOne
            }
        }
        site {
            ...Site
        }
        page(title: { eq: "processing" }, pageType: { eq: "frontpage" }) {
            content {
                ...PageContent
            }
        }
        allItSolution(filter: { is_featured: { eq: true } }) {
            nodes {
                ...ItSolutionOne
            }
        }
        allItService(
            sort: { order: DESC, fields: id }
            filter: { is_featured: { eq: false } }
        ) {
            nodes {
                ...ItServiceThree
            }
        }
    }
`;

InfotechnoPage.propTypes = {
    location: PropTypes.shape({}),
    data: PropTypes.shape({
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                socials: PropTypes.arrayOf(PropTypes.shape({})),
                contact: PropTypes.shape({}),
            }),
        }),
        allItSolution: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allItService: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export default InfotechnoPage;
