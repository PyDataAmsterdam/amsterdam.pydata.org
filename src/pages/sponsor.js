import React from "react";
import Layout from "../components/Layout";
import BecomeASponsorHeader from "../components/BecomeASponsorHeader";
import GoalsSection from "../components/GoalsSection";
import WhoIsAttending from "../components/WhoIsAttending";
import ProspectusSection from "../components/ProspectusSection";
import Button from "../components/Button";
import SponsorsScroll from "../components/SponsorsScroll";
import SponsorVideoSection from "../components/SponsorVideoSection";

const Sponsor = () => {
  return (
    <Layout>
      <BecomeASponsorHeader />

      <GoalsSection />

      <WhoIsAttending />

      <ProspectusSection />

      <SponsorVideoSection/>

      {/* -------- SPONSORS ---------- */}

      <div className="buttons-breakpoint:pt-24 pb-8 pt-12">
        <h2 className="text-center text-4xl text-black">Powered by</h2>
      </div>

      <SponsorsScroll />

      <div className="mt-8 flex justify-center mb-12 buttons-breakpoint:pb-24">
        <Button
          label="Become a sponsor"
          icon="sponsor"
          color="orange"
          to="/sponsor"
        />
      </div>
    </Layout>
  );
};

export const Head = () => <title>Sponsor PyData</title>;

export default Sponsor;
