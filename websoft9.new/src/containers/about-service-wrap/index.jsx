import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { AboutServiceWrapStyle, StyledImage } from "./style";

const AboutServiceWrap = ({ children }) => {
    return (
        <AboutServiceWrapStyle>
            <StyledImage>
                <StaticImage
                    src="../../assets/images/bg/mitech-home-infotechno-section-company-bg.png"
                    alt="About Bg"
                />
            </StyledImage>
            {children}
        </AboutServiceWrapStyle>
    );
};

AboutServiceWrap.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AboutServiceWrap;
