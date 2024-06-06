import React from 'react';

const goals = [
  {
    title: 'Visibility & branding',
    description: 'Gain exposure to a diverse audience of data enthusiasts, professionals, and thought leaders.',
    icon: '/images/sponsorpage_icons/visibility.png'
  },
  {
    title: 'Networking opportunities',
    description: 'Engage with top talent, industry experts, and potential clients.',
    icon: '/images/sponsorpage_icons/networking.png'
  },
  {
    title: 'Innovation showcase',
    description: 'Highlight your latest technologies, products, and services.',
    icon: '/images/sponsorpage_icons/innovation.png'
  },
  {
    title: 'Community impact',
    description: 'Support the growth and development of the data and AI community.',
    icon: '/images/sponsorpage_icons/community.png'
  }
];

const GoalsSection = () => {
  return (
    <div className="bg-white py-16 buttons-breakpoint:py-24">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl text-black mb-12">Reach your goals</h2>
        <div className="flex flex-wrap justify-around items-start space-y-8 md:space-y-0">
          {goals.map((goal, index) => (
            <div key={index} className="w-full md:w-1/4 px-4 text-center">
              <img
                src={goal.icon}
                alt={goal.title}
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl text-black mb-2">{goal.title}</h3>
              <p>{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoalsSection;
