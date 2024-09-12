import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import JobBoardHeader from "../components/JobBoardHeader";

const JobBoard = () => {
  const jobs = [
    {
      company: "Picnic Technologies",
      logo: "/images/sponsors/picnic.svg",
      title: "ML Ops Engineer",
      description: ["Various MLOps-oriented projects to: ", 
                    "- Automate machine learning model retraining and deployment",
                    "- Set up infrastructure for model inference, supporting deployment strategies like A/B testing and shadow testing",
                    "- Improve monitoring in order to exercise operational excellence for our machine learning models",
                    "- Simplify and standardize usage of tools by developing and inner-sourcing Python packages",
                 ],
      url: "https://grnh.se/dbca8bc71us",
    },
    {
      company: "Builders",
      logo: "/images/sponsors/builders.png",
      title: "CTO in Residence",
      description: ["As a CTO at Builders, you will wear multiple hats.",
                    "Not only will you be an experienced, hands-on builder with in-depth full-stack knowledge, but your entrepreneurial spirit will also see you play a pivotal role as a co-founder, navigating product tech challenges and devising market entry strategies."],
      url: "https://careers.builders.studio/o/cto-in-residence-1",
    },
    {
      company: "Builders",
      logo: "/images/sponsors/builders.png",
      title: "Become a founder",
      description: ["Join Builders: Crafting the future of work & life",
                    "At Builders Startup Studio, we're not just creating companies; we're reshaping the work-life experience. ",
                    "Our ambition goes beyond mere problem-solving — it's about redefining how millions find joy and functionality in their daily routines.",
                    "We've positively impacted over a million working lives, and we're just getting started."],
      url: "https://careers.builders.studio/o/become-a-founder",
    },

    // Add more job listings as needed
  ];

  return (
    <Layout>
      <JobBoardHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-black border-opacity-25">
              <div className="flex items-center mb-4">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-12 h-12 mr-4 object-contain"
                />
                <h2 className="text-2xl font-semibold">{job.company}</h2>
              </div>
              <h3 className="text-xl font-bold mb-4">{job.title}</h3>
              {job.description.map((desc, index) => (
                <React.Fragment key={index}>
                  <p className="text-gray-600 mb-4">{desc}</p>
                </React.Fragment>
              ))}
              <Link
                to={job.url}
                className="inline-block bg-pydata-blue text-white px-4 py-2 rounded hover:bg-pydata-orange transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default JobBoard;
