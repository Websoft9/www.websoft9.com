import { Link } from "gatsby";
import { useI18next } from 'gatsby-plugin-react-i18next';
import PropTypes from "prop-types";
import React from "react";
import Logo1 from "../../assets/images/logo/w9.svg";
import Logo2 from "../../assets/images/logo/源生云.svg";
import { LogoWrapper } from "./style";

const Logo = ({ className, variant, ...restProps }) => {
    const {language } = useI18next();
    return (
        <LogoWrapper className={className} $variant={variant} {...restProps}>
            {
                language == "en-US"  ? 
                <Link to="/">
                    {/* <StaticImage
                        src="../../assets/images/logo/w9.svg"
                        className="img-fluid static-img dark-logo"
                        alt="websoft9"
                    /> */}
                        <img
                            src={Logo1}
                            alt="websoft9"
                        />
                </Link>
                :
                <Link to="/">
                    {/* <StaticImage
                        src="../../assets/images/logo/源生云.svg"
                        className="img-fluid static-img dark-logo"
                        alt="源生云"
                    /> */}
                        <img
                            src={Logo2}
                            alt="源生云"
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
