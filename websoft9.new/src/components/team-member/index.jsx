import React from "react";
import PropTypes from "prop-types";
import Social, { SocialLink } from "@ui/social";
import Image from "@ui/image";
import { ImageType, SocialType } from "@utils/types";
import {
    TeamMemberWrap,
    TeamMemberInner,
    TeamMemberImage,
    TeamMemberSocialWrap,
    TeamMemberInfo,
    TeamMemberName,
} from "./style";

const TeamMember = ({ image, name, designation, socials, layout }) => {
    return (
        <TeamMemberWrap $layout={layout}>
            <TeamMemberInner>
                <TeamMemberImage>
                    {image?.src && (
                        <Image src={image.src} alt={image?.alt || name} />
                    )}

                    <TeamMemberSocialWrap>
                        <Social
                            color="light"
                            variant="texted"
                            tooltip={true}
                            tooltip_bg="secondary"
                            hover={{ color: "#fff" }}
                            space="20px"
                            size="small"
                        >
                            {socials?.map(({ id, icon, link, title }) => (
                                <SocialLink key={id} title={title} path={link}>
                                    <i className={icon}></i>
                                </SocialLink>
                            ))}
                        </Social>
                    </TeamMemberSocialWrap>
                </TeamMemberImage>
                <TeamMemberInfo $layout={layout}>
                    {name && (
                        <TeamMemberName $layout={layout}>{name}</TeamMemberName>
                    )}
                    {designation && <p>{designation}</p>}
                </TeamMemberInfo>
            </TeamMemberInner>
        </TeamMemberWrap>
    );
};

TeamMember.propTypes = {
    image: PropTypes.shape(ImageType),
    name: PropTypes.string,
    designation: PropTypes.string,
    socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
    layout: PropTypes.oneOf([1, 2, 3]),
};

TeamMember.defaultProps = {
    layout: 1,
    social: [],
};

export default TeamMember;
