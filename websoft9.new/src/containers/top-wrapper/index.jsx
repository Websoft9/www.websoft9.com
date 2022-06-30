import PropTypes from "prop-types";
import { StyledWrapper, StyledGrid, StyledGridLine } from "./style";

const TopWrapper = ({ children }) => {
    return (
        <StyledWrapper className="top-wrapper">
            <StyledGrid>
                <StyledGridLine />
                <StyledGridLine />
                <StyledGridLine />
                <StyledGridLine />
            </StyledGrid>
            {children}
        </StyledWrapper>
    );
};

TopWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TopWrapper;
