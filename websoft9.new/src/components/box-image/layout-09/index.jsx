import PropTypes from "prop-types";
import Image from "@ui/image";
import { ImageType } from "@utils/types";
import {
    StyledWrap,
    StyledInner,
    StyledImage,
    StyledTitle,
    StyledMoreLink,
} from "./style";

const BoxImage = ({ image, title, desc, path, className }) => {
    return (
        <StyledWrap className={className}>
            <StyledInner>
                {image?.src && (
                    <StyledImage>
                        <Image src={image.src} alt={image?.alt || title} />
                    </StyledImage>
                )}
                <div className="content">
                    <StyledTitle>{title}</StyledTitle>
                    <p>{desc}</p>
                    <StyledMoreLink path={path}>
                        Learn more <i className="far fa-long-arrow-right"></i>
                    </StyledMoreLink>
                </div>
            </StyledInner>
        </StyledWrap>
    );
};

BoxImage.propTypes = {
    image: PropTypes.shape(ImageType),
    title: PropTypes.string,
    desc: PropTypes.string,
    path: PropTypes.string,
    className: PropTypes.string,
};

export default BoxImage;
