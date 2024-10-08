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
    {
      company: "Builders",
      logo: "/images/sponsors/builders.png",
      title: "Join CTO Collective",
      description: ["Engage with leading tech companies.",
                    "We connect top-tier CTOs to tech-driven companies, offering exciting on- and off-market opportunities, both permanent and interim.",
                    "Directly connecting CTOs to founders, scaleups, and industry leaders."],
      url: "https://www.builders.studio/cto-join",
    },
    {
      company: "Booking.com",
      logo: "/images/sponsors/booking.png",
      title: "Senior Data Scientist - Experimentation team",
      description: ["As a Senior Data Scientist in the Experimentation Science Team, you focus on scalable solutions to the company’s most persistent challenges in decision making. You provide support to experimenters and business leaders across the company, investigate problems and define clear solutions and requirements for their implementation"],
      url: "https://jobs.booking.com/booking/jobs/12824?lang=en-us",
    },
    {
      company: "Booking.com",
      logo: "/images/sponsors/booking.png",
      title: "Senior Machine Learning Engineer - Gen AI",
      description: ["You’ll be part of the GenAI Foundation team inside the Machine Learning Platform, a newly formed team that will be part of the central engine that powers Booking.coms machine learning and GenAI applications. In this team you will work on building components of the genAI lifecycle that will be used in other use-cases all across the company."],
      url: "https://jobs.booking.com/booking/jobs/12777?lang=en-us",
    },
    {
      company: "Booking.com",
      logo: "/images/sponsors/booking.png",
      title: "Machine Learning Manager - Smart Positioning",
      description: ["The Smart Positioning team sits in the Marketplace ML department. The goal of the team is to apply feedback loop ML technology to personalize the Booking.com website and application by displaying the right content to the right travelers"],
      url: "https://jobs.booking.com/booking/jobs/12854?lang=en-us",
    },
    {
      company: "Adyen",
      logo: "/images/sponsors/adyen.png",
      title: "Machine Learning Engineer - MLOps",
      description: ["Adyen is seeking a Machine Learning Engineer to join our central MLOps team, which is responsible for building platforms and tools for all of our data science teams.",
                    "In this role, you will play a crucial part in shaping the MLOps ecosystem at Adyen, serving a variety of machine learning and statistical models for both real-time and batch predictions — from optimizing payments to combating fraud."],
      url: "https://grnh.se/e547fc771us",
    },
    {
      company: "Adyen",
      logo: "/images/sponsors/adyen.png",
      title: "Senior Machine Learning Scientist",
      description: ["Adyen is looking for a Senior Machine Learning Scientist to join our team in Amsterdam, a person sitting at the cornerstone of algorithms, mathematics, and engineering, who can solve problems by designing and implementing production-ready machine learning solutions. You will be responsible for building, developing and deploying algorithms that power data products at Adyen."],
      url: "https://grnh.se/47a0f8f71us",
    },
    {
      company: "Adyen",
      logo: "/images/sponsors/adyen.png",
      title: "Senior Data Engineer",
      description: ["Adyen is looking for a Senior Data Engineer to join our data solution in Amsterdam. We’re looking for a person that understands the business context and the data needs behind it, and excels in implementing high-quality data pipelines on our Big Data Platform.",
                    "As a Senior Data Engineer at Adyen, you will play a crucial role in shaping our data infrastructure and ensuring the seamless flow of data."
      ],
      url: "https://grnh.se/d430e4fb1us",
    },
    {
      company: "Adyen",
      logo: "/images/sponsors/adyen.png",
      title: "Data Platform Engineer",
      description: ["Sitting at the intersection of Data Engineering, Backend Engineering, and Systems Engineering, Data Platform Engineers at Adyen build the foundational layer of tooling and processes for our on-premise Big Data Platforms.",
                    "These tools support 10s of products, 100s of developers, and 1000s of daily jobs that add to Adyen’s strong portfolio of capabilities."
      ],
      url: "https://grnh.se/e824c0631us",
    },
    {
      company: "Adyen",
      logo: "/images/sponsors/adyen.png",
      title: "Senior Machine Learning Scientist, Gen AI",
      description: ["Our team's mission is to create a Generative AI platform at Adyen that supports various applications based on LLMs. This involves developing platform-oriented components for deploying an LLM backend within Adyen's GPU cluster in Kubernetes, with features like monitoring, access control, rate limiting, prompt debugging, and experiment tracking. We mainly use Open Source frameworks and models."
      ],
      url: "https://grnh.se/30ad6cff1us",
    },
    {
      company: "Big Data Republic",
      logo: "/images/sponsors/bigdatarepublic.png",
      title: "Data Engineer",
      description: ["As data engineer at BigData Republic you'll consult the biggest companies in the Netherlands on complex challenges. Roll up your sleeves to write production ready code, advise on business decisions or coach your team to the next level."
      ],
      url: "https://bigdatarepublic.nl/join-us/data-engineer/",
    },
    {
      company: "Big Data Republic",
      logo: "/images/sponsors/bigdatarepublic.png",
      title: "Data Scientist",
      description: ["You have deep expertise in a technical field, dare to tackle the nitty gritty mathematical issues, and can put the Science in Data Science where needed. You also recognize when a more pragmatic approach is required, and always try to understand the bigger picture.",
                    "Bringing solutions to production is key, so scalable deployment, model interfacing and monitoring are aspects that you will come across"
      ],
      url: "https://bigdatarepublic.nl/join-us/research-data-scientist/",
    }, 
    {
      company: "Big Data Republic",
      logo: "/images/sponsors/bigdatarepublic.png",
      title: "Machine Learning Engineer",
      description: ["When you join us, you will work on complex challenges for large organizations. Take a look at our services page for an impression of industries and use cases. At the same time, you are part of a small, informal team of peers that know each other really well, share knowledge and inspire each other."
      ],
      url: "https://bigdatarepublic.nl/join-us/machine-learning-engineer/",
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
