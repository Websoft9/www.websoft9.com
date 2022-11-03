import ServiceArea from "@containers/elements/box-large-image/section-05";
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Heading from "@ui/heading";
import { graphql, StaticQuery } from 'gatsby';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BoxWrap, SectionWrap } from "./style";

// 用于所有产品页面
const Section = () => {
    const { t } = useTranslation();
    const {language } = useI18next();

    const [selectedIndex, setSelectedIndex] = React.useState(null);
    
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <StaticQuery
        query={graphql`
        {
            zhServicesData:allContentfulBaseCatalog(
                filter: {node_locale: {eq: "zh-CN"}, key: {eq: "service"}}
            ) {
                nodes {
                base_catalog {
                    id
                    key
                    title
                    position
                    overview
                    service {
                        id
                        key
                        texts:title
                        headings:summary
                        image:featureImage
                        customerType {
                            key
                            title
                        }
                        catalog {
                            id
                            key
                            title
                        }
                    }
                }
                }
            }

            enServicesData:allContentfulBaseCatalog(
                filter: {node_locale: {eq: "en-US"}, key: {eq: "service"}}
            ) {
                nodes {
                base_catalog {
                    id
                    key
                    title
                    position
                    overview
                    service {
                        id
                        key
                        texts:title
                        headings:summary
                        image:featureImage
                        customerType {
                            key
                            title
                        }
                        catalog {
                            id
                            key
                            title
                        }
                    }
                }
                }
            }

            #查询所有服务对象
            zhBrandType:allContentfulAboutBrandType(filter: {node_locale: {eq: "zh-CN"}}) {
                nodes {
                id
                key
                title
                }
            }

            enBrandType:allContentfulAboutBrandType(filter: {node_locale: {eq: "en-US"}}) {
                nodes {
                id
                key
                title
                }
            }
        }
    `}
    render = {data =>{
        const allBrandType = language=="zh-CN" ? data.zhBrandType.nodes : data.enBrandType.nodes;
        const allServicesData = language=="zh-CN" ? data.zhServicesData.nodes?.[0].base_catalog : data.enServicesData.nodes?.[0].base_catalog;

        const [checkedState, setCheckedState] = React.useState(-2);
        const [filterServicesData,setFilterServicesData] = React.useState(allServicesData);

        //const [allData,setAllData] = React.useState(undefined);

        let allData = null;

        useEffect(()=>{
            window.sessionStorage.setItem("AllData",JSON.stringify(allServicesData));
        },[])

        typeof window !== 'undefined' && (allData =JSON.parse(window.sessionStorage.getItem("AllData")));

        const handleChange = (e,index) => {
            const value = e.target.value;

            if(index === -1){           
                setFilterServicesData(allData);
            }
            else{
                let filterData = [];
                allData.map((item)=>{
                    let newServiceArr = [];
                    item?.service?.map((subData)=>{
                        subData?.customerType.map((ele)=>{
                            if(ele.key == value){
                                newServiceArr.push(subData);
                            }
                        })
                    })
                    item.service = newServiceArr;
                    filterData.push(item);
                })
                setFilterServicesData(filterData);
            }
            setCheckedState(index);           
        };

        return (
            <SectionWrap>
            <Container>
                <Row>
                    <Col lg={2} md={6} /*style={{position: "sticky",top: "120px",height: "100%"}}*/>
                            <BoxWrap>
                            <Heading as="h5">
                                {t("Service Type")}
                            </Heading>
                            <List
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                >
                                    {
                                        allServicesData && allServicesData.map((item)=>{
                                            return (
                                                <ListItemButton key={item.id} selected={selectedIndex === item.key} onClick={(event) => handleListItemClick(event, item.key)}>
                                                    <AnchorLink to={"/services#"+item.key} title={item.title}/>
                                                </ListItemButton>
                                            );
                                        })
                                    }
                            </List>
                            </BoxWrap>
                            <BoxWrap>
                                <Box sx={{ display: 'flex' }}>
                                    <FormControl  sx={{ m: 0 }} component="fieldset" variant="standard">
                                        <FormLabel component="legend" style={{fontSize: '20px',fontWeight: 'bold'}}>{t("Service Object")}</FormLabel>
                                        <FormGroup>                                        
                                            <FormControlLabel
                                                control={<Checkbox checked={checkedState === -1} onChange={(event) => handleChange(event,-1)} name={t("ALL")} value={t("ALL")} />}
                                                label={t("ALL")}
                                            />
                                            {
                                                allBrandType && allBrandType.map((type,index)=>{
                                                    return (
                                                        <FormControlLabel key={type.id}
                                                            control={<Checkbox checked={checkedState === index} onChange={(event) => handleChange(event,index)} name={type.title} value={type.key} />}
                                                            label={type.title}
                                                        />
                                                    );
                                                })
                                        }
                                        </FormGroup>
                                    </FormControl>
                                </Box>
                            </BoxWrap>
                    </Col>
                    <Col lg={10}>
                        <Row>
                            <ServiceArea alldata={filterServicesData}/>
                        </Row>
                    </Col>
                </Row>               
            </Container>
        </SectionWrap>
    )}
    }
    ></StaticQuery>
    );
};

export default Section;
