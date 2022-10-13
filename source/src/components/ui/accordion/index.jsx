import React from "react";
import PropTypes from "prop-types";
import Accordion from "react-bootstrap/Accordion";
import { StyledAccordion,MarkdownStyle } from "./style";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

const AccordionWrap = ({
    defaultActiveKey,
    data,
    layout,
    disableDefaultActive,
    ...props
}) => {
    return (
        <StyledAccordion layout={layout} {...props}>
            <Accordion
                defaultActiveKey={
                    disableDefaultActive || defaultActiveKey || data[0].id
                }
            >
                {data?.map((item) => (
                    <Accordion.Item key={item.id} eventKey={item.id}>
                        <Accordion.Header>{item.title}</Accordion.Header>
                        <Accordion.Body>
                        <MarkdownStyle>
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {item.description.description}
                                </ReactMarkdown>
                            </MarkdownStyle>                           
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </StyledAccordion>
    );
};

// AccordionWrap.propTypes = {
//     layout: PropTypes.oneOf([1, 2]),
//     defaultActiveKey: PropTypes.number,
//     data: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//             title: PropTypes.string,
//             description: PropTypes.string,
//         })
//     ).isRequired,
//     disableDefaultActive: PropTypes.bool,
// };

AccordionWrap.defaultProps = {
    layout: 1,
};

export default AccordionWrap;
