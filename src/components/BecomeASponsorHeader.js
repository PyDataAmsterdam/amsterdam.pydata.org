import React from 'react';
import Button from './Button'; // Ensure this path matches your project structure

const SponsorSection = () => {
  return (
    <div className="bg-indigo-950 py-16 buttons-breakpoint:py-24 text-center text-white">
      <p className="text-xl mb-4">September 18 - 20 | Amsterdam</p>
      <h2 className="text-5xl mb-8">Become a sponsor or partner</h2>
      <div className="mt-8 flex justify-center">
      <Button 
          label="Get in touch" 
          icon="contact" 
          color="orange" 
          to="mailto:amsterdam@pydata.org" 
          isExternal={true} 
        />
      </div>
    </div>
  );
};

export default SponsorSection;
