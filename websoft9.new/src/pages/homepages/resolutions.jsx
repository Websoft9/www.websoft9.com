import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-03";
import Footer from "@layout/footer/layout-01";
import HeroArea from "@containers/hero/layout-05";
import ItSolutionArea from "@containers/it-solution/layout-05";
import FunfactArea from "@containers/funfact/layout-03";
import ITServiceArea from "@containers/it-service/layout-04";
import ContactArea from "@containers/contact/layout-03";
import TestimonialArea from "@containers/testimonial/layout-02";
import WhatsNewArea from "@containers/whats-new/layout-01";
import CtaArea from "@containers/cta/layout-04";
import PartnerArea from "@containers/partner/layout-01";

const ResolutionsPage = ({ location, data }) => {
    const content = normalizedData(data?.page.content || []);
    const globalContent = normalizedData(data?.allGeneral.nodes || []);

    return (
        <Layout location={location}>
            <Seo title="Resolutions" />
            <Header
                transparent
                data={{
                    ...globalContent["header"],
                    ...globalContent["menu"],
                    contact: data.site.siteMetadata.contact,
                }}
            />
            <main className="site-wrapper-reveal">
                <HeroArea data={content["hero-section"]} />
                <ItSolutionArea
                    data={{
                        ...content["feature-section"],
                        items: data.features.nodes,
                    }}
                />
                <FunfactArea data={content["funfact-section"]} bg="gray.100" />
                <ITServiceArea
                    data={{
                        ...content["service-section"],
                        items: data.services.nodes,
                    }}
                />
                <ContactArea data={content["contact-section"]} />
                <TestimonialArea data={content["testimonial-section"]} />
                <WhatsNewArea data={content["whats-new-section"]} />
                <CtaArea data={content["cta-section"]} />
                <PartnerArea data={content["partner-section"]} />
            </main>
            <Footer data={{ ...data.site.siteMetadata }} />
        </Layout>
    );
};

export const query = graphql`
    query resoultionsPageQuery {
        allGeneral {
            nodes {
                section
                ...HeaderOne
            }
        }
        site {
            ...Site
        }
        page(title: { eq: "resolutions" }, pageType: { eq: "frontpage" }) {
            content {
                ...PageContent
            }
        }
        features: allItSolution(
            filter: { is_featured: { eq: true } }
            limit: 3
        ) {
            nodes {
                ...ItSolutionTwo
            }
        }
        services: allItService(sort: { order: DESC, fields: id }, limit: 8) {
            nodes {
                ...ItServiceOne
            }
        }
    }
`;

ResolutionsPage.propTypes = {
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
        features: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        services: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export default ResolutionsPage;
