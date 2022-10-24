import { ThemeProvider } from "@styled";
import { theme } from "@styled/theme";
import PropTypes from "prop-types";
import React from "react";
// import "@assets/fonts/cerebrisans/cerebrisans.css";
import "@assets/css/bootstrap.css";
import "@assets/css/fonts.css";
import { GlobalStyle } from "@assets/css/main-style";
import "@assets/fonts/font-awesome/font-awesome.css";
import Transition from "@components/transition";
import ScrollToTop from "@ui/scroll-to-top";

const Layout = ({ children, location }) => {
    return (
        <ThemeProvider theme={theme}>
            <Transition location={location}>
                <div className="wrapper">
                    <GlobalStyle />
                    {children}
                    <ScrollToTop />
                </div>
            </Transition>
        </ThemeProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.shape({}),
};

export default Layout;
