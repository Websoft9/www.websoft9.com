import * as React from "react";
import PropTypes from "prop-types";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import { graphql } from "gatsby";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import { headerData, footerData, ctaData } from "@constants";
import CtaArea from "@containers/cta/layout-04";
import SectionOne from "@containers/elements/pricing-table/section-01";
import FAQSection from "@containers/elements/accordion/section-01";
import { normalizedData } from "@utils";

const PricingPage = ({ pageContext, location,data }) => {
    const globalContent = normalizedData(data?.allGeneral.nodes || []);
    return (
        <Layout location={location}>
            <Seo title="Pricing" />
            <Header
                data={{
                    ...globalContent["header"],
                    ...globalContent["menu"],
                }}
            />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Websoft9 Pricing"
            />
            <main className="site-wrapper-reveal">
                <SectionOne />
                <FAQSection />
                <CtaArea data={ctaData} />
            </main>
            <Footer data={{ ...data.site.siteMetadata }} />
        </Layout>
    );
};

export const query = graphql`
    query PricingPageQuery($language: String!) {
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
        page(title: { eq: "infotechno" }, pageType: { eq: "frontpage" }) {
            content {
                ...PageContent
            }
        }
    }
`;

PricingPage.propTypes = {
    pageContext: PropTypes.shape({}),
    location: PropTypes.shape({}),
};

export default PricingPage;
