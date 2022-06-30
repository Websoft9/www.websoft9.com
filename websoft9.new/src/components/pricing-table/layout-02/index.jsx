import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import Button from "@ui/button";
import {
    PricingTableWrap,
    PricingTableInner,
    PricingTableHeader,
    PricingTableTitle,
    PricingTablePrice,
    PricingTableBody,
    PricingTableList,
    PricingTableFeatureMark,
    PricingTableFooter,
} from "./style";

const PricingTable = ({
    title,
    price,
    period,
    isFeatured,
    path,
    features,
    className,
    ...restProps
}) => {
    return (
        <PricingTableWrap
            className={cn(className, "pricing-table")}
            isFeatured={isFeatured}
            {...restProps}
        >
            <PricingTableInner>
                {isFeatured && (
                    <PricingTableFeatureMark>
                        <span>Popular Choice</span>
                    </PricingTableFeatureMark>
                )}
                <PricingTableHeader>
                    {title && <PricingTableTitle>{title}</PricingTableTitle>}
                    {(price || price === 0) && (
                        <PricingTablePrice>
                            <sup>$</sup>
                            <h6>{price}</h6>
                            <sub>/{period === "monthly" ? "mo" : "y"}</sub>
                        </PricingTablePrice>
                    )}
                </PricingTableHeader>
                <PricingTableBody>
                    {features && (
                        <PricingTableList>
                            {features.map((feature) => (
                                <li key={feature.id}>
                                    <span>{feature.text}</span>
                                </li>
                            ))}
                        </PricingTableList>
                    )}
                </PricingTableBody>
                <PricingTableFooter>
                    {path && (
                        <Button skin="secondary" to={path}>
                            Learn More
                        </Button>
                    )}
                </PricingTableFooter>
            </PricingTableInner>
        </PricingTableWrap>
    );
};

PricingTable.propTypes = {
    title: PropTypes.string,
    period: PropTypes.string,
    image: PropTypes.shape({}),
    price: PropTypes.number,
    isFeatured: PropTypes.bool,
    path: PropTypes.string,
    features: PropTypes.array,
    className: PropTypes.string,
};

export default PricingTable;
