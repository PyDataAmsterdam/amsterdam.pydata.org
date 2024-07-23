import React, { useEffect, useRef } from "react";
import Layout from "../components/Layout";

const ProgramPage = () => {
  const topRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const script = document.createElement("script");
      script.src = "https://pretalx.com/democon/schedule/widget/v2.en.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        // Scroll back to top after widget loads
        if (topRef.current) {
          topRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
    }, 100); // Delay widget load by 100ms

    return () => {
      clearTimeout(timer);
      const existingScript = document.querySelector('script[src="https://pretalx.com/democon/schedule/widget/v2.en.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <Layout>
      <div className="pt-8" ref={topRef}>
        <div className="buttons-breakpoint:py-24">
          <h2 className="text-center text-4xl text-black">
            PyData Amsterdam 2024 Program
          </h2>
        </div>
        <div className="pretalx-wrapper pretalx-widget-breakpoint:overflow-x-auto sm:overflow-x-visible">
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