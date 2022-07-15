import React from "react";
import PropTypes from "prop-types";
import Counter from "@components/counter/layout-01";
import { Container } from "@ui/wrapper";
import { ItemType } from "@utils/types";
import { SectionWrap, GridWrap, Grid } from "./style";

const FunFactArea = ({ data }) => {
    return (
        <SectionWrap>
            <Container>
                <GridWrap>
                    {data?.items?.map((item) => (
                        <Grid key={item.id}>
                            <Counter
                                title={item.title}
                                countTo={item.count}
                                text={item.description}
                            />
                        </Grid>
                    ))}
                </GridWrap>
            </Container>
        </SectionWrap>
    );
};

FunFactArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default FunFactArea;
