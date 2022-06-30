import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import Button from "@ui/button";
import { SectionTitleType, ItemType } from "@utils/types";
import {
    SectionWrap,
    JobList,
    JobItem,
    JobTitle,
    JobType,
    JobDesc,
    JobButton,
} from "./style";

const ListingArea = ({ data }) => {
    return (
        <SectionWrap>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        mb={["30px", null, "45px"]}
                        maxWidth={["700px"]}
                        mx="auto"
                        {...data.section_title}
                    />
                )}
                <JobList>
                    {data?.items?.map((job, i) => {
                        const isEven = i % 2 === 0;
                        return (
                            <JobItem key={job.id} isEven={isEven}>
                                <Row>
                                    <Col lg={3}>
                                        <JobTitle>{job.title}</JobTitle>
                                        <JobType>{job.type}</JobType>
                                    </Col>
                                    <Col lg={6}>
                                        <JobDesc>{job.description}</JobDesc>
                                    </Col>
                                    <Col lg={3}>
                                        <JobButton>
                                            <Button
                                                variant="outlined"
                                                color="light"
                                            >
                                                Get Started
                                            </Button>
                                        </JobButton>
                                    </Col>
                                </Row>
                            </JobItem>
                        );
                    })}
                </JobList>
            </Container>
        </SectionWrap>
    );
};

ListingArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default ListingArea;
