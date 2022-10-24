import SectionTitle from "@ui/section-title";
import Tabs, { Tab } from "@ui/tabs";
import { Container } from "@ui/wrapper";
import React, { Children } from "react";
import { StyledTab } from "./style";

const TabArea = ({ data, children }) => {
    const childArr = Children.toArray(children);

    return (
        <StyledTab>
            <Container>
                {data?.headings && (
                    <SectionTitle
                        mb={["50px", null, null, "60px"]}
                        title={data.headings}
                        subtitle={data.texts}
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

export default TabArea;
