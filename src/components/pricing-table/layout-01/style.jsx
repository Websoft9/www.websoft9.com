import styled, { themeGet } from "@styled";

export const PricingTableInner = styled.div`
    position: relative;
    overflow: hidden;
    transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
    text-align: center;
    padding: 49px 20px 51px;
    border-radius: ${themeGet("radii.md")};
    background-color: #ffffff;
    box-shadow: 0 0 30px rgba(51, 51, 51, 0.1);
`;

export const PricingTableHead = styled.div`
    margin-block-end: 25px;
`;

export const PricingTableTitle = styled.h6`
    font-size: 15px;
    line-height: 1.5;
    color: inherit;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-block-end: 21px;
    z-index: 2;
    position: relative;
`;

export const PricingTableImage = styled.figure`
    position: relative;
    width: 162px;
    height: 162px;
    border-radius: ${themeGet("radii.round")};
    margin: 0 auto 20px;
    background-image: linear-gradient(160deg, #fbf7f4 0%, #fefdfd 100%);
    align-items: center;
    display: flex;
    justify-content: center;
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

export const PricingTableBtn = styled.div`
    margin-block-start: 30px;
    padding-block-start: 8px;
`;

export const PricingTableList = styled.ul`
    margin: 29px auto 0;
    max-width: 270px;
    text-align: left;
    li {
        position: relative;
        display: block;
        padding: 7px 0 7px 0;
        svg,
        i {
            color: ${themeGet("colors.secondary")};
            font-size: 14px;
            margin-inline-end: 10px;
        }
    }
`;

export const PricingTableWrap = styled.div`
    margin-block-end: 30px;
    &:hover {
        ${PricingTableInner} {
            box-shadow: ${themeGet("colors.xl")};
            border: 0 solid transparent;
            transform: translateY(-5px);
        }
    }
`;

export const PricingTableFeatureMark = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 92px;
    width: 92px;
    background: ${themeGet("colors.secondary")};
    span {
        position: absolute;
        top: 20px;
        right: 7px;
        text-align: center;
        font-size: 11px;
        font-weight: 700;
        line-height: 1.19;
        display: block;
        color: #fff;
        transform: rotate(45deg);
        width: 50px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    &:after {
        transform: rotate(-45deg);
        background: none repeat scroll 0 0 #fff;
        content: "";
        height: 159px;
        right: 23px;
        position: absolute;
        top: 10px;
        width: 100%;
    }
`;
