import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-03";
import Footer from "@layout/footer/layout-01";
import HeroArea from "@containers/hero/layout-04";
import ITSolutionArea from "@containers/it-solution/layout-04";
import AboutArea from "@containers/about/layout-03";
import ITServiceArea from "@containers/it-service/layout-02";
import GradationArea from "@containers/gradation/layout-01";
import CtaArea from "@containers/cta/layout-04";
import CaseStudyArea from "@containers/case-study/layout-02";
import PricingArea from "@containers/pricing/layout-01";
import BlogArea from "@containers/blog/layout-02";
import ContactArea from "@containers/contact/layout-04";
import PartnerArea from "@containers/partner/layout-01";

const ServicesPage = ({ location, data }) => {
    const content = normalizedData(data?.page.content || []);
    const globalContent = normalizedData(data?.allGeneral.nodes || []);

    return (
        <Layout location={location}>
            <Seo title="Services" />
            <Header
                data={{
                    ...globalContent["header"],
                    ...globalContent["menu"],
                    contact: data.site.siteMetadata.contact,
                }}
            />
            <main className="site-wrapper-reveal">
                <HeroArea data={content["hero-section"]} />
                <ITSolutionArea
                    data={{
                        ...content["feature-section"],
                        items: data.allItSolution.nodes,
                    }}
                />
                <AboutArea data={content["about-section"]} gridLine />
                <ITServiceArea
                    data={{
                        ...content["service-section"],
                        items: data.services.nodes,
                    }}
                    bg="gray.500"
                />
                <GradationArea data={content["gradation-section"]} />
                <CtaArea data={content["cta-section"]} />
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
                        featuredBlog: data.featuredBlog,
                        recentBlogs: data.recentBlogs.nodes,
                    }}
                />
                <ContactArea
                    data={{
                        ...content["contact-section"],
                        contact: data.site.siteMetadata.contact,
                    }}
                />
                <PartnerArea data={content["partner-section"]} />
            </main>
            <Footer data={{ ...data.site.siteMetadata }} />
        </Layout>
    );
};

export const query = graphql`
    query servicesPageQuery {
        allGeneral {
            nodes {
                section
                ...HeaderOne
            }
        }
        site {
            ...Site
        }
        page(title: { eq: "services" }, pageType: { eq: "frontpage" }) {
            content {
                ...PageContent
            }
        }
        allItSolution(limit: 6) {
            nodes {
                ...ItSolutionTwo
            }
        }
        services: allItService(
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
        featuredBlog: article(is_featured: { eq: true }) {
            ...BlogThree
        }
        recentBlogs: allArticle(
            filter: { is_featured: { eq: false } }
            limit: 3
        ) {
            nodes {
                ...BlogFour
            }
        }
    }
`;

ServicesPage.propTypes = {
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
        services: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allCaseStudy: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        featuredBlog: PropTypes.shape({}),
        recentBlogs: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export default ServicesPage;
