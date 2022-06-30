import * as React from "react";
import PropTypes from "prop-types";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import { headerData, footerData, ctaData } from "@constants";
import CtaArea from "@containers/cta/layout-04";
import SectionOne from "@containers/elements/box-image/section-01";
import SectionTwo from "@containers/elements/box-image/section-02";
import SectionThree from "@containers/elements/box-image/section-03";
import SectionFour from "@containers/elements/box-image/section-04";
import SectionFive from "@containers/elements/box-image/section-05";
import SectionSix from "@containers/elements/box-image/section-06";
import SectionSeven from "@containers/elements/box-image/section-07";

const BoxImagePage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <Seo title="Box Image" />
            <Header data={headerData} />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Box Image"
            />
            <main className="site-wrapper-reveal">
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <SectionSix />
                <SectionSeven />
                <CtaArea data={ctaData} />
            </main>
            <Footer data={footerData} />
        </Layout>
    );
};

BoxImagePage.propTypes = {
    pageContext: PropTypes.shape({}),
    location: PropTypes.shape({}),
};

export default BoxImagePage;
