import React from "react";
import PropTypes from "prop-types";
import ClientLogo from "@ui/client-logo";
import { ItemType } from "@utils/types";
import { PartnersWrap, BrandLogoWrap } from "./style";

const PartnerArea = ({ data }) => {
    return (
        <PartnersWrap>
            {data?.items?.map((item) => (
                <BrandLogoWrap key={item.id}>
                    <ClientLogo
                        layout={1}
                        title={item.id}
                        path={item.path}
                        image={item.images?.[0]}
                        hoverImage={item.images?.[1]}
                    />
                </BrandLogoWrap>
            ))}
        </PartnersWrap>
    );
};

PartnerArea.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default PartnerArea;
