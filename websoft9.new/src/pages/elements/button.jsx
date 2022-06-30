import * as React from "react";
import PropTypes from "prop-types";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import { headerData, footerData, ctaData } from "@constants";
import CtaArea from "@containers/cta/layout-04";
import SectionOne from "@containers/elements/button/section-01";
import SectionTwo from "@containers/elements/button/section-02";
import SectionThree from "@containers/elements/button/section-03";
import SectionFour from "@containers/elements/button/section-04";
import SectionFive from "@containers/elements/button/section-05";

const ButtonPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <Seo title="Button" />
            <Header data={headerData} />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Buttons"
            />
            <main className="site-wrapper-reveal">
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <CtaArea data={ctaData} />
            </main>
            <Footer data={footerData} />
        </Layout>
    );
};

ButtonPage.propTypes = {
    pageContext: PropTypes.shape({}),
    location: PropTypes.shape({}),
};

export default ButtonPage;
