import * as React from "react";
import PropTypes from "prop-types";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import { headerData, footerData, ctaData } from "@constants";
import CtaArea from "@containers/cta/layout-04";
import PopupVideoArea from "@containers/elements/popup-video";

const PopupVideoPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <Seo title="Popup Video" />
            <Header data={headerData} />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Popup Video"
            />
            <main className="site-wrapper-reveal">
                <PopupVideoArea />
                <CtaArea data={ctaData} />
            </main>
            <Footer data={footerData} />
        </Layout>
    );
};

PopupVideoPage.propTypes = {
    pageContext: PropTypes.shape({}),
    location: PropTypes.shape({}),
};

export default PopupVideoPage;
