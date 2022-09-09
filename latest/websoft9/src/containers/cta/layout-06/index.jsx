import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "@ui/wrapper";
import { StyledSection,StyledContent} from "./style";
import Text from "@ui/text";
import {Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import Line from "@ui/divider/line";
import { Link }  from  'gatsby';
import Heading from "@ui/heading";
import ReactMarkdown from "react-markdown";
import "markdown-navbar/dist/navbar.css";
import remarkGfm from 'remark-gfm'
import HeroArea from "@containers/hero/layout-01";
import BoxImage from "@components/box-image/layout-01";
import HeroImageLeftArea from "@containers/hero/layout-04";
import HeroImageRightArea from "@containers/hero/layout-05";

//用于显示场景方案详情页
const CTAArea = ({ data,relatedReading }) => {
    const { t } = useTranslation();

    const heroData = {
        headings:data.title,
        texts:data.subTitle,
        media:data.featureImage,
        buttons:[]
    };

    data.action.map((ac)=>{
        const button  = {
            id:ac.id,
            content:ac.key,
            path:ac.value
        }
        heroData.buttons.push(button);
    })

    return (
        <StyledSection>
            <Container>
                <HeroArea data={heroData} />

                <StyledContent>
                    <Heading as="h5" mb="20px" textAlign="left">{t("Challengeg")}</Heading>
                    <Text>{data.description.description}</Text>

                    <Heading as="h5" mb="20px" textAlign="left">{t("How do we solve it?")}</Heading>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {data.content.content}
                    </ReactMarkdown>

                    <Row>
                    {
                        data.resource && 
                        data.resource.map((item) => {
                            return (
                                <Col
                                    lg={3}
                                    md={6}
                                    className="box-item"
                                    key={item.id}
                                    style={{marginBlockEnd:"20px",marginBlockStart:"20px"}}
                                >
                                    <BoxImage
                                        title={item.title}
                                        image=
                                        {                                         
                                            item.featureImage==null ? {src: defaultImage} : {src: item.featureImage}
                                        }
                                        category={item.type.title}
                                        path={`/resource-center/resource/${item.slug}`}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                    {
                        data.features && data.features.map((feature,i)=>{
                            if(i%2==0){
                                return (
                                    <HeroImageRightArea key={feature.id} data={feature} />
                                );
                            }
                            else{
                                return (
                                    <HeroImageLeftArea key={feature.id} data={feature} />
                                );
                            }                 
                        })
                    }

                </StyledContent>


            </Container>
        </StyledSection>
    );
};
export default CTAArea;
