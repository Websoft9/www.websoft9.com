import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import { StaticImage } from "gatsby-plugin-image";
import { PageHeaderWrap, StyledBG } from "./style";

const PageHeader = ({ pageContext, location, title }) => {
    const {
        breadcrumb: { crumbs },
    } = pageContext;
    const disableLinks = [
        "/elements",
        "/category",
        "/profile",
        "/date",
        "/tag",
        "/page",
        "/blog",
        "/blog/page",
        "/blogs",
        "/services",
    ];
    const customCrumbLabel = location.pathname.toLowerCase();
    const crumbLabelArr = customCrumbLabel.split("/");
    const label = crumbLabelArr[crumbLabelArr.length - 1];
    const labelArr = label.split("-");
    return (
        <PageHeaderWrap>
            <StyledBG>
                <StaticImage
                    src="../../../assets/images/bg/title-bar-01-bg.jpg"
                    alt="CTA BG"
                    layout="fullWidth"
                    placeholder="tracedSVG"
                />
            </StyledBG>
            <Breadcrumb
                title={title}
                crumbs={crumbs}
                crumbLabel={labelArr.join(" ")}
                disableLinks={disableLinks}
            />
        </PageHeaderWrap>
    );
};

PageHeader.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
    pageContext: PropTypes.shape({
        breadcrumb: PropTypes.shape({
            crumbs: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
    title: PropTypes.string,
};

export default PageHeader;
