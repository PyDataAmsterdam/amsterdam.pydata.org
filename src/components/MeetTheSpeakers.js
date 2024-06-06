import React from "react";
import Button from "./Button"; // Ensure this path matches your project structure

const speakers = [
  { name: "Vicki Boykis", image: "/images/speakers/vicki-boykis.jpeg", affiliation: "Mozilla AI / Normconf",
    url: "https://www.linkedin.com/in/vickiboykis/"
  },
  { name: "Robert Erdmann", image: "/images/speakers/robert-erdmann.jpeg", affiliation: "Rijksmuseum",
    url: "https://x.com/erdmann"
  },
  { name: "Katharine Jarmul", image: "/images/speakers/katharine-jarmul.jpeg", affiliation: "Thoughtworks",
    url: "https://www.linkedin.com/in/katharinejarmul"
   },
  { name: "Thomas Wolf", image: "/images/speakers/thomas-wolf.jpeg", affiliation: "HuggingFace",
    url: "https://www.linkedin.com/in/thom-wolf/"
   },
  { name: "Vincent Warmerdam", image: "/images/speakers/vincent-warmerdam.jpeg", affiliation: ":probabl.",
    url: "https://www.linkedin.com/in/vincentwarmerdam/"
   }
];

const MeetTheSpeakers = () => {
  return (
    <div className="bg-white py-16 buttons-breakpoint:py-24">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl mb-12 text-black">
          2023 keynote speakers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="text-center">
              <a href={speaker.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-40 h-40 rounded-full mx-auto mb-2"
                />
                <div className="text-xl text-black">{speaker.name}</div>
                <div className="text-lg text-gray-600">{speaker.affiliation}</div>
              </a>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button label="Join us" icon="ticket" color="orange" to="/tickets" />
        </div>
      </div>
    </div>
  );
};

export default MeetTheSpeakers;