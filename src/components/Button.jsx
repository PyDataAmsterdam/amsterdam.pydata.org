import * as React from 'react';
import { Link } from 'gatsby';
import { PlusCircleIcon, TicketIcon, FolderArrowDownIcon, EnvelopeIcon, BanknotesIcon, HandRaisedIcon } from '@heroicons/react/24/outline';

const Button = ({ label, icon, to, color, isExternal, minify, hiddenOnMobile }) => {
  const buttonStyle = {
    blue: 'text-white font-bold py-2 px-4 rounded mr-2 md:mr-4 submit-talk-button bg-blue-500 hover:bg-blue-600',
    orange: 'text-white font-bold py-2 px-4 rounded mr-2 md:mr-4 buy-tickets-button bg-orange-500 hover:bg-orange-600'
  };

  // Choose the icon component based on the 'icon' prop
  let IconComponent;
  switch (icon) {
    case 'submit':
      IconComponent = PlusCircleIcon;
      break;
    case 'contact':
      IconComponent = EnvelopeIcon;
      break;
    case 'ticket':
      IconComponent = TicketIcon;
      break;
    case 'download':
      IconComponent = FolderArrowDownIcon;
      break;
    case 'sponsor':
      IconComponent = BanknotesIcon;
      break;
    case 'volunteer':
      IconComponent = HandRaisedIcon;
      break;
    default:
      IconComponent = null;
  }

  // Get current URL parameters
  const currentParams = typeof window !== 'undefined' ? window.location.search : '';

  // Determine the tag to use (Link or a)
  const Tag = isExternal ? 'a' : Link;
  const props = isExternal
    ? { href: `${to}${currentParams}`, target: '_blank', rel: 'noopener noreferrer' }
    : { to: `${to}${currentParams}` };
  

  return (
    <Tag {...props} className={`${buttonStyle[color]} inline-flex items-center ${hiddenOnMobile ? 'hidden sm:inline-flex' : ''}`}>
      {IconComponent && <IconComponent className="h-5 w-5" aria-hidden="true" />}
      <span className={`ml-2 ${minify ? 'buttons-breakpoint:block hidden' : 'block'}`}>{label}</span>
    </Tag>
  );
};

export default Button;