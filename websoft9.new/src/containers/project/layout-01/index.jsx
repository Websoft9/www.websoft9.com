import PropTypes from "prop-types";
import { Container } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import Motto from "@components/motto";
import Project from "@components/project/layout-01";
import { SectionTitleType, ItemType, MottoType } from "@utils/types";
import { SectionWrap } from "./style";

const sliderSettings = {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    autoplay: false,
    pagination: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
};

const ProjectArea = ({ data }) => {
    return (
        <SectionWrap className="project-area">
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        mb={["30px", null, "60px"]}
                        subtitle={data.section_title?.subtitle}
                        title={data.section_title?.title}
                    />
                )}
                <SwiperSlider
                    dotStyle={2}
                    paginationTop="60px"
                    options={sliderSettings}
                >
                    {data.items?.map((project) => (
                        <SwiperSlide key={project.id}>
                            <Project
                                title={project.title}
                                images={project.images}
                                path={project.path}
                            />
                        </SwiperSlide>
                    ))}
                </SwiperSlider>
                {data?.motto && (
                    <Motto
                        mt={["40px", null, "80px"]}
                        text={data.motto?.text}
                        linkText={data.motto?.linkText}
                        path={data.motto?.link}
                    />
                )}
            </Container>
        </SectionWrap>
    );
};

ProjectArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
        motto: PropTypes.shape(MottoType),
    }),
};

export default ProjectArea;
