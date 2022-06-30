import styled, { device, themeGet } from "@styled";

export const StyledSection = styled.section`
    padding-block: 60px;

    ${device.medium} {
        padding-block: 80px;
    }
    ${device.large} {
        padding-block: 100px;
    }
    ${device.xlarge} {
        padding-block: 120px;
    }
`;

export const StyledBlogWrap = styled.div`
    margin-inline: auto;
    max-width: 800px;
`;

export const StyledTitle = styled.h2`
    font-size: 25px;
    text-align: center;
    margin-block-end: 15px;
    word-wrap: break-word;
    ${device.medium} {
        font-size: 35px;
    }
    ${device.large} {
        font-size: 40px;
    }
`;

export const StyledHeaderMeta = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const StyledContent = styled.div`
    margin-block-start: 15px;
    blockquote {
        margin: 54px 65px 44px 70px;
        padding: 0 0 0 20px;
        font-size: 18px;
        line-height: 1.78;
        font-weight: 600;
        border-inline-start: 4px solid ${themeGet("colors.secondary")};
        position: relative;
        color: ${themeGet("colors.heading")};
        @media ${device.small} {
            font-size: 16px;
            margin: 50px 70px 44px;
        }
        @media ${device.xsmall} {
            margin: 40px 30px;
        }
    }
`;

export const StyledFooter = styled.footer`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-block-start: 16px;
    margin-block-end: 30px;
    padding-block-end: 20px;
    border-block-end: 1px solid rgb(237, 237, 237);
    ${device.medium} {
        margin-block-end: 50px;
    }
`;
