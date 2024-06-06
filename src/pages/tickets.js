import React from 'react';
import Layout from '../components/Layout'
import '../styles/layout.css';
import FAQAccordion from '../components/FAQAccordion';

const TicketPage = () => {
  return (
    <Layout>
    <div className='mb-7'>
    <iframe
        id="ticketIframe"
        src="/ticket-tailor.xhtml"
        style={{ width: '100%', border: 'none', overflow: 'hidden' }}
        title="Ticket Widget"
    ></iframe>
    </div>
    {/* ------- FAQ------- */}
    <div className="pt-8 pb-8">
        <h2 className="text-center text-5xl font-bold text-pydata-blue">Frequently Asked Questions</h2>
    </div>
    <FAQAccordion/>
    </Layout>
  );
};

export const Head = () => <title>Buy Tickets</title>

export default TicketPage;
