import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-04";
import Footer from "@layout/footer/layout-01";
import HeroArea from "@containers/hero/layout-06";
import AboutArea from "@containers/about/layout-04";
import ITSolutionArea from "@containers/it-solution/layout-06";
import ITServicesArea from "@containers/it-service/layout-02";
import FunFactArea from "@containers/funfact/layout-02";
import CaseStudyArea from "@containers/case-study/layout-02";
import PricingArea from "@containers/pricing/layout-01";
import BlogArea from "@containers/blog/layout-01";
import PartnerArea from "@containers/partner/layout-03";
import ContactArea from "@containers/contact/layout-05";
import ContactInfoArea from "@containers/contact/layout-06";

const CybersecurityPage = ({ location, data }) => {
    const content = normalizedData(data?.page.content || []);
    const globalContent = normalizedData(data?.allGeneral.nodes || []);

    return (
        <Layout location={location}>
            <Seo title="Cybersecurity" />
            <Header
                data={{
                    ...globalContent["header"],
                    ...globalContent["menu"],
                    socials: data.site.siteMetadata.socials,
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
                <ITServicesArea
                    data={{
                        ...content["service-section"],
                        items: data.allItService.nodes,
                    }}
                    bg="gray.100"
                />
                <FunFactArea data={content["funfact-section"]} />
                <CaseStudyArea
                    data={{
                        ...content["case-study-section"],
                        items: data.allCaseStudy.nodes,
                    }}
                />
                <PricingArea data={content["pricing-section"]} />
                <BlogArea
                    data={{
                        ...content["blog-section"],
                        featuredBlogs: data.featuredBlogs.nodes,
                        recentBlogs: data.recentBlogs.nodes,
                    }}
                />
                <PartnerArea data={content["partner-section"]} />
                <ContactArea data={content["contact-section"]} />
                <ContactInfoArea
                    data={{
                        ...content["contact-info-section"],
                        contact: data.site.siteMetadata.contact,
                    }}
                />
            </main>
            <Footer data={{ ...data.site.siteMetadata }} />
        </Layout>
    );
};

export const query = graphql`
    query CybersecurityPageQuery {
        allGeneral {
            nodes {
                section
                ...HeaderTwo
            }
        }
        site {
            ...Site
        }
        page(title: { eq: "cybersecurity" }, pageType: { eq: "frontpage" }) {
            content {
                ...PageContent
            }
        }
        allItSolution(limit: 3) {
            nodes {
                ...ItSolutionThree
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
        allCaseStudy(limit: 2) {
            nodes {
                ...CaseStudyTwo
            }
        }
        featuredBlogs: allArticle(
            filter: { is_featured: { eq: true } }
            limit: 2
        ) {
            nodes {
                ...BlogOne
            }
        }
        recentBlogs: allArticle(
            filter: { is_featured: { eq: false } }
            limit: 5
        ) {
            nodes {
                ...BlogTwo
            }
        }
    }
`;

CybersecurityPage.propTypes = {
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
        allCaseStudy: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        featuredBlogs: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        recentBlogs: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export default CybersecurityPage;
