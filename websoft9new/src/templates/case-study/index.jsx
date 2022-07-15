import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-02";
import Footer from "@layout/footer/layout-01";
import IntroArea from "@containers/intro/layout-02";
import SolutionArea from "@containers/solution/layout-02";
import ResultArea from "@containers/result/layout-01";
import FaqArea from "@containers/faq/layout-02";
import NavigationArea from "@containers/navigation/layout-01";
import TestimonialArea from "@containers/testimonial/layout-02";
import CtaArea from "@containers/cta/layout-04";
import Image from "@ui/image";
import { ImageType } from "@utils/types";
import {
    BannerArea,
    StyledBannerTextWrap,
    StyledTagline,
    StyledBG,
} from "./style";

const CaseStudyTemplate = ({ location, data, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral.nodes || []);
    const content = normalizedData(data?.caseStudy?.content || []);
    const pageData = data.caseStudy;

    return (
        <Layout location={location}>
            <Seo title="Appointment" />
            <Header
                data={{
                    ...globalContent["header"],
                    ...globalContent["menu"],
                    socials: data.site.siteMetadata.socials,
                }}
            />
            <main className="site-wrapper-reveal">
                <BannerArea>
                    {pageData.banner_image?.src && (
                        <StyledBG>
                            <Image
                                src={pageData.banner_image.src}
                                alt={
                                    pageData.banner_image?.alt || "Banner Image"
                                }
                            />
                        </StyledBG>
                    )}
                    <StyledBannerTextWrap>
                        {pageData?.logo && (
                            <Image
                                src={pageData.logo.src}
                                alt={pageData.logo?.alt || pageData?.tagline}
                            />
                        )}
                        {pageData?.tagline && (
                            <StyledTagline>{pageData.tagline}</StyledTagline>
                        )}
                    </StyledBannerTextWrap>
                </BannerArea>
                <IntroArea data={content["intro-section"]} />
                <SolutionArea data={content["solution-section"]} />
                <ResultArea data={content["result-section"]} />
                <FaqArea space={2} data={content["faq-section"]} />
                <TestimonialArea data={content["testimonial-section"]} />
                <NavigationArea
                    data={{
                        previous: pageContext.previous,
                        next: pageContext.next,
                    }}
                />
                <CtaArea data={content["cta-section"]} />
            </main>
            <Footer data={{ ...data.site.siteMetadata }} />
        </Layout>
    );
};

export const query = graphql`
    query CaseStudyDetailsQuery($slug: String) {
        allGeneral {
            nodes {
                section
                ...HeaderTwo
            }
        }
        site {
            ...Site
        }
        caseStudy(slug: { eq: $slug }) {
            banner_image {
                alt
                src {
                    childImageSharp {
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            quality: 100
                            placeholder: DOMINANT_COLOR
                            formats: WEBP
                        )
                    }
                }
            }
            logo {
                alt
                src {
                    childImageSharp {
                        gatsbyImageData(
                            quality: 100
                            placeholder: DOMINANT_COLOR
                            formats: WEBP
                        )
                    }
                }
            }
            tagline
            content {
                section
                headings {
                    level
                    content
                }
                texts {
                    content
                }
                tags
                client {
                    name
                    designation
                    company
                }
                section_title {
                    title
                    subtitle
                }
                video_button {
                    link
                }
                buttons {
                    id
                    path
                    content
                    variant
                    color
                    shape
                    size
                    hoverStyle
                    disableHover
                    icon
                    icondistance
                    iconposition
                    fontWeight
                }
                images {
                    alt
                    src {
                        childImageSharp {
                            gatsbyImageData(
                                quality: 100
                                formats: WEBP
                                placeholder: DOMINANT_COLOR
                            )
                        }
                    }
                }
                items {
                    id
                    title
                    description
                    name
                    designation
                    rating
                    images {
                        alt
                        src {
                            childImageSharp {
                                gatsbyImageData(
                                    quality: 100
                                    formats: WEBP
                                    placeholder: DOMINANT_COLOR
                                )
                            }
                        }
                    }
                }
            }
        }
    }
`;

CaseStudyTemplate.propTypes = {
    location: PropTypes.shape({}),
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                socials: PropTypes.arrayOf(PropTypes.shape({})),
            }),
        }),
        caseStudy: PropTypes.shape({
            banner_image: PropTypes.shape(ImageType),
            logo: PropTypes.shape(ImageType),
            tagline: PropTypes.string,
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
    pageContext: PropTypes.shape({
        next: PropTypes.shape({}),
        previous: PropTypes.shape({}),
    }),
};

export default CaseStudyTemplate;
