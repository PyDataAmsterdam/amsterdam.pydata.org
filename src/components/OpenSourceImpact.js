import * as React from "react";

const OpenSourceImpact = () => {
  return (
    <div className="grey-background-section buttons-breakpoint:py-24">
      <div className="pt-8 pb-8">
        <h2 className="text-center text-4xl text-black">Open Source & Community Impact</h2>
      </div>
      <div class="max-w-6xl mx-auto p-5">
      <p className="text-lg">
            PyData is a community for developers and users of open source data tools.
            It is an educational program by{" "}
            <a
              href="https://numfocus.org/"
              className="text-blue-500 underline"
            >
              NumFOCUS
            </a>
            , a 501(c)(3) nonprofit charity. The mission of NumFOCUS is to promote open practices in research, 
            data, and scientific computing by serving as a fiscal sponsor for open source projects and 
            organizing community-driven educational programs.
            </p>
            <br/>
            <p className="text-lg">
            PyData provides a forum for the international community of users and developers of data analysis tools to share 
            ideas and learn from each other. The global PyData network promotes discussion of best practices, new approaches, 
            and emerging technologies for data management, processing, analytics, and visualization. 
            PyData communities approach data science using many languages, including (but not limited to) Python, Julia, and R.
            </p>
            <br/>
            <p className="text-lg">
            PyData is organized by, and all proceeds benefit, NumFOCUS, a 501(c)(3) public charity. 
            Proceeds are used for the continued development of open-source tools used by data scientists and the advancement of the NumFOCUS mission.
            </p>
            <br/>
            <p className="text-lg">This means that if you support PyData, 
            you support open source Python and the tools you love.
          </p>
        <br/>
      </div>
    </div>
  );
};

export default OpenSourceImpact;
