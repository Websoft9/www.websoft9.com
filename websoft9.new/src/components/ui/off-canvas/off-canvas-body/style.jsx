import styled, { device } from "@styled";

export const OffCanvasBodyWrap = styled.div`
    padding: 20px 30px 100px;

    ${device.small} {
        padding: 20px 40px 100px;
    }
`;
