import * as React from 'react'
import Layout from '../components/Layout';

const ProgramPage = () => {
    return (
      <Layout>
        <iframe
        src="https://amsterdam2024.pydata.org/cfp/schedule/"
        style={{ width: '100%', border: 'none', overflow: 'hidden' }}
        title="Program"
    ></iframe>
      </Layout>
    )
  };
  
  export default ProgramPage;