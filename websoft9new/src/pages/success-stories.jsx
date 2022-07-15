import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import PageHeader from "@containers/page-header/layout-02";
import ITSolutionArea from "@containers/it-solution/layout-06";
import ContactArea from "@containers/contact/layout-03";
import Markdown from 'markdown-to-jsx';
import Text from "@ui/text";

const SuccessStoriesPage = ({ pageContext, location, data }) => {
    const content = normalizedData(data?.page?.content || []);
    const globalContent = normalizedData(data?.allGeneral.nodes || []);

    return (
        <Layout location={location}>
            <Seo title="Success Stories" />
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
                    title="IT Solutions"
                />
                <ITSolutionArea
                    data={{
                        ...content["service-section"],
                        items: data.allItSolution.nodes,
                    }}
                    space={2}
                />

                {/* <Text
                    fontSize="18px"
                    mb="30px"
                    dangerouslySetInnerHTML={{ __html: data.allContentfulCase.nodes[0].remark.childMarkdownRemark.html }}                 
                /> */}

                {/* <Markdown>
                    { data.allContentfulCase.nodes[0].remark.childMarkdownRemark.html }
                </Markdown> */}

                {/* <ContactArea data={content["contact-section"]} /> */}
            </main>
            <Footer data={{ ...data.site.siteMetadata }} />
        </Layout>
    );
};

export const query = graphql`
    query SuccessStoriesPageQuery {
        allGeneral {
            nodes {
                section
                ...HeaderOne
            }
        }
        site {
            ...Site
        }
        page(title: { eq: "it-solutions" }, pageType: { eq: "innerpage" }) {
            content {
                ...PageContent
            }
        }
        allItSolution {
            nodes {
                ...ItSolutionThree
            }
        }
        allContentfulCase(filter: {node_locale: {eq: "zh-CN"}}) {
            nodes {
                name
                remark:challenges {
                    childMarkdownRemark {
                        html
                    }
                }
            }
        }
    }
`;

SuccessStoriesPage.propTypes = {
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
        allItSolution: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export default SuccessStoriesPage;
