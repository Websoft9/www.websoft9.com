import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-02";
import Footer from "@layout/footer/layout-01";
import HeroArea from "@containers/hero/layout-02";
import ITServicesArea from "@containers/it-service/layout-02";
import TabArea from "@containers/tab/layout-01";
import AboutArea from "@containers/about/layout-02";
import ItSolutionArea from "@containers/it-solution/layout-02";
import PartnerArea from "@containers/partner/layout-02";
import AwardArea from "@containers/award/layout-01";
import TeamArea from "@containers/team/layout-01";
import CTAArea from "@containers/cta/layout-02";
import CaseStudyArea from "@containers/case-study/layout-01";
import TestimonialArea from "@containers/testimonial/layout-02";
import FunFactArea from "@containers/funfact/layout-02";
import ContactArea from "@containers/contact/layout-02";

const ApppoinmentPage = ({ location, data }) => {
    const content = normalizedData(data?.page.content || []);
    const globalContent = normalizedData(data?.allGeneral.nodes || []);

    return (
        <Layout location={location}>
            <Seo title="Appointment" />
            <Header
                data={{
                    ...globalContent["header"],
                    ...globalContent["menu"],
                    socials: data.site.siteMetadata.socials,
                }}
            />
            <main className="site-wrapper-reveal">
                <HeroArea data={content["hero-section"]} />
                <ITServicesArea
                    data={{
                        ...content["service-section"],
                        items: data.allItService.nodes,
                    }}
                />
                <TabArea data={content["tab-section"]}>
                    <AboutArea data={content["about-section"]} />
                    <ItSolutionArea
                        data={{
                            ...content["feature-section"],
                            items: data?.allItSolution?.nodes,
                        }}
                    />
                    <PartnerArea data={content["partner-section"]} />
                    <AwardArea data={content["award-section"]} />
                </TabArea>
                <TeamArea data={content["team-section"]} />
                <CTAArea data={content["cta-section"]} />
                <CaseStudyArea
                    data={{
                        ...content["case-study-section"],
                        items: data.allCaseStudy.nodes,
                    }}
                />
                <TestimonialArea data={content["testimonial-section"]} />
                <FunFactArea data={content["funfact-section"]} />
                <ContactArea data={content["contact-section"]} />
            </main>
            <Footer data={{ ...data.site.siteMetadata }} />
        </Layout>
    );
};

export const query = graphql`
    query AppointmentPageQuery {
        allGeneral {
            nodes {
                section
                ...HeaderTwo
            }
        }
        site {
            ...Site
        }
        page(title: { eq: "appointment" }, pageType: { eq: "frontpage" }) {
            content {
                ...PageContent
            }
        }
        allItService(
            sort: { order: DESC, fields: id }
            filter: { is_featured: { eq: true } }
        ) {
            nodes {
                ...ItServiceOne
            }
        }
        allItSolution(limit: 3) {
            nodes {
                ...ItSolutionThree
            }
        }
        allCaseStudy(filter: { is_featured: { eq: true } }, limit: 4) {
            nodes {
                id
                title
                slug
                category
                excerpt
                featured_image {
                    src {
                        childImageSharp {
                            gatsbyImageData(
                                formats: WEBP
                                quality: 100
                                placeholder: DOMINANT_COLOR
                            )
                        }
                    }
                }
            }
        }
    }
`;

ApppoinmentPage.propTypes = {
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
            }),
        }),
        allItService: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allCaseStudy: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allItSolution: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export default ApppoinmentPage;
