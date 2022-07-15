import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import Image from "@ui/image";
import VideoThumb from "@components/blog/video-thumb";
import BlogQuote from "@components/blog/blog-quote";
import { BlogFormatType, ImageType } from "@utils/types";
import { StyledMedia, StyledThumb } from "./style";

const BlogMedia = ({
    format,
    image,
    video_link,
    quote_text,
    quote_author,
    className,
    title,
    ...rest
}) => {
    return (
        <StyledMedia className={cn("Blog-media", className)} {...rest}>
            {format === "image" && image?.src && (
                <StyledThumb>
                    <Image src={image.src} alt={image?.alt || title} />
                </StyledThumb>
            )}
            {format === "video" && (
                <VideoThumb
                    video_link={video_link}
                    poster={image}
                    title={title}
                />
            )}
            {format === "quote" && (
                <BlogQuote>
                    {quote_text && <h3>{quote_text}</h3>}
                    {quote_author && <footer>-{quote_author}</footer>}
                </BlogQuote>
            )}
        </StyledMedia>
    );
};

BlogMedia.propTypes = {
    format: BlogFormatType,
    image: PropTypes.shape(ImageType),
    video_link: PropTypes.string,
    quote_text: PropTypes.string,
    quote_author: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
};

export default BlogMedia;
