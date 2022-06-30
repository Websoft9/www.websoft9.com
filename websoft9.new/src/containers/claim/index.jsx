import PropTypes from "prop-types";
import { Container } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import BoxIcon from "@components/box-icon/layout-05";
import { SectionTitleType, ItemType } from "@utils/types";
import { StyledSection, StyledGrid } from "./style";

const ClaimArea = ({ data }) => {
    return (
        <StyledSection>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        title={data.section_title?.title}
                        subtitle={data.section_title?.subtitle}
                        mb={["30px", null, "60px"]}
                    />
                )}

                <StyledGrid>
                    {data?.items?.map((item) => (
                        <BoxIcon
                            key={item.id}
                            iconClass={item.iconClass}
                            title={item.title}
                            description={item.description}
                            color={item.color}
                        />
                    ))}
                </StyledGrid>
            </Container>
        </StyledSection>
    );
};

ClaimArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default ClaimArea;
