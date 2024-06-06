import React from 'react';
import '../styles/layout.css';
import '../styles/texts.css';

const NewsItem = ({ title, date, htmlContent }) => {
  return (
    <div className="news-item my-4 p-4 pt-5 m-10 rounded-md bg-slate-200 shadow-lg">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-500">{date}</p>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default NewsItem;
