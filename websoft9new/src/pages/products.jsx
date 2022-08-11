import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import ContactArea from "@containers/contact/layout-05";
import ContactInfoArea from "@containers/contact/layout-07";
import CtaArea from "@containers/cta/layout-04";
import SectionOne from "@containers/elements/box-image/section-01";
import ListOne from "@containers/elements/lists/section-01";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { SectionWrap } from "@styled"

const ProductsPage = ({ pageContext, location, data }) => {
    const content = normalizedData(data?.page?.content || []);
    const globalContent = normalizedData(data?.allGeneral.nodes || []); 
    const catalogTitle = "关系型数据库";

    return (
        <Layout location={location}>
            <Seo title="Products" />
            <Header
                data={{
                    ...globalContent["header"],
                    ...globalContent["menu"],
                }}
            />
            <main className="site-wrapper-reveal">
                {/* 产品列表 */}

                <ListOne cataLogData={ data.allContentfulBaseCatalog.nodes } productsData={ data.allContentfulProduct.nodes } />

                {/* <SectionOne data={ data.allContentfulProduct.nodes } /> */}

                <CtaArea data={content["cta-section"]} />
            </main>
            <Footer data={{ ...data.site.siteMetadata }} />
        </Layout>
    );
};

export const query = graphql`
    query ProductsPageQuery($language: String!) {
        locales: allLocale(filter: {language: {eq: $language}}) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
        allGeneral {
            nodes {
                section
                ...HeaderOne
            }
        }
        site {
            ...Site
        }
        page(title: { eq: "contact-us" }, pageType: { eq: "innerpage" }) {
            content {
                ...PageContent
            }
        }
        allContentfulBaseCatalog(filter: {top: {eq: false},node_locale: {eq: $language}}) {
            nodes {
                title
                base_catalog {
                    title
                }
            }
        }
        allContentfulProduct(filter: {node_locale: {eq: $language}}) {
            nodes {
                id: key
                title
                description: summary
                image: logo {
                    imageurl
                }
            }
        }
    }
`;

ProductsPage.propTypes = {
    pageContext: PropTypes.shape({}),
    location: PropTypes.shape({}),
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                contact: PropTypes.shape({}),
            }),
        }),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export default ProductsPage;


