import React from "react";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";

const Impression = () => {
  return (
    <Layout>
      <div className="w-full pt-12 pb-12 mt-8 mb-4 buttons-breakpoint:py-24">
        <h2 className="text-center text-5xl pt-4 pb-4 mt-4 mb-4 p-2 text-black">
          PyData Amsterdam 2023 Vibes
        </h2>
      </div>
      <Gallery />
      <div className="w-full grey-background-section flex flex-col items-center pt-8 mt-8 pb-12 buttons-breakpoint:pt-24">
        <div className="w-full text-center mb-8">
          <h2 className="text-5xl pt-4 pb-4 mt-4 mb-4 p-2 text-black">
            PyData Amsterdam 2023 Talks
          </h2>
        </div>
        <div className="w-full flex flex-col buttons-breakpoint:flex-row max-w-7xl mx-auto">
          <div
            className="w-full buttons-breakpoint:w-2/3 pb-56p buttons-breakpoint:pb-40p"
            style={{
              position: "relative",
              height: "0",
              marginBottom: "5%",
              overflow: "hidden",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                border: "none",
                width: "100%",
                height: "100%",
                top: "0",
              }}
              src="https://www.youtube.com/embed/videoseries?si=UFgJE66iWYyaFL5M&amp;list=PLGVZCDnMOq0qBwjAj8VwxoBlLBpGH41QD"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full buttons-breakpoint:w-1/2 buttons-breakpoint:pl-8 pl-2 flex flex-col justify-center pb-12">
            <h3 className="text-3xl text-black text-left playlist-header buttons-breakpoint:pr-12 pb-4">
              PyData Amsterdam 2023 keynotes
            </h3>
            <p className="text-xl">
              Check out the PyData Amsterdam 2023 edition keynote talks here!
            </p>
            <br />
            <p className="text-xl">
              Last years' keynotes ranged from philosophical discussion around the dystopian views of AI, 
              to the technical process of training a large language model, to using Python in cultural heritage preservation.
            </p>
            <br />
            <p className="text-xl">
              Scroll down to see all the talks from our previous edition. 
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col buttons-breakpoint:flex-row max-w-7xl mx-auto pt-24 pb-24">
          <div className="w-full buttons-breakpoint:w-1/2 buttons-breakpoint:pl-8 pl-2 flex flex-col justify-center pb-12">
            <h3 className="text-3xl text-black text-left playlist-header buttons-breakpoint:pr-12 pb-4">
              All PyData Amsterdam 2023 talks
            </h3>
            <p className="text-xl">
              To explore the variety of topics covered at PyData Amsterdam, you
              can browse through the playlist of all talks from the 2023
              edition!
            </p>
            <br />
            <p className="text-xl">
              Our conference showcases a diverse range of technical discussions,
              encompassing the Python ecosystem, data engineering, data science,
              artificial intelligence, and the broader data domain.
            </p>
          </div>
          <div
            className="w-full buttons-breakpoint:w-2/3 pb-56p buttons-breakpoint:pb-40p"
            style={{
              position: "relative",
              height: "0",
              marginBottom: "5%",
              overflow: "hidden",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                border: "none",
                width: "100%",
                height: "100%",
                top: "0",
              }}
              src="https://www.youtube.com/embed/videoseries?si=v16zhKkMqpiCYEdt&amp;list=PLGVZCDnMOq0pADyz2VboxPFIdrsozlENg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
    </Layout>
  );
};

export const Head = () => <title>Impressions PyData 2023</title>;

export default Impression;