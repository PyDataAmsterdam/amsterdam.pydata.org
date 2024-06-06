import React from 'react';
import Layout from '../components/Layout'
import FAQAccordion from '../components/FAQAccordion';

const FAQPage = () => {
    return (
      <Layout>
      {/* ------- FAQ------- */}
      <div className="pt-8 pb-10 mt-8">
          <h2 className="text-center text-4xl text-black">Frequently Asked Questions</h2>
      </div>
      <FAQAccordion/>
      </Layout>
    );
  };
  
  export const Head = () => <title>FAQ</title>
  
  export default FAQPage;