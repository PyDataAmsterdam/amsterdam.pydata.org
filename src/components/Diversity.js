import * as React from "react";

const DiversitySection = () => {
  return (
    <div className="buttons-breakpoint:py-24">
      <div className="pt-8 pb-8">
        <h2 className="text-center text-4xl text-black">Diversity</h2>
      </div>
      <div class="max-w-6xl mx-auto p-5">
        <p class="text-lg ">
          Our commitment to the PyData community is to create an inclusive and
          respectful conference environment that invites participation of people
          from all backgrounds. We welcome a diverse attendance to foster deeper
          discussions and build a stronger community.
        </p>
        <br />
        <p class="text-lg ">
          PyData Amsterdam welcomes and encourages participation in our
          community by people of all backgrounds and identities. We are
          committed to promoting and sustaining a culture that values mutual
          respect, tolerance, and learning, and we work together as a community
          to help each other live out these values.
        </p>
        <br />
        <p class="text-lg ">
          We have created this diversity statement because we believe that a
          diverse community is stronger, more vibrant, and produces better
          software and better science. A diverse community where people treat
          each other with respect has more potential contributors, more sources
          for ideas, and fewer shared assumptions that might hinder development
          or research.
        </p>
        <br />
        <p class="text-lg">
          Although we have phrased the formal diversity statement generically to
          make it all-inclusive, we recognize that there are specific identities
          that are impacted by systemic discrimination and marginalization. We
          welcome all people to participate in the NumFOCUS community regardless
          of their identity or background.
        </p>
      </div>
    </div>
  );
};

export default DiversitySection;
