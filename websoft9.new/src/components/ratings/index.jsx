import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { RatingsWrap } from "./style";

const Ratings = ({ rating, className, ...restProps }) => {
    const ratingRound = Math.round(rating);
    const ratingItems = [];
    const disableRating = [];
    for (let i = 1; i <= ratingRound; i++) {
        ratingItems.push(<i className="fa fa-star" key={`rating-${i}`}></i>);
    }

    if (rating < 5) {
        for (let i = 1; i <= 5 - ratingRound; i++) {
            disableRating.push(
                <i
                    className="disable fa fa-star"
                    key={`disable-rating-${i}`}
                ></i>
            );
        }
    }
    return (
        <RatingsWrap className={cn(className, "ratings")} {...restProps}>
            {ratingItems}
            {disableRating}
        </RatingsWrap>
    );
};

Ratings.propTypes = {
    rating: PropTypes.number.isRequired,
    className: PropTypes.string,
};

export default Ratings;
