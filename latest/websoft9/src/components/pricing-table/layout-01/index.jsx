import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import Image from "@ui/image";
import Button from "@ui/button";
import { ImageType } from "@utils/types";
import {
    PricingTableWrap,
    PricingTableInner,
    PricingTableHead,
    PricingTableTitle,
    PricingTableImage,
    PricingTablePrice,
    PricingTableBody,
    PricingTableBtn,
    PricingTableList,
    PricingTableFeatureMark,
} from "./style";
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next';

const PricingTable = ({
    title,
    period,
    image,
    price,
    isFeatured,
    path,
    features,
    className,
}) => {
    const {t} = useTranslation();
    return (
        <PricingTableWrap className={cn(className, "pricing-table")}>
            <PricingTableInner>
                {isFeatured && (
                    <PricingTableFeatureMark>
                        <span>Popular Choice</span>
                    </PricingTableFeatureMark>
                )}
                <PricingTableHead>
                    {title && <PricingTableTitle>{title}</PricingTableTitle>}
                    {image?.src && (
                        <PricingTableImage>
                            <Image src={image.src} alt={image?.alt || title} />
                        </PricingTableImage>
                    )}
                    {/* {price && (
                        <PricingTablePrice>
                            <sup>{"$"}</sup>
                            <h6>{price}</h6>
                            <sub>/{period === "monthly" ? "mo" : "y"}</sub>
                        </PricingTablePrice>
                    )} */}
                    
                    <PricingTablePrice>
                        <sup>{"$"}</sup>
                        <h6>{price}</h6>
                        <sub>/{period === "monthly" ? "mo" : "y"}</sub>
                    </PricingTablePrice>
                    
                </PricingTableHead>
                <PricingTableBody>
                    {path && (
                        <PricingTableBtn>
                            <Button
                                variant={!isFeatured ? "outlined" : "contained"}
                                path={path}
                            >
                                {t("Learn More")}
                            </Button>
                        </PricingTableBtn>
                    )}
                    {features && (
                        <PricingTableList>
                            {features.map((feature) => (
                                <li key={feature.id}>
                                    <i className="fa fa-check"></i>
                                    <span>{feature.title}</span>
                                </li>
                            ))}
                        </PricingTableList>
                    )}
                </PricingTableBody>
            </PricingTableInner>
        </PricingTableWrap>
    );
};

PricingTable.propTypes = {
    title: PropTypes.string,
    period: PropTypes.string,
    image: PropTypes.shape(ImageType),
    price: PropTypes.number,
    isFeatured: PropTypes.bool,
    path: PropTypes.string,
    features: PropTypes.array,
    className: PropTypes.string,
};

export default PricingTable;
