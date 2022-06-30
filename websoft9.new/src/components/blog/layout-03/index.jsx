import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import Image from "@ui/image";
import Button from "@ui/button";
import Anchor from "@ui/anchor";
import { ImageType, BlogPostedAtType, AuthorType } from "@utils/types";
import AuthorMeta from "../author-meta";
import BlogMeta from "../blog-meta";
import VideoThumb from "../video-thumb";
import BlogQuote from "../blog-quote";
import {
    BlogWrapper,
    BlogMedia,
    BlogThumb,
    BlogHeaderMeta,
    BlogInfo,
    BlogTitle,
    BlogExcerpt,
    ReadMoreBtn,
    BlogQuoteMeta,
} from "./style";

const Blog = ({
    title,
    format,
    slug,
    postedAt,
    author,
    image,
    excerpt,
    quote_text,
    quote_author,
    video_link,
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
                {format !== "quote" && (
                    <BlogHeaderMeta>
                        {author && (
                            <AuthorMeta
                                color="#fff"
                                mx="8px"
                                slug={author.slug}
                                name={author.name}
                                image={author.image}
                            />
                        )}
                        {postedAt && (
                            <BlogMeta
                                mx="8px"
                                color="#fff"
                                path={`/date/${postedAt.slug}`}
                                text={postedAt.date}
                                icon="far fa-calendar-alt"
                            />
                        )}
                    </BlogHeaderMeta>
                )}
                {format === "quote" && (
                    <BlogQuoteMeta>
                        {postedAt && (
                            <BlogMeta
                                mx="8px"
                                path={`/date/${postedAt.slug}`}
                                text={postedAt.date}
                                icon="far fa-calendar-alt"
                            />
                        )}
                    </BlogQuoteMeta>
                )}
            </BlogMedia>
            <BlogInfo>
                {title && (
                    <BlogTitle>
                        <Anchor to={`/${slug}`}>{title}</Anchor>
                    </BlogTitle>
                )}
                {excerpt && <BlogExcerpt>{excerpt}</BlogExcerpt>}
                <ReadMoreBtn>
                    <Button
                        to={`/${slug}`}
                        icon="far fa-long-arrow-right"
                        variant="texted"
                        icondistance="4px"
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
    postedAt: PropTypes.shape(BlogPostedAtType),
    image: PropTypes.shape(ImageType),
    excerpt: PropTypes.string,
    format: PropTypes.string,
    slug: PropTypes.string,
    author: PropTypes.shape(AuthorType),
    quote_text: PropTypes.string,
    quote_author: PropTypes.string,
    video_link: PropTypes.string,
    className: PropTypes.string,
};

export default Blog;
