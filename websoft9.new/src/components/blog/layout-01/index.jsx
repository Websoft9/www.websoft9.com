import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import Anchor from "@ui/anchor";
import Button from "@ui/button";
import Text from "@ui/text";
import Image from "@ui/image";
import BlogMeta from "../blog-meta";
import VideoThumb from "../video-thumb";
import BlogQuote from "../blog-quote";
import { BlogFormatType, BlogPostedAtType, ImageType } from "@utils/types";
import {
    BlogWrapper,
    BlogMedia,
    BlogThumb,
    BlogInfo,
    BlogHeader,
    BlogTitle,
    BlogExcerpt,
    ReadMoreBtn,
} from "./style";

const Blog = ({
    title,
    postedAt,
    format,
    image,
    quote_text,
    quote_author,
    video_link,
    excerpt,
    slug,
    className,
    ...restProps
}) => {
    return (
        <BlogWrapper className={cn(className, "blog")} {...restProps}>
            <BlogMedia>
                {format === "image" && image?.src && (
                    <BlogThumb>
                        <Anchor path={`/${slug}`}>
                            <Image src={image.src} alt={image?.alt || title} />
                        </Anchor>
                    </BlogThumb>
                )}
                {format === "quote" && (
                    <BlogQuote>
                        {quote_text && <h3>{quote_text}</h3>}
                        {quote_author && <footer>-{quote_author}</footer>}
                    </BlogQuote>
                )}
                {format === "video" && (
                    <VideoThumb
                        video_link={video_link}
                        poster={image}
                        title={title}
                    />
                )}
            </BlogMedia>
            <BlogInfo>
                <BlogHeader>
                    {postedAt && (
                        <BlogMeta
                            mb="7px"
                            path={`/date/${postedAt.slug}`}
                            text={postedAt.date}
                            icon="far fa-calendar-alt"
                        />
                    )}
                    {title && (
                        <BlogTitle>
                            <Anchor path={`/${slug}`}>{title}</Anchor>
                        </BlogTitle>
                    )}
                </BlogHeader>
                {excerpt && (
                    <BlogExcerpt>
                        <Text>{excerpt}</Text>
                    </BlogExcerpt>
                )}
                <ReadMoreBtn>
                    <Button
                        icon="far fa-long-arrow-right"
                        path={`/${slug}`}
                        variant="texted"
                        icondistance="4px"
                        fontWeight={500}
                    >
                        Read More
                    </Button>
                </ReadMoreBtn>
            </BlogInfo>
        </BlogWrapper>
    );
};

Blog.propTypes = {
    title: PropTypes.string,
    path: PropTypes.string,
    postedAt: PropTypes.shape(BlogPostedAtType),
    image: PropTypes.shape(ImageType),
    excerpt: PropTypes.string,
    format: BlogFormatType,
    quote_text: PropTypes.string,
    quote_author: PropTypes.string,
    video_link: PropTypes.string,
    slug: PropTypes.string,
    className: PropTypes.string,
};

export default Blog;
