import React from "react";

const WhoIsAttending = () => {
  return (
    <div className="w-full grey-background-section py-24 mx-auto">
      <div className="max-w-7xl mx-auto text-center px-0 sm:px-6 lg:px-8">
        <div className="pb-8 mb-12">
          <h2 className="text-center text-4xl text-black">Who is attending?</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center md:items-stretch space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-center justify-center">
            <div className="text-5xl text-black attendees-counter">800+</div>
            <div className="text-xl text-black mt-4">Attendees</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-5xl text-black">40+</div>
            <div className="text-xl text-black mt-4">Speakers</div>
          </div>
          <div className="flex flex-col items-center justify-center attendees-ds">
            <div className="text-5xl text-black">57%</div>
            <div className="text-xl text-black">
              <p className="mt-4">Data Scientist</p>
              <p>Developer / Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIsAttending;
