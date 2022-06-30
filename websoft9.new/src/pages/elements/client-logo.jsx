import * as React from "react";
import PropTypes from "prop-types";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import { headerData, footerData, ctaData } from "@constants";
import CtaArea from "@containers/cta/layout-04";
import SectionOne from "@containers/elements/client-logo/section-01";
import SectionTwo from "@containers/elements/client-logo/section-02";
import SectionThree from "@containers/elements/client-logo/section-03";
import SectionFour from "@containers/elements/client-logo/section-04";

const ClientLogoPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <Seo title="Client Logo" />
            <Header data={headerData} />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Client Logo"
            />
            <main className="site-wrapper-reveal">
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <CtaArea data={ctaData} />
            </main>
            <Footer data={footerData} />
        </Layout>
    );
};

ClientLogoPage.propTypes = {
    pageContext: PropTypes.shape({}),
    location: PropTypes.shape({}),
};

export default ClientLogoPage;
