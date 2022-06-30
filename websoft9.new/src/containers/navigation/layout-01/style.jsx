import styled, { device } from "@styled";

export const Navigtion = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    ${device.medium} {
        flex-direction: row;
    }
`;
