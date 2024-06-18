import * as React from "react";
import Button from "./Button";

const WhatToExpectSection = () => {
  return (
    <div className="container mx-auto px-4 buttons-breakpoint:py-24">
      <div className="flex flex-col md:flex-row items-center mb-8 pt-10 pb-8">
        <div className="w-full md:w-1/2">
          <img
            src="/images/impression/impression-1.JPG"
            alt="Description"
            className="w-full h-auto p-4"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-4 pl-4">
          <h3 className="text-2xl text-black mb-4">
            Insightful talks, hands-on tutorials, and exceptional networking
            opportunities
          </h3>
          <p className="text-lg mb-4">
            PyData Amsterdam 2024 is a 3-day event for the international
            community of users and developers of data analysis tools to share
            ideas and learn from each other. The global PyData network promotes
            discussion of best practices, new approaches, and emerging
            technologies for data management, processing, analytics, and
            visualization. PyData communities approach data science using many
            languages, including (but not limited to) Python, Julia, and R.
          </p>
          <p className="text-lg mb-6">
            Over the span of 3 days, attendees will have the opportunity to
            participate in workshops, attend live keynote sessions and talks, as
            well as get to know fellow members of the PyData Community.
          </p>
          <div className="flex space-x-4">
            <Button
              label="Get Tickets"
              icon="ticket"
              color="orange"
              to="/tickets"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatToExpectSection;
