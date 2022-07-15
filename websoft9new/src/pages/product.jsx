import * as React from "react";
import PropTypes from "prop-types";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import { headerData, footerData, ctaData } from "@constants";
import CtaArea from "@containers/cta/layout-04";
import { graphql } from "gatsby";
import SectionOne from "@containers/elements/box-image/section-01";

import {Trans, useTranslation,Link, useI18next} from 'gatsby-plugin-react-i18next';

const BoxImagePage = ({ pageContext, location, data }) => {
    return (
        <Layout location={location}>
            <Seo title="Products" />
            <Header data={{menu:data.allContentfulBaseMenu.nodes,}} />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Box Image"
            />
            <main className="site-wrapper-reveal">
                <SectionOne />
                {/* <CtaArea data={ctaData} /> */}
            </main>
            <Footer data={footerData} />
        </Layout>
    );
};

// export const query = graphql`
//     query productPageQuery($language: String!) {
//         locales: allLocale(filter: {language: {eq: $language}}) {
//             edges {
//                 node {
//                     ns
//                     data
//                     language
//                 }
//             }
//         }
//         allContentfulBaseMenu(
//             filter: {node_locale: {eq: $language}, isTop: {eq: true}}
//             sort: {fields: contentfulid, order: ASC}) {
//             nodes {
//                 id: contentfulid
//                 text
//                 link
//                 submenu {
//                     id: contentfulid
//                     text
//                     link
//                 }
//             }
//         }
//     }
// `;

BoxImagePage.propTypes = {
    pageContext: PropTypes.shape({}),
    location: PropTypes.shape({}),
    data:PropTypes.shape({

    }),
};

export default BoxImagePage;
