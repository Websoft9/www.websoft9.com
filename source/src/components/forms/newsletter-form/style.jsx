import styled, { space, device } from "@styled";
import { Input } from "@ui/form-elements";

export const StyledBox = styled.div`
    border-radius: 5px;
    background-color: #f8f8f8;
    padding: 40px 35px;
    text-align: center;
    ${device.large} {
        height: 100%;
    }
    ${space}
`;

export const StyledInput = styled(Input)`
    background-color: #fff;
    border-color: #fff;
    margin-bottom: 20px;
`;
