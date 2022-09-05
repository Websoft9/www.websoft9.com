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
import Pagination from "@components/pagination/layout-01";
import {Trans, useTranslation } from 'gatsby-plugin-react-i18next';

// 用于显示所有资源目录
const Section = ({ cataLogData,resourceData,currentPage,numberOfPages,rootPage }) => {
    const { t } = useTranslation();
    // const selectValue = location.toString().split('/').pop();

    const [selectedIndex, setSelectedIndex] = React.useState(null);
    
    const handleListItemClick = (event, index) => {
      //setSelectedIndex(index);
    //   event.currentTarget.parentNode.parentNode.parentNode.parentNode.previousSibling.click()
    };
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col key="col1" lg={2} md={6}>
                        <ListGroupWrap>
                            <Heading as="h5" mb={["20px", null, "30px"]}>
                                {t("Resource List")}
                            </Heading>
                            <List
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                >
                                <ListItemButton key="allproduct" selected={selectedIndex === null} onClick={(event) => handleListItemClick(event, null)}>                                   
                                    <Link to={`/app-resource`}>{t("ALL")}</Link>
                                </ListItemButton>
                                {                                    
                                    cataLogData.map((item,i)=>{
                                        return(
                                            <ListItemButton  selected={selectedIndex === item.key} onClick={(event) => handleListItemClick(event, item.key)}>
                                                <Link  to={`/resource-center/${item.key}`}> {item.title} </Link>
                                            </ListItemButton>
                                        );                                   
                                    })
                                }
                            </List>
                        </ListGroupWrap>
                    </Col>
                    <Col>                    
                        <Row>
                            {
                            resourceData.length <=0 ?  <Heading as="h5" mb={["20px", null, "30px"]} textAlign="center">{t("No relevant data found")}</Heading> :
                            resourceData?.map((item) => {
                                return (
                                    <Col
                                        lg={4}
                                        md={4}
                                        className="box-item"
                                        key={item.id}
                                    >
                                        <BoxImage
                                            title={item.title}
                                            image=
                                            {                                         
                                                item.image==null ? {src: defaultImage} : {src: item.image}
                                            }
                                            desc={item.description}
                                            path={`/resource-center/resource/${item.slug}`}
                                        />
                                    </Col>
                                );
                            })}
                        </Row>
                        <Row>
                        {
                            resourceData.length > 0 && 
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
