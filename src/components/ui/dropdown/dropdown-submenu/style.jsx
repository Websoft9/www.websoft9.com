import styled from "styled-components";

export const DropmenuWrap = styled.ul`
    min-width: 200px;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    padding: 0;
    margin: 0;
    list-style-type: none;
    z-index: 102;
    box-shadow: 0 0 37px rgba(0, 0, 0, 0.07);
    transform: translateY(30px);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
`;
