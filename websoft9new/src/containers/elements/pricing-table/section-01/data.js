import imageOne from "@data/images/icons/icon-29-90x90.png";
import imageTwo from "@data/images/icons/icon-30-90x90.png";

export const data = [
    {
        id: "pricing-basic",
        title: "basic",
        image: { src: imageOne },
        price: 19,
        path: "/contact-us",
        features: [
            {
                id: "basic-feature-1",
                text: "03 projects",
            },
            {
                id: "basic-feature-2",
                text: "Quality & Customer Experience",
            },
            {
                id: "basic-feature-3",
                text: "Try for free, forever!",
            },
        ],
    },
    {
        id: "pricing-proffessional",
        title: "proffessional",
        image: { src: imageTwo },
        is_featured: true,
        price: 59,
        path: "/contact-us",
        features: [
            {
                id: "proffessional-feature-1",
                text: "Unlimited project",
            },
            {
                id: "proffessional-feature-2",
                text: "Power And Predictive Dialing",
            },
            {
                id: "proffessional-feature-3",
                text: "Quality & Customer Experience",
            },
            {
                id: "proffessional-feature-4",
                text: "24/7 phone and email support",
            },
        ],
    },
    {
        id: "pricing-business",
        title: "business",
        image: { src: imageOne },
        price: 29,
        path: "/contact-us",
        features: [
            {
                id: "business-feature-1",
                text: "10 projects",
            },
            {
                id: "business-feature-2",
                text: "Power And Predictive Dialing",
            },
            {
                id: "business-feature-3",
                text: "Quality & Customer Experience",
            },
        ],
    },
];
