import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import Social, { SocialLink } from "@ui/social";
import Text from "@ui/text";
import Button from "@ui/button";
import { SocialShareWrap, SocialMediaWrap, FloatingSocialBox } from "./style";

const SocialShare = ({ title, slug, siteUrl, layout, className, ...rest }) => {
    const [socialOpen, setSocialOpen] = useState(false);
    const socialHandler = () => {
        setSocialOpen((prev) => !prev);
    };

    return (
        <SocialShareWrap
            className={cn("social-share", className)}
            $layout={layout}
            {...rest}
        >
            <Text as="span" className="share-label">
                Share this post
            </Text>
            <SocialMediaWrap className="social-btn">
                <Button
                    onClick={socialHandler}
                    variant="onlyIcon"
                    shape="circle"
                >
                    <i className="far fa-share-alt"></i>
                </Button>
                <FloatingSocialBox isOpen={socialOpen}>
                    <Social space="14px">
                        <SocialLink
                            path={`https://twitter.com/intent/tweet?status=${title}+${
                                siteUrl + slug
                            }`}
                        >
                            <i className="fab fa-twitter"></i>
                        </SocialLink>
                        <SocialLink
                            path={`https://www.facebook.com/share.php?u=${
                                siteUrl + slug
                            }&title=${title}`}
                        >
                            <i className="fab fa-facebook"></i>
                        </SocialLink>
                        <SocialLink
                            path={`https://www.linkedin.com/shareArticle?mini=true&url=${
                                siteUrl + slug
                            }&title=${title}`}
                        >
                            <i className="fab fa-linkedin"></i>
                        </SocialLink>
                    </Social>
                </FloatingSocialBox>
            </SocialMediaWrap>
        </SocialShareWrap>
    );
};

SocialShare.propTypes = {
    title: PropTypes.string,
    slug: PropTypes.string,
    siteUrl: PropTypes.string,
    layout: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

SocialShare.defaultProps = {
    layout: 1,
};

export default SocialShare;
