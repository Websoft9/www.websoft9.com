import PropTypes from "prop-types";
import { StyledWrap, StyledIcon, StyledHeading } from "./style";

const BoxIcon = ({ iconClass, title, description, color }) => (
    <StyledWrap $color={color}>
        <StyledIcon className="icon">
            <i className={iconClass} />
        </StyledIcon>
        <div className="content">
            <StyledHeading>{title}</StyledHeading>
            <p>{description}</p>
        </div>
    </StyledWrap>
);

BoxIcon.propTypes = {
    iconClass: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    color: PropTypes.string,
};

export default BoxIcon;
