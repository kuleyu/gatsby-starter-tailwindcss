// Keep all static queries in this file
// Add new queries as necessary
// (you add aliases if you need to access the same node more than once)
// To use:
// import useGraphql from './src/hooks/use-graphql.js'
// const { site } = useGraphql();
// return <h1>{site.siteMetadata.title}</h1>;

import { graphql, useStaticQuery } from 'gatsby';

const useGraphql = () => {
  const data = useStaticQuery(
    graphql`
      {
        allSiteNavigationJson {
          nodes {
            href
            id
            label
          }
        }
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return data;
};

export default useGraphql;
