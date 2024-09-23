import React from "react";
import Button from "./Button";

const speakers = [
  { name: "Ines Montani", image: "/images/speakers/ines-montani.jpeg", affiliation: "explosion.ai",
    url: "https://www.linkedin.com/in/inesmontani/"
  },
  { name: "Merve Noyan", image: "/images/speakers/merve-noyan.png", affiliation: "HuggingFace 🤗",
    url: "https://www.linkedin.com/in/merve-noyan-28b1a113a/"
  },
  { name: "Marzieh Fadaee", image: "/images/speakers/marzieh-fadaee.jpeg", affiliation: "Cohere 4 AI",
    url: "https://www.linkedin.com/in/marzieh-fadaee-b7393370/"
   }
];

const MeetTheSpeakers = () => {
  return (
    <div className="bg-white py-16 buttons-breakpoint:py-24">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl mb-12 text-black">
          2024 keynote speakers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {speakers.map((speaker, index) => (
            <div key={index} className="text-center">
              <a href={speaker.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-48 h-48 rounded-full mx-auto mb-2"
                />
                <div className="text-xl text-black">{speaker.name}</div>
                <div className="text-lg text-gray-600">{speaker.affiliation}</div>
              </a>
            </div>
          ))}
        </div>
        {/* <div className="mt-8 flex justify-center">
          <Button label="Join us" icon="ticket" color="orange" to="/tickets" />
        </div> */}
      </div>
    </div>
  );
};

export default MeetTheSpeakers;