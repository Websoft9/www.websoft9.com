import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "@ui/heading";
// import List, { ListItem } from "@ui/list";
import { SectionWrap, BoxWrap } from "./style";
import ProductArea from "@containers/elements/box-image/section-01";
import { Link,graphql }  from  'gatsby';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import BoxImage from "@components/box-image/layout-01";
import defaultImage from "@assets/images/default.png";
import Pagination1 from "@components/pagination/layout-01";
import Pagination2 from "@components/pagination/layout-02";
import {Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ServiceArea from "@containers/elements/box-large-image/section-05";
import { AnchorLink } from "gatsby-plugin-anchor-links";

// 用于所有产品页面
const Section = ({ serviceTypeData,brandTypeData,servicesData,currentPage,numberOfPages,rootPage }) => {
    const { t } = useTranslation();
    
    serviceTypeData.sort(function(a,b){return a.position-b.position}) //对服务类别根据position进行排序
    servicesData.sort(function(a,b){return a.catalog?.[0].position-b.catalog?.[0].position}) //对服务类别根据position进行排序

    const [cpServicesData,setCpServicesData] = React.useState(servicesData);

    const [allServicesData,setAllServicesData] = React.useState(cpServicesData);

    const [checkedState, setCheckedState] = React.useState(
        new Array(brandTypeData.length).fill(false)
    );

    const handleChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
        let filterServicesData = cpServicesData;

        //根据选择的服务对象对服务进行过滤
        updatedCheckedState.map((currentState,index)=>{
            if(currentState == true){
                let filterTypeServiceData = [];
                filterServicesData.map((data)=>{
                    console.log("data:"+data.service?.length)
                    let newServiceArr = [];
                    data?.service?.map((subData)=>{
                        subData?.customerType.map((ele)=>{
                            if(ele.key == brandTypeData[index].key){                
                                newServiceArr.push(subData);
                            }
                        })
                    })
                    data.service = newServiceArr;
                    filterTypeServiceData.push(data);
                })
                setAllServicesData(filterTypeServiceData);
            }
        })
    };

    const [selectedIndex, setSelectedIndex] = React.useState(null);
    
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };


    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={2} md={6} style={{position: "sticky",top: "120px",height: "100%"}}>
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
                                        serviceTypeData && serviceTypeData.map((item)=>{
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
                                        {
                                            brandTypeData && brandTypeData.map((type,index)=>{
                                                return (
                                                    <FormControlLabel key={type.id}
                                                        control={<Checkbox checked={checkedState[index]} onChange={() => handleChange(index)} name={type.title} value={type.key} />}
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
                        {/* {
                            allServicesData?.map((item)=>{
                                return (
                                    <Row id={item.key} key={item.id} >
                                        <ServiceArea data={item}/>
                                    </Row> 
                                );
                            })
                        } */}
                        <Row>
                            <ServiceArea alldata={allServicesData}/>
                        </Row>
                    </Col>
                </Row>               
            </Container>
        </SectionWrap>
    );
};

export default Section;
