import Button from "@ui/button";
import Image from "@ui/image";
import cn from "clsx";
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from "react";
import {
    PricingTableBody,
    PricingTableBtn, PricingTableFeatureMark, PricingTableHead, PricingTableImage, PricingTableInner, PricingTableList, PricingTablePrice, PricingTableTitle, PricingTableWrap
} from "./style";

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
                    {price && (
                        <PricingTablePrice>
                            {/* <sup>{"$"}</sup> */}
                            <sup>{price.substring(0,1)}</sup>
                            <h6>{price.substring(1)}</h6>
                            <sub>/{period === "monthly" ? t("mo") : t("y")}</sub>
                        </PricingTablePrice>
                    )}
                    
                    {/* <PricingTablePrice>
                        <sup>{"$"}</sup>
                        <h6>{price}</h6>
                        <sub>/{period === "monthly" ? "mo" : "y"}</sub>
                    </PricingTablePrice> */}
                    
                </PricingTableHead>
                <PricingTableBody>
                    {path && (
                        <PricingTableBtn>
                            <Button
                                variant={!isFeatured ? "outlined" : "contained"}
                                path={path.value}
                            >
                                {path.key}
                                {/* {t("Learn More")} */}
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


export default PricingTable;
