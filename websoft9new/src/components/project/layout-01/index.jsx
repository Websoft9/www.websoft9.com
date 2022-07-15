import PropTypes from "prop-types";
import Image from "@ui/image";
import Anchor from "@ui/anchor";
import { ImageType } from "@utils/types";
import {
    StyledProject,
    StyledImage,
    StyledLogo,
    StyledContent,
    StyledTitle,
} from "./style";

const Project = ({ title, images, path }) => {
    return (
        <StyledProject>
            <StyledImage>
                {images?.[0]?.src && (
                    <Image
                        src={images[0].src}
                        alt={images[0]?.alt || title}
                        className="thumb-image"
                    />
                )}
                {images?.[1]?.src && (
                    <StyledLogo>
                        <Image
                            src={images[1].src}
                            alt={images[1]?.alt || title}
                        />
                    </StyledLogo>
                )}
            </StyledImage>
            <StyledContent>
                <StyledTitle>{title}</StyledTitle>
            </StyledContent>
            {path && (
                <Anchor path={path} className="link-overlay">
                    {title}
                </Anchor>
            )}
        </StyledProject>
    );
};

Project.propTypes = {
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape(ImageType)).isRequired,
    path: PropTypes.string,
};

export default Project;
