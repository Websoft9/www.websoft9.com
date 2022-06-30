import * as React from "react";
import PropTypes from "prop-types";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import { headerData, footerData, ctaData } from "@constants";
import CtaArea from "@containers/cta/layout-04";
import FullWideSlider from "@containers/elements/flexible-image-slider/full-wide-slider";
import CarouselSlider from "@containers/elements/flexible-image-slider/carousel-slider";
import CenteredSlider from "@containers/elements/flexible-image-slider/centered-slider";
import FreeModeSlider from "@containers/elements/flexible-image-slider/freemode-slider";
import SmoothTransitionSlider from "@containers/elements/flexible-image-slider/smooth-transition-slider";

const FlexibleImageSliderPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <Seo title="Flexible Image Slider" />
            <Header data={headerData} />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Flexible Image Slider"
            />
            <main className="site-wrapper-reveal">
                <FullWideSlider />
                <CarouselSlider />
                <CenteredSlider />
                <FreeModeSlider />
                <SmoothTransitionSlider />
                <CtaArea data={ctaData} />
            </main>
            <Footer data={footerData} />
        </Layout>
    );
};

FlexibleImageSliderPage.propTypes = {
    pageContext: PropTypes.shape({}),
    location: PropTypes.shape({}),
};

export default FlexibleImageSliderPage;
