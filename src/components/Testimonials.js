import React from "react";
import Button from "./Button";

const testimonials = [
  "It’s an amazing event that gets better every year, the atmosphere, speakers and organization level are insanely good!",
  "This conference was VERY well organized and very fun to attend. Great location.",
  "It’s awesome, and by far the best data science conference for a data professional working in a business environment.",
  "Well done for organizing such an amazing conference! I had an amazing time :)",
  "Great combination of interesting talks, no commercial bozos, cool and enthusiastic people.",
  "The organizing committee/volunteers were extremely helpful. Overall I had a great weekend in Amsterdam. Thank you. Very much appreciated."
];

const Testimonials = () => {
  return (
    <div className="text-center buttons-breakpoint:py-24">
      <h2 className="text-4xl text-black mb-8">Hear what our 23' attendees say</h2>
      <div className="testimonials-section">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item text-left text-lg">
            <p>“{testimonial}”</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Button label="Get tickets" color="orange" to="/tickets" icon="ticket"/>
      </div>
    </div>
  );
};

export default Testimonials;