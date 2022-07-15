import React from "react";
import PropTypes from "prop-types";
import { Container } from "@ui/wrapper";
import PostNav from "@components/post-nav/layout-01";
import { ImageType } from "@utils/types";
import { Navigtion } from "./style";

const NavigationArea = ({ data }) => {
    return (
        <div className="navigation-area">
            <Container>
                <Navigtion>
                    {data?.previous && (
                        <PostNav
                            rel="prev"
                            slug={data?.previous.slug}
                            title={data?.previous.title}
                            image={data?.previous.featured_image}
                        />
                    )}
                    {data?.next && (
                        <PostNav
                            rel="next"
                            slug={data?.next.slug}
                            title={data?.next.title}
                            image={data?.next.featured_image}
                        />
                    )}
                </Navigtion>
            </Container>
        </div>
    );
};

NavigationArea.propTypes = {
    data: PropTypes.shape({
        previous: PropTypes.shape({
            slug: PropTypes.string,
            title: PropTypes.string,
            featured_image: PropTypes.shape(ImageType),
        }),
        next: PropTypes.shape({
            slug: PropTypes.string,
            title: PropTypes.string,
            featured_image: PropTypes.shape(ImageType),
        }),
    }),
};

export default NavigationArea;
