import React, { useEffect } from "react";
import Layout from "../components/Layout";

const ProgramPage = () => {
  useEffect(() => {
    // This effect will run after the component mounts
    const script = document.createElement("script");
    script.src = "https://pretalx.com/democon/schedule/widget/v2.en.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <div>
        <div className="buttons-breakpoint:py-24">
          <h2 className="text-center text-4xl text-black">
            PyData Amsterdam 2024 Program
          </h2>
        </div>
        {/* <div className="navigation">
          <a href="https://amsterdam2024.pydata.org/cfp/schedule/" className="btn btn-outline-success  active">
            <i className="fa fa-calendar"></i> Schedule
          </a>
          <a href="https://amsterdam2024.pydata.org/cfp/talk/" className="btn btn-outline-success ">
            <i className="fa fa-comments-o"></i> Sessions
          </a>
          <a href="https://amsterdam2024.pydata.org/cfp/speaker/" className="btn btn-outline-success ">
            <i className="fa fa-group"></i> Speakers
          </a>
        </div> */}
        <div className="pretalx-wrapper">
          <pretalx-schedule
            event-url="https://amsterdam2024.pydata.org/cfp/"
            locale="en"
            style={{
              "--pretalx-clr-primary": "#3aa57c",
              '--schedule-max-width': "500px"
            }}
          ></pretalx-schedule>
        </div>
        <noscript>
          <div className="pretalx-widget">
            <div className="pretalx-widget-info-message">
              JavaScript is disabled in your browser. To access our schedule
              without JavaScript, please{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://amsterdam2024.pydata.org/cfp/schedule/"
              >
                click here
              </a>
              .
            </div>
          </div>
        </noscript>
      </div>
    </Layout>
  );
};

export default ProgramPage;
