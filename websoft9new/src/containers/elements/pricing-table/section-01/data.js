import imageOne from "@data/images/icons/icon-29-90x90.png";
import imageTwo from "@data/images/icons/icon-30-90x90.png";

export const data = [
    {
        id: "pricing-basic",
        title: "FREE",
        image: { src: imageOne },
        price: "0",
        path: "/contact-us",
        features: [
            {
                id: "basic-feature-1",
                text: "100% open source",
            },
            {
                id: "basic-feature-2",
                text: "Unlimited users",
            },
            {
                id: "basic-feature-3",
                text: "Documentation",
            },
            {
                id: "basic-feature-4",
                text: "FAQ",
            },
            {
                id: "basic-feature-5",
                text: "Get support from Github issues",
            },
            {
                id: "basic-feature-6",
                text: "Get support on demand",
            },
        ],
    },
    {
        id: "pricing-proffessional",
        title: "STANDARD",
        image: { src: imageTwo },
        is_featured: true,
        price: 10,
        path: "/contact-us",
        features: [
            {
                id: "proffessional-feature-1",
                text: "Includes all【Free】+",
            },
            {
                id: "proffessional-feature-2",
                text: "Subscription fee, cancel anytime",
            },
            {
                id: "proffessional-feature-3",
                text: "7×24 Ticket and Email support",
            },
            {
                id: "proffessional-feature-4",
                text: "7×8 Telephone support",
            },
            {
                id: "proffessional-feature-5",
                text: "7×5 IM support",
            },
            {
                id: "proffessional-feature-6",
                text: "VIP archives",
            },
            {
                id: "proffessional-feature-7",
                text: "Free for system issues",
            },
            {
                id: "proffessional-feature-8",
                text: "Priority for paid service",
            },
        ],
    },
    {
        id: "pricing-business",
        title: "PROFFESSIONAL",
        image: { src: imageOne },
        price: 60,
        path: "/contact-us",
        features: [
            {
                id: "business-feature-1",
                text: "Includes all【Standard】+",
            },
            {
                id: "business-feature-2",
                text: "One-to-one support",
            },
            {
                id: "business-feature-3",
                text: "Free for HTTPS, SMTP settings",
            },
            {
                id: "business-feature-4",
                text: "Guide for Backup and upgrade",
            },
            {
                id: "business-feature-5",
                text: "Guide for HA",
            },
            {
                id: "business-feature-6",
                text: "Guide for security",
            },
        ],
    },
];
