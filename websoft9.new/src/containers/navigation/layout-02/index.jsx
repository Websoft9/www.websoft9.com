import React from "react";
import PropTypes from "prop-types";
import PostNav from "@components/post-nav/layout-02";
import { ImageType } from "@utils/types";
import { Navigtion } from "./style";

const NavigationArea = ({ data }) => {
    return (
        <Navigtion>
            {data?.previous && (
                <PostNav
                    rel="prev"
                    slug={data?.previous.slug}
                    title={data?.previous.title}
                    image={data?.previous.image}
                />
            )}
            {data?.next && (
                <PostNav
                    rel="next"
                    slug={data?.next.slug}
                    title={data?.next.title}
                    image={data?.next.image}
                />
            )}
        </Navigtion>
    );
};

NavigationArea.propTypes = {
    data: PropTypes.shape({
        previous: PropTypes.shape({
            slug: PropTypes.string,
            title: PropTypes.string,
            image: PropTypes.shape(ImageType),
        }),
        next: PropTypes.shape({
            slug: PropTypes.string,
            title: PropTypes.string,
            image: PropTypes.shape(ImageType),
        }),
    }),
};

export default NavigationArea;
