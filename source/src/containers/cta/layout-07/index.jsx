import defaultImage from "@assets/images/default.png";
import BoxImage2 from "@components/box-image/layout-08";
import BoxImage from "@components/box-large-image/layout-02";
import FullWideSlider from "@containers/elements/flexible-image-slider/full-wide-slider3";
import HeroArea from "@containers/hero/layout-07";
import ValuesArea from "@containers/it-service/layout-01";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Button from "@ui/button";
import Heading from "@ui/heading";
import Text from "@ui/text";
import { Col, Container, Row } from "@ui/wrapper";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import "markdown-navbar/dist/navbar.css";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import { StyledSection } from "./style";

//用于显示专业服务详情页
const CTAArea = ({ data, location }) => {
    const { t } = useTranslation();
    const { language } = useI18next();

    const pathName = location.pathname;

    const heroData = {
        catalogKey:data.catalog[0].key,
        catalogTitle: data.catalog[0].title,
        headings: data.title,
        texts: data.summary,
        media: data.featureImage,
    };
    const catalogs = [
        { id: "id-anchorpoint-1", value: t("Overview") },
        { id: "id-anchorpoint-2", value: t("Benefit") },
        { id: "id-anchorpoint-3", value: t("What do we do") },
        { id: "id-anchorpoint-4", value: t("Cases") },
        { id: "id-anchorpoint-5", value: t("Purchase and price") },
        { id: "id-anchorpoint-6", value: t("Service portfolio") },
        { id: "id-anchorpoint-7", value: t("Related Applications") },
        { id: "id-anchorpoint-8", value: t("Business insight") }
    ];
    
    const [selectedIndex, setSelectedIndex] = React.useState(null);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <StyledSection>
            <HeroArea data={heroData} />
            <Row style={{ backgroundColor: "rgba(25, 118, 210, 0.12)", marginTop: "0px" }}>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    disablePadding={true}
                    style={{ display: 'flex', flexDirection: 'row', margin: "0 auto", maxWidth: "1200px", fontSize: '20px', fontWeight: "bold" }}
                >
                    {
                        catalogs && catalogs.map((item, index) => {
                            return (
                                <ListItemButton key={item + index} selected={selectedIndex === item.value} /*onClick={(event) => handleListItemClick(event, item.value)}*/>
                                    <AnchorLink to={pathName + "#" + item.id} title={item.value} />
                                </ListItemButton>
                            );
                        })
                    }
                </List>
            </Row>
            <Container>
                <Row id="id-anchorpoint-1" mb="40px">
                    <Row>
                        <Heading as="h4" mb="40px" textAlign="left">{t("Overview")}</Heading>
                    </Row>
                    <Row>
                        <Col lg={7}>
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {data.overview?.overview}
                            </ReactMarkdown>
                        </Col>
                        <Col lg={5}>
                            {data?.images && <FullWideSlider data={data.images} />}
                        </Col>
                    </Row>
                </Row>

                <Row id="id-anchorpoint-2" mb="90px">
                    <Row>
                        <Heading as="h4" mb="40px" textAlign="left">{t("Benefit")}</Heading>
                    </Row>
                    <Row>
                        <ValuesArea data={data.values} />
                    </Row>
                </Row>

                <Row id="id-anchorpoint-3" mb="90px">
                    <Row>
                        <Heading as="h4" mb="40px" textAlign="left">{t("What do we do")}</Heading>
                    </Row>
                    <Row>
                        <ValuesArea data={data.task} />
                    </Row>
                </Row>

                <Row id="id-anchorpoint-4" mb="90px">
                    <Row>
                        <Heading as="h4" mb="40px" textAlign="left">{t("Cases")}</Heading>
                    </Row>
                    <Row>
                        {
                            data.cases?.map((item) => {
                                return (
                                    <Col
                                        lg={4}
                                        md={6}
                                        className="box-item"
                                        key={item.id}
                                    >
                                        <BoxImage
                                            title={item.title}
                                            image=
                                            {
                                                item.featureImage == null ? { src: defaultImage } : { src: item.featureImage }
                                            }
                                            category={item.type.title}
                                            path={`/${item.type.key}/${item.slug}`}
                                        />
                                    </Col>
                                );
                            })}
                    </Row>
                </Row>

                <Row id="id-anchorpoint-5" mb="90px">
                    <Row>
                        <Heading as="h4" mb="40px" textAlign="left">{t("Purchase and price")}</Heading>
                    </Row>
                    <Row alignItems="center"
                        textAlign={["center", null, null, "left"]}
                        style={{ backgroundColor: "#F8F8F8" }}>
                        <Col lg={9}>
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {data.BuyRemark?.BuyRemark}
                            </ReactMarkdown>
                        </Col>
                        <Col lg={3} className="text-center">
                            <Text>{data.priceModel?.[0].name}</Text>
                            <Text fontSize="30px" fontWeight="bold">
                                {language == "zh-CN" ? "$" : "¥"}
                                {data.pricing}
                            </Text>
                            <Button m="7px" path={`/demand/${data.title}`}>{t("Get it Now")}</Button>
                        </Col>
                    </Row>
                </Row>

                <Row id="id-anchorpoint-6" mb="90px">
                    <Row>
                        <Heading as="h4" mb="40px" textAlign="left">{t("Service portfolio")}</Heading>
                    </Row>
                    <Row>
                        {data.services && data.services.slice(0, 3).map((feature, i) => {
                            var image = new Object();
                            image.src = feature.featureImage == null ? defaultImage : feature.featureImage;
                            return (
                                <Col
                                    lg={4}
                                    md={6}
                                    className="box-item"
                                    key={feature.id}
                                >
                                    <BoxImage
                                        image={image}
                                        title={feature.title}
                                        //category={feature.catalog[0].title}
                                        desc={feature.summary}
                                        path={`/services/${feature.catalog[0].key}/${feature.key}`}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                </Row>

                <Row id="id-anchorpoint-7" mb="30px">
                    <Row>
                        <Heading as="h4" mb="40px" textAlign="left">{t("Related Applications")}</Heading>
                    </Row>
                    <Row>
                        {
                            data?.products && data.products?.slice(0, 4).map((item,i) => {
                                return (
                                    <Col lg={3} key={'col-item-'+i}>
                                    <BoxImage2
                                        title={item.trademark}
                                        image={{src: item.image.imageurl}}
                                        desc={item.summary}
                                        path={`/apps/${item.key}`}
                                    />
                                    </Col>
                                    // <Col
                                    //     lg={4}
                                    //     md={6}
                                    //     className="box-item"
                                    //     key={item.id}
                                    // >
                                    //     <BoxImage2
                                    //         title={item.trademark}
                                    //         image=
                                    //         {
                                    //             item.image == null ? { src: defaultImage } : { src: item.image.imageurl }
                                    //         }
                                    //         desc={item.summary}
                                    //         path={`/apps/product/${item.key}`}
                                    //     />
                                    // </Col>
                                );
                            })
                        }
                    </Row>
                </Row>
                <Row id="id-anchorpoint-8" mb="40px">
                        <Heading as="h4" mb="40px" textAlign="left">{t("Business insight")}</Heading>
                        {
                        data.resources && 
                        data.resources.filter((rs) => rs.type.key != "case").filter((rs) => rs.type.key != "news").slice(0,3).map((item) => {
                            return (
                                <Col
                                    lg={4}
                                    md={6}
                                    className="box-item"
                                    key={item.id}
                                >
                                    <BoxImage
                                        title={item.title}
                                        image=
                                        {
                                            item.featureImage==null ? {src: defaultImage} : {src: item.featureImage}
                                        }
                                        category={item.type.title}
                                        path={`/${item.type.key}/${item.slug}`}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
            </Container>
        </StyledSection>
    );
};
export default CTAArea;
