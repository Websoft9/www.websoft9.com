import * as React from "react";
import PropTypes from "prop-types";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import { headerData, footerData, ctaData } from "@constants";
import CtaArea from "@containers/cta/layout-04";
import Gradation from "@containers/elements/gradation";

const GradationPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <Seo title="Gradation" />
            <Header data={headerData} />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Gradation"
            />
            <main className="site-wrapper-reveal">
                <Gradation />
                <CtaArea data={ctaData} />
            </main>
            <Footer data={footerData} />
        </Layout>
    );
};

GradationPage.propTypes = {
    pageContext: PropTypes.shape({}),
    location: PropTypes.shape({}),
};

export default GradationPage;
