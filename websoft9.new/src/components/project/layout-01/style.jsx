import styled, { device } from "@styled";

export const StyledProject = styled.div`
    position: relative;
`;

export const StyledImage = styled.div`
    position: relative;
    .thumb-image {
        img {
            border-radius: 5px;
        }
    }
`;

export const StyledLogo = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
`;

export const StyledContent = styled.div`
    margin-top: 10px;
`;

export const StyledTitle = styled.h5`
    font-size: 20px;
    line-height: 1.5;
    margin: 0;
`;
