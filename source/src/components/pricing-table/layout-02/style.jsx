import styled, { css, themeGet } from "@styled";

export const PricingTableInner = styled.div`
    position: relative;
    overflow: hidden;
    transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
    text-align: center;
    padding: 34px 20px 40px;
    border: 1px solid #dce6ed;
    border-radius: ${themeGet("radii.md")};
    background-color: #ffffff;
`;

export const PricingTableHeader = styled.header`
    margin-block-end: 25px;
`;

export const PricingTableTitle = styled.h5`
    color: ${themeGet("colors.heading")};
    margin-block-end: 24px;
    text-transform: capitalize;
`;

export const PricingTablePrice = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-weight: 500;
    sup {
        font-size: 15px;
        margin-block-end: 0;
        color: ${themeGet("colors.silver")};
        top: 10px;
    }
    h6 {
        font-size: 56px;
        line-height: 0.8;
        margin: 0 4px;
        font-weight: 300;
        color: ${themeGet("colors.heading")};
    }
    sub {
        font-size: 15px;
        margin-block-end: 0;
        color: ${themeGet("colors.silver")};
        align-self: flex-end;
        bottom: 10px;
    }
`;

export const PricingTableBody = styled.div``;

export const PricingTableList = styled.ul`
    li {
        position: relative;
        display: block;
        padding: 5px 0;
    }
`;

export const PricingTableFooter = styled.footer`
    margin-block-start: 30px;
    padding-block-start: 8px;
`;

export const PricingTableWrap = styled.div`
    margin-block-end: 30px;
    &:hover {
        ${PricingTableInner} {
            box-shadow: 0 2px 30px rgba(89, 69, 230, 0.12);
            border: 0 solid transparent;
            padding: 35px 21px 41px;
            transform: translateY(-5px);
        }
    }
    ${(props) =>
        props.isFeatured &&
        css`
            ${PricingTableInner} {
                box-shadow: 0 2px 30px rgba(89, 69, 230, 0.12);
                border: 0 solid transparent;
                padding: 35px 21px 41px;
                background: #002fa6;
            }
            ${PricingTableTitle} {
                color: #fff;
            }
            ${PricingTablePrice} {
                sup,
                h6,
                sub {
                    color: #fff;
                }
            }
            ${PricingTableList} {
                li {
                    color: #fff;
                }
            }
        `}
`;

export const PricingTableFeatureMark = styled.div`
    position: absolute;
    top: -1px;
    right: -1px;
    width: 0;
    height: 0;
    border-top: 88px solid ${themeGet("colors.secondary")};
    border-bottom: 88px solid transparent;
    border-left: 88px solid transparent;
    span {
        position: absolute;
        top: -72px;
        right: 6px;
        text-align: center;
        font-size: 11px;
        font-weight: 700;
        line-height: 1.19;
        display: block;
        color: #fff;
        transform: rotate(45deg);
    }
`;
