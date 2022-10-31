import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useI18next } from 'gatsby-plugin-react-i18next';
import PropTypes from "prop-types";
import React from "react";
import { LogoWrapper } from "./style";

const Logo = ({ className, variant, ...restProps }) => {
    const {language } = useI18next();
    return (
        <LogoWrapper className={className} $variant={variant} {...restProps}>
            {
                language == "en-US"  ? 
                <Link to="/">
                    <StaticImage
                        src="../../assets/images/logo/w9.svg"
                        className="img-fluid static-img light-logo"
                        alt="logo"
                    />
                    <StaticImage
                        src="../../assets/images/logo/w9.svg"
                        className="img-fluid static-img dark-logo"
                        alt="logo"
                    />
                </Link>
                :
                <Link to="/">
                    <StaticImage
                        src="../../assets/images/logo/源生云.svg"
                        className="img-fluid static-img light-logo"
                        alt="logo"
                    />
                    <StaticImage
                        src="../../assets/images/logo/源生云.svg"
                        className="img-fluid static-img dark-logo"
                        alt="logo"
                    />
                </Link>
            }
            
        </LogoWrapper>
    );
};

Logo.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(["white", "dark"]),
};

Logo.defaultProps = {
    justifyContent: "flex-start",
    variant: "dark",
};

export default Logo;
