import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-02";
import TopWrapper from "@containers/top-wrapper";
import HeroArea from "@containers/hero/layout-07";
import PartnerArea from "@containers/partner/layout-04";
import TestimonialArea from "@containers/testimonial/layout-03";
import FunFactArea from "@containers/funfact/layout-04";
import SolutionArea from "@containers/it-solution/layout-07";
import ProjectArea from "@containers/project/layout-01";
import ContactArea from "@containers/contact/layout-03";
import ClaimArea from "@containers/claim";
import CTAArea from "@containers/cta/layout-06";

const ModernIteCompanyPage = ({ location, data }) => {
    const content = normalizedData(data?.page.content || []);
    const globalContent = normalizedData(data?.allGeneral.nodes || []);

    return (
        <Layout location={location}>
            <Seo title="Infotechno" />
            <Header
                data={{
                    ...globalContent["header"],
                    ...globalContent["menu"],
                }}
            />
            <main className="site-wrapper-reveal">
                <TopWrapper>
                    <HeroArea data={content["hero-section"]} />
                    <PartnerArea data={content["partner-section"]} />
                    <TestimonialArea data={content["testimonial-section"]} />
                </TopWrapper>
                <FunFactArea data={content["funfact-section"]} />
                <SolutionArea
                    data={{
                        ...content["solution-section"],
                        items: data.allItSolution.nodes,
                    }}
                />
                <ProjectArea data={content["project-section"]} />
                <ContactArea data={content["contact-section"]} />
                <ClaimArea data={content["claim-section"]} />
                <CTAArea data={content["cta-section"]} />
            </main>
            <Footer data={{ ...data.site.siteMetadata }} />
        </Layout>
    );
};

export const query = graphql`
    query modernItCompanyPageQuery {
        allGeneral {
            nodes {
                section
                ...HeaderThree
            }
        }
        site {
            ...Site
        }
        page(
            title: { eq: "modern-it-company" }
            pageType: { eq: "frontpage" }
        ) {
            content {
                ...PageContent
            }
        }
        allItSolution(
            sort: { order: DESC, fields: id }
            filter: { is_featured: { eq: true } }
            limit: 6
        ) {
            nodes {
                ...ItSolutionTwo
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
        allCaseStudy(filter: { is_featured: { eq: true } }, limit: 4) {
            nodes {
                ...CaseStudyOne
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

ModernIteCompanyPage.propTypes = {
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

export default ModernIteCompanyPage;
