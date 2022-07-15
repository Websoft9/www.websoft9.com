import styled, { device, themeGet } from "@styled";

export const OurMissionWrap = styled.div`
    margin-block-start: 60px;
    ${device.medium} {
        margin-block-start: 70px;
    }
`;

export const OurMissionImageWrap = styled.div`
    position: relative;
    img {
        border-radius: ${themeGet("radii.md")};
    }
`;

export const MissionContentWrap = styled.div`
    margin-block-start: 30px;
    ${device.large} {
        margin-block-start: 0;
    }
`;

export const VideoBtnWrap = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const ButtonWrap = styled.div`
    margin-block-start: 40px;
`;
