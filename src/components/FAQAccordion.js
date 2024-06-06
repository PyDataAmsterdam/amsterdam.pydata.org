import React from 'react';

const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = React.useState(null);

    const handleClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const faqData = [
        {
            question: 'How can I buy tickets through an invoice?',
            answer: 'If you prefer to purchase tickets via invoice, please use <a class="text-blue-600 dark:text-blue-500 hover:underline" href="https://forms.monday.com/forms/f057930c0d8b18b4328a5f5818b21517?r=use1">this form</a>. Please note that this option is only available for corporate tickets. Invoice terms are due on delivery, and tickets will be provided upon full payment. Once payment is received, links to register and assign your tickets will be sent via email.'
        },
        {
            question: 'Are meals included in the ticket price?',
            answer: 'Yes, meals and drinks are included in your ticket price. Breakfast, lunch, and an afternoon snack are provided at fixed times during the day (refer to the program). Coffee, tea, and refreshments are also available throughout the event.'
        },
        {
            question: 'Who should I contact for changes to my registration?',
            answer: 'For any changes or updates to your registration, please contact admin@pydata.org.'
        },
        {
            question: 'What is the refund policy for ticket cancellations?',
            answer: 'Full refunds are available for cancellations made at least 7 days before the start of the event. Cancellations made within 7 days of the event will receive a 50% refund. No refunds will be given for cancellations made on or after the start date of the event.'
        },
        {
            question: 'Can I purchase my registration on-site at the event?',
            answer: 'A limited number of tickets may be available for purchase at the registration desk, but we strongly recommend registering in advance to secure your spot. We cannot guarantee ticket availability on-site.'
        }
    ];

    return (
        <div className="mx-auto max-w-6xl p-5 buttons-breakpoint:py-24 pb-12">
            <div className="border border-gray-200 dark:border-gray-700">
                {faqData.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                        <button
                            onClick={() => handleClick(index)}
                            className={`flex items-center justify-between w-full px-4 py-4 text-left ${
                                activeIndex === index
                                    ? 'bg-gray-300 text-white dark:bg-gray-800'
                                    : 'text-black dark:text-black hover:bg-gray-200 hover:text-black'
                            } border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 gap-3 ${
                                activeIndex === index ? 'border-b-0' : ''
                            }`}
                        >
                            <span className="text-xl">{item.question}</span>
                            <svg
                                className={`w-6 h-6 transform ${activeIndex === index ? 'rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeIndex === index && (
                            <div className="p-4 border-gray-200 dark:border-gray-700">
                                <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQAccordion;