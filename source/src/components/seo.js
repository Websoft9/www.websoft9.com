import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
    keywords,
    description,
    lang,
    image: metaImage,
    title,
    titleTemplate,
    pathname,
    canonical,
    nextPage,
    prevPage,
    rootPath,
    isBlogPost,
}) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                        siteLanguage
                        image
                        titleTemplate
                        keywords
                    }
                }
            }
        `
    );

    let keywordsString = "";
    keywords && keywords.map((key) => {
        if (typeof (key.name) == "undefined") {
            keywordsString += key + ",";
        }
        else {
            keywordsString += key.name + ",";
        }

    })
    if (keywordsString.length > 0) {
        keywordsString = keywordsString.substring(0, keywordsString.length - 1);
    }
    else {
        keywordsString = keywords;
    }

    const metakeywords = keywordsString || site.siteMetadata.keywords;
    const metaTitle = title || site.siteMetadata.title;
    const template = titleTemplate || site.siteMetadata.titleTemplate;
    const metaDescription = description || site.siteMetadata.description;
    const language = lang || site.siteMetadata.siteLanguage;
    const siteUrl = site.siteMetadata.siteUrl.replace(/\/$/, "");
    const bannerImage =
        metaImage && metaImage.src
            ? `${siteUrl}/${metaImage.src}`
            : `${siteUrl}/${site.siteMetadata.image}`;
    const canonicalLink = canonical || site.siteMetadata.canonical;
    const imgWidth = metaImage?.width ? metaImage.width : 875;
    const imgHeight = metaImage?.height ? metaImage.height : 554;
    const rootUrl = siteUrl + rootPath;
    const prevLink = prevPage && prevPage !== null && rootUrl + prevPage;
    const nextLink = nextPage && nextPage !== null && rootUrl + nextPage;
    let siteTitle;
    if (pathname === "/") {
        siteTitle = `${site.siteMetadata.titleTemplate} | ${site.siteMetadata.title}`;
    } else {
        siteTitle = `${template} | ${metaTitle}`;
    }

    const basSchema = [
        {
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`,
            name: `${siteTitle}`,
            url: siteUrl,
            logo: {
                "@type": "ImageObject",
                url: site.siteMetadata.logo,
            },
        },
        {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            url: siteUrl,
            name: `${siteTitle}`,
            publisher: {
                "@id": `${siteUrl}/#organization`,
            },
            inLanguage: language,
            potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/?s={search_term_string}`,
                "query-input": "required name=search_term_string",
            },
        },
    ];

    const schemaOrgWebPage = {
        "@context": "http://schema.org",
        "@graph": [...basSchema],
    };

    return (
        <Helmet
            htmlAttributes={{
                lang: language,
            }}
        >
            {/* General tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metakeywords} />
            <meta name="image" content={bannerImage} />
            <link rel="canonical" href={canonicalLink} />
            <meta
                name="robots"
                content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
            />
            {prevLink && <link rel="prev" href={prevLink} />}
            {nextLink && <link rel="next" href={nextLink} />}

            {/* OpenGraph tags */}
            <meta property="og:locale" content={language} />
            {isBlogPost ? <meta property="og:type" content="article" /> : null}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalLink} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:keywords" content={metakeywords} />
            <meta property="og:image" content={bannerImage} />
            <meta property="og:image:secure_url" content={bannerImage} />
            <meta property="og:image:width" content={`${imgWidth}px`} />
            <meta property="og:image:height" content={`${imgHeight}px`} />
            <meta property="og:image:alt" content={siteTitle} />
            <meta property="og:image:type" content="image/png" />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta
                name="twitter:creator"
                content={site.siteMetadata.twitterUsername}
            />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:keywords" content={metakeywords} />
            <meta name="twitter:image" content={bannerImage} />

            <script type="application/ld+json">
                {JSON.stringify(schemaOrgWebPage)}
            </script>
        </Helmet>
    );
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    titleTemplate: PropTypes.string,
    pathname: PropTypes.string,
    canonical: PropTypes.string,
    nextPage: PropTypes.string,
    prevPage: PropTypes.string,
    rootPath: PropTypes.string,
    isBlogPost: PropTypes.bool,
};

SEO.defaultProps = {
    lang: `en`,
    description: ``,
};

export default SEO;
