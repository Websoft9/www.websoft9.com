import * as React from "react";
import PropTypes from "prop-types";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import { headerData, footerData, ctaData, ctaDataTwo } from "@constants";
import CtaOne from "@containers/cta/layout-04";
import CtaTwo from "@containers/cta/layout-02";

const CallToActionPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <Seo title="Call To Action" />
            <Header data={headerData} />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Call To Action"
            />
            <main className="site-wrapper-reveal">
                <CtaOne data={ctaData} />
                <CtaTwo data={ctaDataTwo} />
            </main>
            <Footer data={footerData} />
        </Layout>
    );
};

CallToActionPage.propTypes = {
    pageContext: PropTypes.shape({}),
    location: PropTypes.shape({}),
};

export default CallToActionPage;
