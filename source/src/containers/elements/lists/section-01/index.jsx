import Pagination1 from "@components/pagination/layout-01";
import Pagination2 from "@components/pagination/layout-02";
import ValuesArea from "@containers/it-service/layout-03";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Heading from "@ui/heading";
import { Link } from 'gatsby';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ListGroupWrap, SectionWrap } from "./style";

// 用于显示所有产品页面
const Section = ({ cataLogData,productsData,currentPage,numberOfPages,rootPage }) => {
    const { t } = useTranslation();
    const {language, languages, changeLanguage } = useI18next();

    const [open, setOpen] = useState(new Array(cataLogData.length).fill(false));

    useEffect(()=>{
        if(typeof window !== 'undefined'){
            if(window.sessionStorage.getItem("openIndex") != null){
                var tmp = window.sessionStorage.getItem("openIndex");
                const updatedOpen = open.map((item, index) =>
                    tmp == index ? !item : item
                );
                setOpen(updatedOpen);
            }
        }
    },[]);

    var tmpIndex = typeof window !== 'undefined' && (window.sessionStorage.getItem("selectedIndex") == null ? "all" : window.sessionStorage.getItem("selectedIndex"));
    const [selectedIndex, setSelectedIndex] = useState(tmpIndex);

    const handleListItemClick = (event, index, openIndex) => {
        window.sessionStorage.setItem("selectedIndex",index);
        window.sessionStorage.setItem("openIndex",openIndex);
        
        setSelectedIndex(index);
    };


    const handleClick = (position) => {
        const updatedOpen = open.map((item, index) =>
            position == index ? !item : item
        );
        setOpen(updatedOpen);
    };

    var totalProductsNum = 0;
    // 统计所有产品数量
    cataLogData.map((item)=>{
        var itemNums = item.product!=null?item.product.length:0;
        totalProductsNum += itemNums
        if(item.base_catalog!=null){
            item.base_catalog.map((subitem)=>{
                var subpNums = subitem.product!=null?subitem.product.length:0;
                totalProductsNum += subpNums;
            })
        }
    })

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={3} md={6}>
                        <ListGroupWrap>
                            <Heading as="h5" mb={["20px", null, "30px"]}>
                                {t("Product List")}
                            </Heading>
                            <List
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                >
                                <ListItemButton key="allproduct" selected={selectedIndex === "all"} onClick={(event) => handleListItemClick(event, "all")} >
                                    <Link to={`/apps`}>{t("ALL")+"("+totalProductsNum+")"}</Link>
                                </ListItemButton>
                                {
                                    cataLogData.map((item,i)=>{
                                        if(item.base_catalog == null){
                                            const pnums = item.product!=null?item.product.length:0;
                                            return(
                                                <ListItemButton key={item.id}  selected={selectedIndex === item.key} onClick={(event) => handleListItemClick(event, item.key)}>
                                                    <Link to={`/app-catalog/${item.id}`}> {item.title+"("+pnums+")"} </Link>
                                                </ListItemButton>
                                            );
                                        }
                                        else{                                            
                                                // const [open, setOpen] = React.useState(false);
                                                // const handleClick = () => {
                                                //     setOpen(!open);
                                                // };



                                                // 统计子目录下面的产品数量
                                                var subTotal = 0;
                                                item.base_catalog.map((subitem)=>{
                                                    const subpnums = subitem.product!=null?subitem.product.length:0;
                                                    subTotal += subpnums;
                                                })
                                            return(
                                                <React.Fragment key={item.id}>
                                                    <ListItemButton key={"base_catalog"+item.id}  onClick={()=>handleClick(i)}>
                                                        <ListItemText primary={item.title+"("+subTotal+")"} />
                                                        {open[i] ? <ExpandLess /> : <ExpandMore />}
                                                    </ListItemButton>
                                                    <Collapse key={"Collapse"+item.id} in={open[i]} timeout="auto" unmountOnExit>
                                                        <List key={"List"+item.id}  component="div" disablePadding>
                                                        {
                                                            item.base_catalog.map((subitem,j)=>{
                                                                const subpnums = subitem.product!=null?subitem.product.length:0;
                                                                return (
                                                                    <ListItemButton key={subitem.id+j}  sx={{ pl: 4 }} 
                                                                        selected={selectedIndex === subitem.key}
                                                                        onClick={(event) => handleListItemClick(event, subitem.key,i)}>
                                                                            
                                                                        <Link  to={`/app-catalog/${subitem.key}`}> {subitem.title+"("+subpnums+")"} </Link>
                                                                    </ListItemButton>
                                                                )
                                                            })
                                                        }
                                                        </List>
                                                    </Collapse>
                                                </React.Fragment>
                                            );
                                        }
                                    })
                                }
                            </List>
                        </ListGroupWrap>
                    </Col>
                    <Col>                      
                        {/* <Row>
                            {
                            productsData.length <=0 ?  <Heading as="h5" mb={["20px", null, "30px"]} textAlign="center">{t("No relevant data found")}</Heading> :
                            productsData?.map((item) => {
                                return (
                                    <Col
                                        lg={4}
                                        md={6}
                                        className="box-item"
                                        key={item.key}
                                    >
                                        <BoxImage
                                            title={item.trademark}
                                            image=
                                            {                                         
                                                item.image==null ? {src: defaultImage} : {src: item.image.imageurl}
                                            }
                                            desc={item.description}
                                            path={`/apps/product/${item.key}`}
                                        />
                                    </Col>
                                );
                            })}
                        </Row> */}
                        <Row>
                            {
                                productsData.length <=0 ?  <Heading as="h5" mb={["20px", null, "30px"]} textAlign="center">{t("No relevant data found")}</Heading> :
                                <ValuesArea data={productsData} />
                            }

                        </Row>
                        <Row>
                        {                         
                            productsData.length > 0 && (rootPage == "/apps" ?
                            <Pagination1
                                mt="40px"
                                rootPage={rootPage}
                                currentPage={currentPage}
                                numberOfPages={numberOfPages}
                            /> 
                            :
                            <Pagination2
                                mt="40px"
                                rootPage={rootPage}
                                currentPage={currentPage}
                                numberOfPages={numberOfPages}
                            />)
                        }
                       </Row>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default Section;
