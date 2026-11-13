import BoxImage from "@components/box-image/layout-08";
import { Col, Container, Row } from "@ui/wrapper";
import React from "react";
import { ServicesWrapper } from "./style";

const createProductLogo = (name, key) => {
    const label = String(name || key || "App").trim() || "App";
    const words = label.split(/\s+/).filter(Boolean);
    const initials =
        words.length > 1
            ? words
                  .slice(0, 2)
                  .map((word) => Array.from(word)[0])
                  .join("")
            : Array.from(label).slice(0, 2).join("");
    const safeInitials = initials.replace(
        /[&<>"']/g,
        (character) =>
            ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&apos;",
            }[character])
    );
    const colors = [
        "#2563eb",
        "#7c3aed",
        "#0891b2",
        "#059669",
        "#d97706",
        "#db2777",
    ];
    const colorKey = String(key || label);
    const hash = Array.from(colorKey).reduce(
        (value, character) => value * 31 + character.charCodeAt(0),
        0
    );
    const color = colors[Math.abs(hash) % colors.length];
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect x="4" y="4" width="112" height="112" rx="28" fill="${color}"/><circle cx="94" cy="27" r="36" fill="#fff" opacity=".14"/><text x="60" y="63" text-anchor="middle" dominant-baseline="middle" font-family="Arial,sans-serif" font-size="46" font-weight="700" fill="#fff">${safeInitials}</text></svg>`;

    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

const ServiceArea = ({ data, ...rest }) => {
    const svgDir = require.context("@material-design-icons/svg/two-tone/");

    return (
        <ServicesWrapper {...rest}>
            <Container>
                {data && (
                    <Row>
                        {data?.map((feature, index) => {
                            return (
                                <Col lg={4} key={"col-item-" + index}>
                                    <BoxImage
                                        title={feature.trademark}
                                        image={{
                                            src:
                                                feature.image?.imageurl ||
                                                createProductLogo(
                                                    feature.trademark,
                                                    feature.key
                                                ),
                                        }}
                                        desc={feature.description}
                                        path={`/apps/${feature.key}`}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                )}
            </Container>
        </ServicesWrapper>
    );
};

export default ServiceArea;
