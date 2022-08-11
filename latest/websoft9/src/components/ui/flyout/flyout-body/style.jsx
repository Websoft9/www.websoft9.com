import styled from "@styled";

export const FlyoutBodyWrap = styled.div`
    width: 100%;
    height: 100%;
    cursor: default;
    background: #ffffff;
    transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
    overflow-y: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FlyoutBodyInner = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-block-end: 75px;
`;
