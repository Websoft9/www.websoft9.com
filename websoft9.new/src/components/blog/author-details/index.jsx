import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import Social, { SocialLink } from "@ui/social";
import { ImageType, SoicalType } from "@utils/types";
import { StyledAuthor, StyledAvatar, StyledInfo, StyledBio } from "./style";

const AuthorDetails = ({ avatar, name, bio, socials }) => {
    return (
        <StyledAuthor>
            <StyledAvatar>
                {avatar?.src && (
                    <Image src={avatar.src} alt={avatar?.title || name} />
                )}
                {socials && (
                    <Social size="small" space="8px">
                        {socials.map((social) => (
                            <SocialLink
                                key={social.id}
                                path={social.link}
                                label={social.title}
                            >
                                <i className={social.icon}></i>
                            </SocialLink>
                        ))}
                    </Social>
                )}
            </StyledAvatar>
            <StyledInfo>
                {name && <h6>{name}</h6>}
                {bio && <StyledBio>{bio}</StyledBio>}
            </StyledInfo>
        </StyledAuthor>
    );
};

AuthorDetails.propTypes = {
    avatar: PropTypes.shape(ImageType),
    name: PropTypes.string,
    bio: PropTypes.string,
    socials: PropTypes.arrayOf(PropTypes.shape(SoicalType)),
};

export default AuthorDetails;
