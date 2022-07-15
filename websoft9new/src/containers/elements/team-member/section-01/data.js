import imageOne from "@data/images/team/team-member-07-370x250.jpg";
import imageTwo from "@data/images/team/team-member-01-370x250.jpg";
import imageThree from "@data/images/team/team-member-06-370x250.jpg";
import imageFour from "@data/images/team/team-member-04-370x250.jpg";

export const data = [
    {
        id: "dllie-horton",
        name: "Dollie Horton",
        designation: "Chief People Officer",
        position: "head",
        image: { src: imageOne },
        socials: [
            {
                id: 1,
                icon: "fab fa-facebook",
                link: "https://www.twitter.com",
                title: "Facebook",
            },
            {
                id: 2,
                icon: "fab fa-twitter",
                link: "https://www.twitter.com",
                title: "Twitter",
            },
            {
                id: 3,
                icon: "fab fa-instagram",
                link: "https://www.instagram.com",
                title: "Instagram",
            },
        ],
    },
    {
        id: "robert-amplilian",
        name: "Robert Amplilian",
        designation: "Chief People Officer",
        position: "head",
        image: { src: imageTwo },
        socials: [
            {
                id: 1,
                icon: "fab fa-facebook",
                link: "https://www.twitter.com",
                title: "Facebook",
            },
            {
                id: 2,
                icon: "fab fa-twitter",
                link: "https://www.twitter.com",
                title: "Twitter",
            },
            {
                id: 3,
                icon: "fab fa-instagram",
                link: "https://www.instagram.com",
                title: "Instagram",
            },
        ],
        is_featured: false,
    },
    {
        id: "stephen-mearsley",
        name: "Stephen Mearsley",
        designation: "President & CEO",
        position: "head",
        image: { src: imageThree },
        socials: [
            {
                id: 1,
                icon: "fab fa-facebook",
                link: "https://www.twitter.com",
                title: "Facebook",
            },
            {
                id: 2,
                icon: "fab fa-twitter",
                link: "https://www.twitter.com",
                title: "Twitter",
            },
            {
                id: 3,
                icon: "fab fa-instagram",
                link: "https://www.instagram.com",
                title: "Instagram",
            },
        ],
    },
    {
        id: "daisy-hortron",
        name: "Daisy Hortron",
        designation: "Financial Services",
        position: "executive",
        image: { src: imageFour },
        socials: [
            {
                id: 1,
                icon: "fab fa-facebook",
                link: "https://www.twitter.com",
                title: "Facebook",
            },
            {
                id: 2,
                icon: "fab fa-twitter",
                link: "https://www.twitter.com",
                title: "Twitter",
            },
            {
                id: 3,
                icon: "fab fa-instagram",
                link: "https://www.instagram.com",
                title: "Instagram",
            },
        ],
        is_featured: false,
    },
];
