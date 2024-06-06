import React from 'react';
import { Link } from 'gatsby';
import NewsItem from './NewsItem';

const NewsSection = ({ newsItems }) => {
  return (
    <section>
      {newsItems.map(({ node }) => (
       <Link to={node.fields.slug}>
       <NewsItem
         key={node.id}
         title={node.frontmatter.title}
         date={node.frontmatter.date}
         htmlContent={node.html}
       />
     </Link>
      ))}
    </section>
  );
};

export default NewsSection;
