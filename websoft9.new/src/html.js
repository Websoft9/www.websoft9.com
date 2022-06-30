import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
    return (
        // eslint-disable-next-line jsx-a11y/html-has-lang
        <html {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link
                    rel="preload"
                    as="font"
                    href="/fonts/cerebrisans/CerebriSans-Regular.woff2"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    as="font"
                    href="/fonts/cerebrisans/CerebriSans-Regular.woff"
                    type="font/woff"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    as="font"
                    href="/fonts/font-awesome/fa-brands-400.woff2"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    as="font"
                    href="/fonts/font-awesome/fa-brands-400.woff"
                    type="font/woff"
                    crossOrigin="anonymous"
                />

                {props.headComponents}
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: props.body }}
                />
                {props.postBodyComponents}
            </body>
        </html>
    );
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
};
