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

const Section = ({ cataLogData,productsData }) => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={2} md={6}>
                        <ListGroupWrap>
                            <Heading as="h5" mb={["20px", null, "30px"]}>
                                Products List
                            </Heading>
                            <List
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                >
                                <ListItemButton>
                                    <Link to={`/app-center`}>{"全部"}</Link>
                                </ListItemButton>
                                {
                                    cataLogData.map((item)=>{
                                        if(item.base_catalog == null){
                                            return(
                                                <ListItemButton>
                                                    <Link to={`/app-center/${item.key}`}> {item.title}</Link>
                                                </ListItemButton>
                                            );
                                        }
                                        else{
                                                const [open, setOpen] = React.useState(false);
                                                const handleClick = (event,flag) => {
                                                    setOpen(!open);
                                                };
                                            return(
                                                <>
                                                    <ListItemButton onClick={(event)=>handleClick(event,true)}>
                                                        <ListItemText primary={item.title} />
                                                        {open ? <ExpandLess /> : <ExpandMore />}
                                                    </ListItemButton>
                                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                                        <List component="div" disablePadding>
                                                        {
                                                            item.base_catalog.map((subitem)=>{
                                                                return (
                                                                    <ListItemButton sx={{ pl: 4 }}>
                                                                        <Link to={`/app-center/${subitem.key}`}>{subitem.title}</Link>
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
                            productsData.map((item) => {
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
                                                item.image==null ? {src: defaultImage} : {src: item.image.imageurl}
                                            }
                                            desc={item.description}
                                        />
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                </Row>               
            </Container>
        </SectionWrap>
    );
};
export default Section;
