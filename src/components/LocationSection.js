import * as React from "react";
import MapComponent from "./MapComponent";

const LocationSection = () => {
  return (
    <div className="mx-auto px-4 grey-background-section buttons-breakpoint:py-24">
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="w-full md:w-1/2">
          <img
            src="/images/venue.JPG"
            alt="Description"
            className="w-full h-auto p-4"
          />
        </div>
        <div className="w-full md:w-1/2 md:pr-4 pt-12">
          <h3 className="text-2xl text-left playlist-header pl-4 text-black">
            Join us on September 18 - 20
          </h3>
          <h3 className="text-2xl text-left playlist-header kromhouthal-sentence pl-4 text-black">
            at de Kromhouthal, Amsterdam & at the OBA Oosterdok
          </h3>
          <p className="text-lg pl-4">
            PyData Amsterdam main event will be hosted in de Kromhouthal. This
            used to be the home base of De Kromhout, manufacturer of large
            marine engines. For years the site was the backdrop of hard work.
            That rich history is not only cherished in the name, but is also
            still visible and tangible everywhere. Kromhouthal is located in
            Amsterdam North.
          </p>
          <br />
          <p className="text-lg pl-4">
            The tutorials will be held at the Oosterdok OBA (University Library)
            location.
          </p>
          <br />
          <p className="text-lg pl-4">
            You can check out the location of the main event using the Google
            Maps widget below!
          </p>
        </div>
      </div>
      <MapComponent />
    </div>
  );
};

export default LocationSection;
