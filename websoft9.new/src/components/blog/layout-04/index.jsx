import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import Anchor from "@ui/anchor";
import Image from "@ui/image";
import { truncateString } from "@utils";
import { ImageType, BlogPostedAtType, AuthorType } from "@utils/types";
import AuthorMeta from "../author-meta";
import BlogMeta from "../blog-meta";
import VideoThumb from "../video-thumb";
import BlogQuote from "../blog-quote";
import {
    BlogWrapper,
    BlogMedia,
    BlogThumb,
    BlogThumbMeta,
    BlogInfo,
    BlogHeaderMeta,
    BlogTitle,
} from "./style";

const Blog = ({
    format,
    title,
    slug,
    author,
    image,
    postedAt,
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
                {format === "quote" && (
                    <BlogQuote color="dark" size="small" shape="rounded" />
                )}
                {format === "video" && (
                    <VideoThumb
                        video_link={video_link}
                        poster={image}
                        title={title}
                        shape="rounded"
                        size="small"
                    />
                )}
                {author && (
                    <BlogThumbMeta>
                        <AuthorMeta
                            slug={author.slug}
                            name={author.name}
                            image={author.image}
                            color="#fff"
                        />
                    </BlogThumbMeta>
                )}
            </BlogMedia>
            <BlogInfo>
                {postedAt && (
                    <BlogHeaderMeta>
                        <BlogMeta
                            path={`/date/${postedAt.slug}`}
                            text={postedAt.date}
                            icon="far fa-calendar"
                        />
                    </BlogHeaderMeta>
                )}
                {title && (
                    <BlogTitle>
                        <Anchor path={`/${slug}`}>
                            {truncateString(title, 33)}
                        </Anchor>
                    </BlogTitle>
                )}
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
    dateSlug: PropTypes.string,
    author: PropTypes.shape(AuthorType),
    quote_text: PropTypes.string,
    quote_author: PropTypes.string,
    video_link: PropTypes.string,
    className: PropTypes.string,
};

export default Blog;
