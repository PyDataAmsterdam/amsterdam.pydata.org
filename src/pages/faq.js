import React from 'react';
import Layout from '../components/Layout'
import FAQAccordion from '../components/FAQAccordion';
import FAQHeader from '../components/FAQHeader';

const FAQPage = () => {
    return (
      <Layout>
      {/* ------- FAQ------- */}
      <FAQHeader/>
      <FAQAccordion/>
      </Layout>
    );
  };
  
  export const Head = () => <title>FAQ</title>
  
  export default FAQPage;