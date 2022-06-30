import * as React from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import Seo from "@components/seo";
import ErrorArea from "@containers/error";

const NotFoundPage = ({ location }) => (
    <Layout location={location}>
        <Seo title="404: Not found" />
        <ErrorArea />
    </Layout>
);

NotFoundPage.propTypes = {
    location: PropTypes.string,
};

export default NotFoundPage;
