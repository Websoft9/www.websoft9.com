import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "@ui/heading";
// import List, { ListItem } from "@ui/list";
import { SectionWrap, ListGroupWrap } from "./style";
import ProductArea from "@containers/elements/box-image/section-01";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link,graphql }  from  'gatsby';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import BoxImage from "@components/box-image/layout-01";
import PropTypes from "prop-types";
import defaultImage from "@assets/images/default.png";
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Pagination from "@components/pagination/layout-02";
import {Trans, useTranslation } from 'gatsby-plugin-react-i18next';

// 用于根据产品目录生成产品页面
const Section = ({ cataLogData,productsData,marketplaceData,currentPage,numberOfPages,rootPage,location }) => {
    const { t } = useTranslation();
    //const selectValue = location.toString().split('/').pop();

    const [selectedIndex, setSelectedIndex] = React.useState(null);
    
    const handleListItemClick = (event, index) => {
      //setSelectedIndex(index);
    //   event.currentTarget.parentNode.parentNode.parentNode.parentNode.previousSibling.click()
    };

    const [marketplace, setMarketplace] = React.useState('');

    const handleChange = (event) => {
        setMarketplace(event.target.value);
    };

    var totalProductsNum = 0;

    // const [open, setOpen] = React.useState([]);
    // const handleClick = (event) => {
    //     setOpen();
    // };
    
    // const handleClick = (e) => {
    //     this.setState({ [e]: !this.state[e] });
    // };

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col key="col1" lg={2} md={6}>
                        <ListGroupWrap>
                            <Heading as="h5" mb={["20px", null, "30px"]}>
                                {t("Product List")}
                            </Heading>
                            <List
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                >
                                <ListItemButton key="allproduct" selected={selectedIndex === null} onClick={(event) => handleListItemClick(event, null)}>
                                    {
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
                                    }
                                    <Link to={`/app-center`}>{t("ALL")+"("+totalProductsNum+")"}</Link>
                                </ListItemButton>
                                {                                    
                                    cataLogData.map((item,i)=>{
                                        if(item.base_catalog == null){
                                            const pnums = item.product!=null?item.product.length:0;
                                            return(
                                                <ListItemButton key={"catalog"+item.id}  selected={selectedIndex === item.key} onClick={(event) => handleListItemClick(event, item.key)}>
                                                    <Link  to={`/app-catalog/${item.id}`}> {item.title+"("+pnums+")"} </Link>
                                                </ListItemButton>
                                            );
                                        }
                                        else{                                            
                                                const [open, setOpen] = React.useState(false);
                                                const handleClick = () => {
                                                    setOpen(!open);
                                                };

                                                // 统计子目录下面的产品数量
                                                var subTotal = 0;
                                                item.base_catalog.map((subitem)=>{
                                                    const subpnums = subitem.product!=null?subitem.product.length:0;
                                                    subTotal += subpnums;
                                                })
                                            return(
                                                <>
                                                    <ListItemButton key={"base_catalog"+item.id}  onClick={handleClick}>
                                                        <ListItemText primary={item.title+"("+subTotal+")"} />
                                                        {open ? <ExpandLess /> : <ExpandMore />}
                                                        {/* {open[item.key] ? <ExpandLess /> : <ExpandMore />} */}
                                                    </ListItemButton>
                                                    <Collapse  key={"Collapse"+item.id} in={open} timeout="auto" unmountOnExit>
                                                        <List key={"List"+item.id} component="div" disablePadding>
                                                        {                                                                                                                    
                                                            item.base_catalog.map((subitem,j)=>{
                                                                const subpnums = subitem.product!=null?subitem.product.length:0;
                                                                return (
                                                                    <ListItemButton key={subitem.id+j} sx={{ pl: 4 }} selected={selectedIndex === subitem.key}
                                                                    onClick={(event) => {handleListItemClick(event, subitem.key);setOpen(false)}}>
                                                                        <Link  to={`/app-catalog/${subitem.key}`}> {subitem.title+"("+subpnums+")"} </Link>
                                                                    </ListItemButton>
                                                                )
                                                            })
                                                        }
                                                        </List>
                                                    </Collapse>
                                                </>
                                            );
                                        }
                                    })
                                }
                            </List>
                        </ListGroupWrap>
                    </Col>
                    <Col>                      
                        <Row>
                            {
                            productsData.length <=0 ?  <Heading as="h5" mb={["20px", null, "30px"]} textAlign="center">{t("No relevant data found")}</Heading> :
                            productsData?.map((item) => {
                                return (
                                    <Col
                                        lg={4}
                                        md={4}
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
                                            path={`/app-center/product/${item.key}`}
                                        />
                                    </Col>
                                );
                            })}
                        </Row>
                        <Row>
                        {
                            productsData.length > 0 && 
                            <Pagination
                                mt="40px"
                                rootPage={rootPage}
                                currentPage={currentPage}
                                numberOfPages={numberOfPages}
                                />
                        }
                       </Row>
                    </Col>
                </Row>               
            </Container>
        </SectionWrap>
    );
};

export default Section;
