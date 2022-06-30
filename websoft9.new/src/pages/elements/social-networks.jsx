import * as React from "react";
import PropTypes from "prop-types";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import { headerData, footerData, ctaData } from "@constants";
import CtaArea from "@containers/cta/layout-04";
import SectionOne from "@containers/elements/social-networks/section-01";
import SectionTwo from "@containers/elements/social-networks/section-02";

const SocialNetworkPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <Seo title="Social Networks" />
            <Header data={headerData} />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Social Networks"
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

SocialNetworkPage.propTypes = {
    pageContext: PropTypes.shape({}),
    location: PropTypes.shape({}),
};

export default SocialNetworkPage;
