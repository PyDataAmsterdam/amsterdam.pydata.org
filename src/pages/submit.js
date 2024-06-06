import * as React from 'react'
import Layout from '../components/Layout';

const SubmitPage = () => {
    return (
      <Layout>
        <iframe
        src="https://amsterdam2024.pydata.org/cfp/cfp"
        style={{ width: '100%', border: 'none', overflow: 'hidden' }}
        title="Submit"
    ></iframe>
      </Layout>
    )
  };
  
  export default SubmitPage;