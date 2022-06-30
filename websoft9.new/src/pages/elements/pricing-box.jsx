import * as React from "react";
import PropTypes from "prop-types";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import { headerData, footerData, ctaData } from "@constants";
import CtaArea from "@containers/cta/layout-04";
import SectionOne from "@containers/elements/pricing-table/section-01";
import SectionTwo from "@containers/elements/pricing-table/section-02";

const PricingBoxPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <Seo title="Pricing Box" />
            <Header data={headerData} />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Pricing Box"
            />
            <main className="site-wrapper-reveal">
                <SectionOne />
                <SectionTwo />
                <CtaArea data={ctaData} />
            </main>
            <Footer data={footerData} />
        </Layout>
    );
};

PricingBoxPage.propTypes = {
    pageContext: PropTypes.shape({}),
    location: PropTypes.shape({}),
};

export default PricingBoxPage;
