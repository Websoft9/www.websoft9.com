const getSiblings = function (elem) {
    var siblings = [];
    var sibling = elem.parentNode.firstChild;
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};

const getClosest = function (elem, selector) {
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
    }
    return null;
};

const slugify = function (text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w-]+/g, "") // Remove all non-word chars
        .replace(/--+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
};

const createList = ({ list, separator = "," }) => {
    if (!list) return;
    return list.map((item, index) => {
        let sep;
        if (list.length !== index + 1) {
            sep = separator;
        }
        return { ...item, sep };
    });
};

const flatDeep = (arr, d = 1) => {
    return d > 0
        ? arr.reduce(
              (acc, val) =>
                  acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
              []
          )
        : arr.slice();
};

function truncateString(str, num, dots = true) {
    let endDots = dots ? "..." : "";
    if (str.length <= num) {
        return str;
    }
    return str.slice(0, num) + endDots;
}

const allowedTags = [
    "p",
    "px",
    "py",
    "pt",
    "pb",
    "pl",
    "pr",
    "m",
    "mx",
    "my",
    "mt",
    "mb",
    "ml",
    "mr",
    "bg",
    "color",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "lineHeight",
    "letterSpacing",
    "textAlign",
    "display",
    "justifyContetnt",
    "alignItems",
    "border",
    "borderWidth",
];

function splitVideoLink(link) {
    let video_id, video_channel;
    if (link) {
        const video_arr = link.split("=", -1);
        video_id = video_arr[1];
        video_channel = link.split(".")[1];
    }
    return { video_id, video_channel };
}

function normalizedData(data) {
    let allContetnt;

    data.forEach((item) => {
        const newObj = Object.entries(item).reduce((acc, cur) => {
            const [key, property] = cur;
            if (property === null) {
                return acc;
            }
            return {
                ...acc,
                [key]: property,
            };
        }, {});

        allContetnt = {
            ...allContetnt,
            [newObj["section"]]: {
                ...newObj,
            },
        };
    });

    return allContetnt;
}

function normalizedArray(data, key) {
    let content = {};
    data.forEach((item) => {
        const isHasKey = hasKey(content, item[key]);
        if (!isHasKey) {
            content = {
                ...content,
                [item[key]]: [item],
            };
        } else {
            content[item[key]].push(item);
        }
    });
    return content;
}

function hasKey(obj, key) {
    return !!Object.prototype.hasOwnProperty.call(obj, key);
}

module.exports = {
    slugify,
    getSiblings,
    getClosest,
    createList,
    flatDeep,
    truncateString,
    allowedTags,
    splitVideoLink,
    normalizedData,
    hasKey,
    normalizedArray,
};
