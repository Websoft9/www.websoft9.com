import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import AboutArea from "@containers/about/layout-05";
import ITServiceArea from "@containers/it-service/layout-01";
import ContactArea from "@containers/contact/layout-06";

const WhyChooseUsPage = ({ pageContext, location, data }) => {
    const content = normalizedData(data?.page?.content || []);
    const globalContent = normalizedData(data?.allGeneral.nodes || []);

    return (
        <Layout location={location}>
            <Seo title="Why Choose Us" />
            <Header
                data={{
                    ...globalContent["header"],
                    ...globalContent["menu"],
                }}
            />
            <main className="site-wrapper-reveal">
                <PageHeader
                    pageContext={pageContext}
                    location={location}
                    title="Why Choose Us"
                />
                <AboutArea data={content["about-section"]} />
                <ITServiceArea
                    data={{
                        ...content["service-section"],
                        items: data?.services?.nodes,
                    }}
                    space={2}
                />
                <ContactArea
                    data={{
                        ...content["contact-section"],
                        contact: data.site.siteMetadata.contact,
                    }}
                />
            </main>
            <Footer data={{ ...data.site.siteMetadata }} />
        </Layout>
    );
};

export const query = graphql`
    query WhyChooseUsPageQuery {
        allGeneral {
            nodes {
                section
                ...HeaderOne
            }
        }
        site {
            ...Site
        }
        page(title: { eq: "why-choose-us" }, pageType: { eq: "innerpage" }) {
            content {
                ...PageContent
            }
        }
        services: allItService(
            sort: { order: DESC, fields: id }
            filter: { is_featured: { eq: false } }
        ) {
            nodes {
                ...ItServiceThree
            }
        }
    }
`;

WhyChooseUsPage.propTypes = {
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
        services: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export default WhyChooseUsPage;
