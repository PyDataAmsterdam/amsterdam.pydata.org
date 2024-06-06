import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const NewsItemPage = ({ data }) => { // data prop injected by Gatsby's GraphQL query
  const { markdownRemark } = data; // Data for our markdown
  const { frontmatter, html } = markdownRemark; // De-structure the frontmatter and html strings

  return (
    <Layout>
      <div className="pt-8 pb-8">
        <h2 className="text-center text-4xl font-bold text-avenir text-3d text-pydata-blue">
          {frontmatter.title}
        </h2>
        <h2 className="text-center text-4xl font-bold text-avenir text-3d text-pydata-blue newsitem-page-date">
          {frontmatter.date}
        </h2>
        <article className="news-item my-4 p-4 pt-5 m-10 rounded-md text-avenir bg-slate-200 shadow-lg">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </div>
    </Layout>
  );
};

export default NewsItemPage;

// This GraphQL query is executed at build time by Gatsby.
// The provided slug comes from the context in the createPage call.
export const query = graphql`
  query NewsItemQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;