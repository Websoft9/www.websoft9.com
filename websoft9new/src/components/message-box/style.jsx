import styled, { space, themeGet, device } from "@styled";

export const StyledMessageBox = styled.div`
    max-width: 630px;
    margin: auto;
    border-radius: 5px;
    background-color: ${themeGet("colors.water")};
    padding: 28px 35px;
    position: relative;
`;

export const StyledIcon = styled.div`
    font-size: 24px;
    width: 64px;
    height: 64px;
    display: inline-block;
    border-radius: 50%;
    text-align: center;
    line-height: 64px;
    background: #fff;
    box-shadow: 0 18px 40px rgba(51, 51, 51, 0.1);
    position: absolute;
    top: -43px;
    left: 5px;
    color: ${themeGet("colors.primary")};
    ${device.medium} {
        top: -35px;
        left: -35px;
    }
`;

export const StyledContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    ${device.small} {
        flex-direction: row;
    }
`;

export const StyledHeading = styled.h6`
    max-width: 350px;
    margin-bottom: 30px;
    ${device.small} {
        max-width: 280px;
        margin-bottom: 0;
    }
`;
