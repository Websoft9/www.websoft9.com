import React, { Children } from "react";
import PropTypes from "prop-types";
import { Container } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import Tabs, { Tab } from "@ui/tabs";
import { SectionTitleType } from "@utils/types";
import { StyledTab } from "./style";

const TabArea = ({ data, children }) => {
    const childArr = Children.toArray(children);

    return (
        <StyledTab>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        mb={["50px", null, null, "60px"]}
                        title={data.section_title?.title}
                        subtitle={data.section_title?.subtitle}
                    />
                )}
                <Tabs defaultActiveKey={childArr[0].props.data.id}>
                    {childArr.map((item) => (
                        <Tab
                            key={item.props.data.id}
                            eventKey={item.props.data.id}
                            title={item.props.data.title}
                        >
                            {item}
                        </Tab>
                    ))}
                </Tabs>
            </Container>
        </StyledTab>
    );
};

TabArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
    }),
    children: PropTypes.node.isRequired,
};

export default TabArea;
