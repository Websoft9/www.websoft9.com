import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import Anchor from "@ui/anchor";
import Image from "@ui/image";
import { ImageType } from "@utils/types";

const AdWidget = ({ data, className, ...rest }) => {
    return (
        <Anchor path={data.path} display={cn(className, "block")} {...rest}>
            {data?.images?.[0]?.src && (
                <Image
                    src={data.images[0].src}
                    alt={data.images[0]?.alt || "Ad"}
                />
            )}
        </Anchor>
    );
};

AdWidget.propTypes = {
    data: PropTypes.shape({
        path: PropTypes.string,
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
    className: PropTypes.string,
};

export default AdWidget;
