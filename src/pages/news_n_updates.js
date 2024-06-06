import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout'
import NewsList from '../components/NewsList';

const NewsAndUpdatesPage = ({ data }) => {
    return (
        <Layout>
            <div class="pt-8 pb-8">
                <h2 class="text-center text-5xl font-bold text-3d text-pydata-blue">News & Updates</h2>
            </div>
            <NewsList data={data}>
            </NewsList>
        </Layout>
    )
  }
  
export const Head = () => <title>News & Updates</title>

export const query = graphql`
  query {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

export default NewsAndUpdatesPage;