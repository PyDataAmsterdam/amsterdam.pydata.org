import * as React from "react";
import Layout from "../components/Layout";
import SponsorsScroll from "../components/SponsorsScroll";
import Button from "../components/Button";
import WhoIsAttending from "../components/WhoIsAttending";
import MeetTheSpeakers from "../components/MeetTheSpeakers";
import SponsorColumns from "../components/SponsorColumns";
import Testimonials from "../components/Testimonials";
import HeroSectionTitle from "../components/HeroSectionTitle";
import LocationSection from "../components/LocationSection";
import WhatToExpectSection from "../components/WhatToExpect";

const HomePage = () => {
  return (
    <Layout>
      {/* <Countdown/> */}
      <div className="home-banner">
        <div className="video-container">
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: "-1",
            }}
          >
            <source src="/videos/hero_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <HeroSectionTitle />
      </div>

      {/* ------ WHAT TO EXPECT SECTION ----- */}

      <WhatToExpectSection/>

      {/* ------- WHO IS ATTENDING */}

      <WhoIsAttending />

      {/* --------- MEET THE SPEAKERS ----------- */}

      <MeetTheSpeakers />

      {/* ------- SPONSOR COLUMNS --------- */}

      <SponsorColumns />

      {/* -------- TESTIMONIALS ----------- */}

      <Testimonials />

      {/* -------- LOCATION ---------- */}

      <LocationSection/>

      {/* -------- SPONSORS ---------- */}

      <div className="buttons-breakpoint:pt-24 pb-8 pt-12">
        <h2 className="text-center text-4xl text-black">Powered by</h2>
      </div>

      <SponsorsScroll />

      <div className="mt-8 flex justify-center mb-12 buttons-breakpoint:pb-24">
        <Button
          label="Become a sponsor"
          icon="ticket"
          color="orange"
          to="/sponsor"
        />
      </div>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>PyData Amsterdam 2024</title>
    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://amsterdam.pydata.org" />
    <meta property="og:title" content="PyData Amsterdam 2024" />
    <meta
      property="og:description"
      content="PyData Amsterdam 2024 is a 3-day event for the international community of users and developers of data analysis tools to share ideas and learn from each other."
    />
    <meta
      property="og:image"
      content="https://amsterdam.pydata.org/images/pydata_amsterdam_meta_image.png"
    />
    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://amsterdam.pydata.org" />
    <meta property="twitter:title" content="PyData Amsterdam 2024" />
    <meta
      property="twitter:description"
      content="PyData Amsterdam 2024 is a 3-day event for the international community of users and developers of data analysis tools to share ideas and learn from each other."
    />
    <meta
      property="twitter:image"
      content="https://amsterdam.pydata.org/images/pydata_amsterdam_meta_image.png"
    />
  </>
);

export default HomePage;
