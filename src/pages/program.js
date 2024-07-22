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
        <div className="pt-4 pb-4 mt-4 buttons-breakpoint:py-24">
          <h2 className="text-center text-4xl text-black">
            PyData Amsterdam 2024 Program
          </h2>
        </div>
        <div className="pretalx-wrapper">
          <pretalx-schedule
            event-url="https://amsterdam2024.pydata.org/cfp/"
            locale="en"
            style={{
              "--pretalx-clr-primary": "#3aa57c",
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
