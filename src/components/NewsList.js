import React from 'react';
import NewsItem from './NewsItem';
import { Link } from 'gatsby';

const NewsList = ({ data }) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link to={node.fields.slug}>
          <NewsItem
            key={node.id}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            htmlContent={node.html}
          />
        </Link>
      ))}
    </div>
  );
};

export default NewsList;
