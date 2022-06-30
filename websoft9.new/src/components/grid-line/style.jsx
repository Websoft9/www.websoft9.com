import styled from "@styled";

export const GridLineWrap = styled.div`
    max-width: 1200px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 25px;
    right: 25px;
    .line {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 2px;
        background: rgba(204, 204, 204, 0.25);
        &.line {
            &-1 {
                left: 25px;
            }
            &-2 {
                left: 33.33333%;
            }
            &-3 {
                left: 66.66666%;
            }
            &-4 {
                right: 25px;
            }
        }
    }
`;
