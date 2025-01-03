import React, { useRef, useEffect } from "react";
import Layout from "../components/Layout";
import AboutHeader from "../components/AboutHeader";
import Button from "../components/Button";
import CommitteeMembers from "../components/CommitteeMembers";
import CodeOfConduct from "../components/CodeOfConduct";
import DiversitySection from "../components/Diversity";
import OpenSourceImpact from "../components/OpenSourceImpact";

// Step 2: Define your component
const AboutPage = () => {
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.playbackRate = 0.8;
  //   }
  // }, []);

  return (
    <Layout>
      {/* ----- Conference Overview --------- */}

      <AboutHeader />

      {/* ------- VIDEO LOOP COMMITTEE ------- */}

      {/* <div
        className="video-container"
        style={{
          position: "relative",
          width: "100%",
          height: "0",
          paddingBottom: "30%",
        }}
      >
        <video
          ref={videoRef}
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
          }}
        >
          <source src="/videos/committee.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      <div className="w-full">
          <img
            src="/images/pydata_team_aboutpage.jpg"
            alt="Description"
            className="w-full h-auto p-4"
          />
        </div>

      <div className="m-2 buttons-breakpoint:py-24">
        <div class="max-w-6xl mx-auto p-5">
          <p class="text-lg ">
            We welcome attendees with wide varieties of experiences, expertise,
            and backgrounds to join us at the Kromhouthal, Amsterdam. Users,
            contributors, and newcomers can share experiences and learn from one
            another to solve hard problems and grow a stronger open-source
            community.
          </p>
          <br />
          <p class="text-lg ">September 18 - 20 2024</p>
          <br />
          <p class="text-lg ">
            As we work to assemble programming for the 2024 conference, you can
            browse recordings from previous PyData editions on our YouTube to
            get a better idea of the subject matter covered at PyData Amsterdam.
          </p>
        </div>

        <div class="max-w-6xl mx-auto p-5">
          <p class="text-lg ">
            PyData is an educational program of NumFOCUS, a 501(c)3 non-profit
            organization in the United States. PyData provides a forum for the
            international community of users and developers of data analysis
            tools to share ideas and learn from each other. The global PyData
            network promotes discussion of best practices, new approaches, and
            emerging technologies for data management, processing, analytics,
            and visualization. PyData communities approach data science using
            many languages, including (but not limited to) Python, Julia, and R.
          </p>
          <br />
          <p class="text-lg ">
            We aim to be an accessible, community-driven conference, with novice
            to advanced level presentations. PyData tutorials and talks bring
            attendees the latest project features along with cutting-edge use
            cases.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <Button label="Join Us" icon="ticket" color="orange" to="/tickets" />
        </div>
      </div>

      {/* --------- OPEN SOURCE ------------- */}

      <OpenSourceImpact />

      {/* -------- COMMITEE MEMBERS -------- */}

      <CommitteeMembers />

      {/* ------- Code of Conduct ------- */}

      <CodeOfConduct />

      {/* ------- Diversity------- */}

      <DiversitySection />

    </Layout>
  );
};

export const Head = () => <title>About PyData Amsterdam 2024</title>;

// Step 3: Export your component
export default AboutPage;
