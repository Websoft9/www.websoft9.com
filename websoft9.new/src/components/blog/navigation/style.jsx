import styled, { device } from "@styled";

export const Navigtion = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 30px;
    margin-block-start: 36px;
    ${device.medium} {
        flex-direction: row;
    }
`;
