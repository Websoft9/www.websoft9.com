import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import Image from "@ui/image";
import Button from "@ui/button";
import Text from "@ui/text";
import Anchor from "@ui/anchor";
import SocialShare from "../social-share";
import AuthorMeta from "../author-meta";
import BlogMeta from "../blog-meta";
import Categories from "../categories";
import VideoThumb from "../video-thumb";
import BlogQuote from "../blog-quote";
import {
    BlogFormatType,
    BlogPostedAtType,
    ImageType,
    AuthorType,
    BlogMetaType,
} from "@utils/types";

import {
    BlogWrapper,
    BlogMedia,
    BlogThumb,
    BlogTitle,
    BlogHeaderMeta,
    BlogExcerpt,
    BlogFooter,
    BlogFooterLeft,
    BlogFooterRight,
} from "./style";

const Blog = ({
    title,
    format,
    image,
    quote_text,
    quote_author,
    video_link,
    excerpt,
    slug,
    postedAt,
    author,
    categories,
    className,
    siteUrl,
}) => {
    return (
        <article className={cn(className, "blog")}>
            <BlogMedia>
                {format === "image" && image?.src && (
                    <BlogThumb>
                        <Anchor path={`/${slug}`}>
                            <Image src={image.src} alt={image?.alt || title} />
                        </Anchor>
                    </BlogThumb>
                )}
                {format === "quote" && (
                    <BlogQuote size="xlarge">
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
            <div className="blog-info">
                <header className="blog-header">
                    {categories && (
                        <Categories mb="18px" categories={categories} />
                    )}
                    {title && (
                        <BlogTitle>
                            <Anchor path={`/${slug}`}>{title}</Anchor>
                        </BlogTitle>
                    )}
                    <BlogHeaderMeta>
                        {author && (
                            <AuthorMeta
                                mt="10px"
                                mr="20px"
                                slug={author.slug}
                                name={author.name}
                                image={author.image}
                            />
                        )}
                        {postedAt && (
                            <BlogMeta
                                mt="10px"
                                mr="20px"
                                path={`/date/${postedAt.slug}`}
                                text={postedAt.date}
                                icon="far fa-calendar-alt"
                            />
                        )}
                    </BlogHeaderMeta>
                </header>
                {excerpt && (
                    <BlogExcerpt>
                        <Text>{excerpt}</Text>
                    </BlogExcerpt>
                )}
                <BlogFooter>
                    <BlogFooterLeft>
                        <Button path={`/${slug}`}>Read More</Button>
                    </BlogFooterLeft>
                    <BlogFooterRight>
                        <SocialShare
                            siteUrl={siteUrl}
                            slug={`/${slug}`}
                            title={title}
                        />
                    </BlogFooterRight>
                </BlogFooter>
            </div>
        </article>
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
    author: PropTypes.shape(AuthorType),
    categories: PropTypes.arrayOf(PropTypes.shape(BlogMetaType)),
    siteUrl: PropTypes.string,
    className: PropTypes.string,
};

export default Blog;
