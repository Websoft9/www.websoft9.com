import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import { ImageType } from "@utils/types";
import {
    TestimonialWrap,
    TestimonialInfo,
    TestimonialMedia,
    TestimonialAuthor,
    TestimonialRating,
    AuthorInfo,
    AuthorName,
    AuthorRole,
    Review,
} from "./style";

const Testimonial = ({
    authorName,
    authroRole,
    authorImg,
    rating,
    review,
    ...rest
}) => {
    const ratingItems = [];
    const disableRating = [];
    for (let i = 1; i <= rating; i++) {
        ratingItems.push(
            <span key={`rating-${i}`}>
                <i className="rating fa fa-star"></i>
            </span>
        );
    }

    if (rating < 5) {
        for (let i = 1; i <= 5 - rating; i++) {
            disableRating.push(
                <span key={`disable-rating-${i}`}>
                    <i className="rating disable fa fa-star"></i>
                </span>
            );
        }
    }

    return (
        <TestimonialWrap {...rest}>
            <TestimonialInfo>
                {authorImg?.src && (
                    <TestimonialMedia>
                        <Image
                            src={authorImg.src}
                            alt={authorImg?.alt || authorName}
                        />
                    </TestimonialMedia>
                )}
                <TestimonialAuthor>
                    {rating && (
                        <TestimonialRating>
                            {ratingItems}
                            {disableRating}
                        </TestimonialRating>
                    )}
                    <AuthorInfo>
                        {authorName && <AuthorName>{authorName}</AuthorName>}
                        {authroRole && <AuthorRole>{authroRole}</AuthorRole>}
                    </AuthorInfo>
                </TestimonialAuthor>
            </TestimonialInfo>
            {review && <Review>{review}</Review>}
        </TestimonialWrap>
    );
};

Testimonial.propTypes = {
    authorImg: PropTypes.shape(ImageType),
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    authorName: PropTypes.string,
    authroRole: PropTypes.string,
    review: PropTypes.string,
};

export default Testimonial;
