import * as React from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from './Button'
import { Link } from 'gatsby';

import { StaticImage } from "gatsby-plugin-image"

const navigation = [
  { name: 'About', to: '/about', current: false },
  // { name: 'News & Updates', to: '/news_n_updates', current: false },
  { name: 'Sponsor', to: '/sponsor', current: false },
  { name: 'PDAmsterdam 2023', to: '/pdamsterdam2023', current: false },
  { name: 'FAQ', to: '/faq', current: false },
  { name: 'Volunteering', to: '/volunteering', current: false}
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white fixed top-0 z-50 w-full shadow-md banner-offset">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 logo-navbar-breakpoint:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center logo-navbar-breakpoint:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch logo-navbar-breakpoint:justify-start">
                <div className="flex flex-shrink-0 items-center pydata-logo">
                  <Link to="/">
                    <StaticImage
                      src="../images/pydata-logo-final.png"
                      alt="PyData logo"
                      height={40}
                      width={96}
                      placeholder="none"
                      className="h-8 w-auto logo-navbar-breakpoint:h-10"
                    />
                  </Link>
                </div>
                <div className="hidden logo-navbar-breakpoint:ml-6 logo-navbar-breakpoint:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'bg-gray-200 text-black navbar-item text-lg' : 'text-black hover:bg-gray-200 hover:text-black',
                          'rounded-md px-1 py-2 text-base font-normal navbar-item text-xl'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 logo-navbar-breakpoint:static logo-navbar-breakpoint:inset-auto logo-navbar-breakpoint:ml-6 logo-navbar-breakpoint:pr-0 buttons-breakpoint-xs:pl-4 buttons-breakpoint-xs:pr-0">
                <Button label="Become a Volunteer" icon="volunteer" color="blue" to="https://docs.google.com/forms/d/e/1FAIpQLSdNCg2K4e59CTRWbwipGZaU1JQY3Wd7j4utZ6smKX8O61wD5w/viewform" minify={true} hiddenOnMobile={true} isExternal={true}/>
                <Button label="Get Tickets" icon="ticket" color="orange" to="/tickets" minify={true} />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    item.current ? 'bg-gray-200 text-black navbar-item' : 'text-black hover:bg-gray-200 hover:text-black',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
