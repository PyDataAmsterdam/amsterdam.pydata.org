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
