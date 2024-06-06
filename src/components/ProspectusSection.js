import React from 'react';
import Button from './Button'; // Ensure this path matches your project structure

const SponsorSection = () => {
  return (
    <div className="bg-white py-16 buttons-breakpoint:py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left px-4 sm:px-6 lg:px-8">
        <div className="w-full md:w-1/3 mb-8 md:mb-0 md:pr-8">
          <a href="/PyData-Amsterdam-2024-Sponsorship-Prospectus.pdf" target="_blank" rel="noopener noreferrer">
            <img src="/images/prospectus_cover.png" alt="PDF Cover" className="w-full md:w-auto mx-auto" style={{ maxWidth: '350px' }} />
          </a>
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-base mb-4">
            Join our community at PyData Amsterdam, from 18-20 September 2024. Engage, network, and collaborate with peers and like-minded people in the Python Data community. Sponsoring this event allows you to meet with data professionals ranging from startup CTOs to corporate developers to senior technology executives from all over the world. Take this chance to inform this community about your organization’s products, services, or job offerings.
          </p>
          <p className="text-base mb-4">
            Sponsoring PyData Amsterdam allows you to associate your brand with a fast-growing but mature technology community. You will take advantage of participating in a professionally-organized conference run by a neutral nonprofit where content is curated by the community.
          </p>
          <p className="text-base mb-4">
            You also give back to the open source community. NumFocus reinvests profits from our events to directly support NumFocus’s sponsored projects such as Pandas, Numpy, Matplotlib and many more.
          </p>
          <p className="text-base mb-4">
            If you want to sponsor PyData Amsterdam or if you have any further questions, please reach out to us at <a href="mailto:amsterdam@pydata.org" className="text-blue-600 hover:underline">amsterdam@pydata.org</a>.
          </p>
          <div className="mt-8 flex justify-center">
            <Button 
                label="Download sponsorship prospectus" 
                icon="download" 
                color="orange" 
                to="/PyData-Amsterdam-2024-Sponsorship-Prospectus.pdf"
                isExternal={true} 
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorSection;
