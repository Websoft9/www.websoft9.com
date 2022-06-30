import styled, { themeGet, device } from "@styled";

export const StyledWrapper = styled.div`
    position: relative;
`;

export const StyledGrid = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: flex-start;
    padding-left: 55px;
    ${device.small} {
        padding-left: 0;
        justify-content: space-around;
    }
`;

export const StyledGridLine = styled.div`
    width: 2px;
    height: 100%;
    background-color: ${themeGet("colors.gray.400")};
    &:nth-child(n + 2) {
        display: none;
    }
    ${device.small} {
        &:nth-child(n + 2) {
            display: block;
        }
        &:nth-child(n + 3) {
            display: none;
        }
    }
    ${device.medium} {
        &:nth-child(n + 2) {
            display: block;
        }
    }
`;
