import React from "react";
import PropTypes from "prop-types";
import {Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import cn from "clsx";
import {
    PaginationWrap,
    PaginationList,
    PaginationItem,
    PaginationLink,
} from "./style";

const Pagination = ({
    currentPage,
    numberOfPages,
    rootPage,
    className,
    ...rest
}) => {
    const { t } = useTranslation();
    const isFirst = currentPage === 1;
    const isLast = currentPage === numberOfPages;
    const previousPage =
        currentPage - 1 === 1
            ? rootPage
            : rootPage+"/" + (currentPage - 1).toString();
    const nextPage = rootPage+"/" + (currentPage + 1).toString();
    return (
        <PaginationWrap className={cn(className, "pagination")} {...rest}>
            <PaginationList>
                {isFirst ? (
                    <PaginationItem>
                        <PaginationLink disabled={true} path={previousPage}>
                        {t("PREV")}
                        </PaginationLink>
                    </PaginationItem>
                ) : (
                    <PaginationItem classname="prev">
                        <PaginationLink path={previousPage}>
                        {t("PREV")}
                        </PaginationLink>
                    </PaginationItem>
                )}
                {Array.from({ length: numberOfPages }, (_, i) =>
                    currentPage === i + 1 ? (
                        <PaginationItem key={`page-number-${i + 1}`}>
                            <PaginationLink
                                active="true"
                                path={`${rootPage}/${
                                    i === 0 ? "" : "/" + (i + 1)
                                }`}
                            >
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ) : (
                        <PaginationItem key={`page-number-${i + 1}`}>
                            <PaginationLink
                                path={`${
                                    i === 0 ? rootPage : rootPage+"/" + (i + 1)
                                }`}
                            >
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    )
                )}
                {isLast ? (
                    <PaginationItem>
                        <PaginationLink disabled={true} path={nextPage}>
                        {t("NEXT")}
                        </PaginationLink>
                    </PaginationItem>
                ) : (
                    <PaginationItem className="next">
                        <PaginationLink path={nextPage}>{t("NEXT")}</PaginationLink>
                    </PaginationItem>
                )}
            </PaginationList>
        </PaginationWrap>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number,
    numberOfPages: PropTypes.number,
    rootPage: PropTypes.string,
    className: PropTypes.string,
};

export default Pagination;
