import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { DiscussionEmbed } from "disqus-react";
import { CommentWrap, SectionTItle } from "./style";

const Comment = ({ url, id, title, siteUrl, className }) => {
    const disqusShortname = "mitech-1";
    const disqusConfig = {
        url: siteUrl + url,
        identifier: id,
        title: title,
    };
    return (
        <CommentWrap className={cn(className, "comments")}>
            <SectionTItle>
                <h3>Leave your thought here</h3>
                <p>
                    Your email address will not be published. Required fields
                    are marked *
                </p>
            </SectionTItle>
            <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
            />
        </CommentWrap>
    );
};

Comment.propTypes = {
    url: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    siteUrl: PropTypes.string,
    className: PropTypes.string,
};

export default Comment;
