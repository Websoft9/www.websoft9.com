import PropTypes from "prop-types";
import Button from "@ui/button";
import {
    StyledMessageBox,
    StyledIcon,
    StyledContent,
    StyledHeading,
} from "./style";

const MessageBox = ({ text, linkText, link }) => {
    return (
        <StyledMessageBox>
            <StyledIcon>
                <i className="far fa-comment-alt-dots"></i>
            </StyledIcon>
            <StyledContent>
                <StyledHeading>{text}</StyledHeading>
                <Button path={link} size="small">
                    {linkText}
                </Button>
            </StyledContent>
        </StyledMessageBox>
    );
};

MessageBox.propTypes = {
    text: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

MessageBox.defaultProps = {
    link: "#!",
};

export default MessageBox;
