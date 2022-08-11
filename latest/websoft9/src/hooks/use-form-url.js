import { useStaticQuery, graphql } from "gatsby";

function useFormUrl() {
    const getFormUrl = useStaticQuery(graphql`
        query GET_FORM_URL {
            site {
                siteMetadata {
                    getform
                }
            }
        }
    `);
    const {
        site: {
            siteMetadata: { getform },
        },
    } = getFormUrl;
    return getform;
}

export default useFormUrl;
