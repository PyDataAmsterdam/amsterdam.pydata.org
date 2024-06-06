import React from "react";
import Layout from "../components/Layout";

const Volunteering = () => {
  return (
    <Layout>
      {/* ------- FAQ------- */}
      <div className="pt-8 pb-10 mt-8 buttons-breakpoint:py-24">
        <h2 className="text-center text-4xl text-black">
          Join us as a volunteer!
        </h2>
      </div>
      <div className="mb-12">
        <div class="max-w-6xl mx-auto p-5">
          <p class="text-lg">
            We're delighted to announce that the{" "}
            <strong>Call for Volunteers</strong> is officially open! With the
            volunteers' commitment and collaboration, we made 2023 Conference a
            huge success. And guess what? This year we want it to be even more
            successful and we need your help. As a volunteer, you'll have the
            opportunity to: Engage with like-minded individuals - Gain valuable
            experience and knowledge - Develop skills - Make a positive impact
            on PyData community. Whether you're an experienced volunteer or
            looking to get involved for the first time, we welcome you with open
            arms. So, what do you say? Ready to be a part of something amazing?
            Take the first step and{" "}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdNCg2K4e59CTRWbwipGZaU1JQY3Wd7j4utZ6smKX8O61wD5w/viewform" class="text-blue-500 underline">
              APPLY HERE
            </a>
            .
          </p>
          <br />
          <p class="text-lg">
            <strong>Important dates:</strong>
            <br />
            Application deadline: Sunday, July 14
            <br />
            Application status reply: Saturday, July 27
          </p>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <title>Volunteering</title>;

export default Volunteering;
