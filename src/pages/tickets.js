import React from "react";
import Layout from "../components/Layout";
import "../styles/layout.css";
import FAQAccordion from "../components/FAQAccordion";

const TicketPage = () => {
  return (
    <Layout>
      <div className="mb-7 tickets-container tickets-container-desktop">
        <iframe
          id="ticketIframe"
          src="/ticket-tailor.xhtml"
          style={{ width: "100%", border: "none", overflow: "hidden" }}
          title="Ticket Widget"
        ></iframe>
      </div>
      {/* ------- Tutorial pass ------- */}

      <div className="buttons-breakpoint:pb-24 pb-12">
        <div className="pt-8 pb-8">
          <h2 className="text-center text-4xl text-black">
            What is a Tutorial Pass?
          </h2>
        </div>
        <div class="max-w-6xl mx-auto p-5">
          <p class="text-lg">
            In addition to inspiring talks and insightful keynotes, PyData
            offers a Tutorial Day!
          </p>
          <br />
          <p class="text-lg">
            This year, we’re kicking things off with Tutorial Day happening the
            day before the main conference! Mark your calendar for Wednesday,
            the 18th, when our amazing speakers will lead hands-on tutorials and
            workshops that dive deep into the cutting-edge technology featured
            in the main conference talks.
          </p>
          <br />
          <p class="text-lg">
            Don’t forget to bring your laptop — these sessions are designed to
            be interactive and practical, giving you the chance to apply what
            you learn in real time!
          </p>
          <br />
          <p class="text-lg">
            Remember, the Tutorial Pass is an add-on to your main conference
            ticket. Make sure you’ve secured your conference pass to join us for
            these tutorials on Wednesday.
          </p>
        </div>
      </div>

      {/* ------- FAQ------- */}
      <div className="pt-8 pb-8">
        <h2 className="text-center text-4xl text-black">
          Frequently Asked Questions
        </h2>
      </div>
      <FAQAccordion />
    </Layout>
  );
};

export const Head = () => <title>Buy Tickets</title>;

export default TicketPage;
