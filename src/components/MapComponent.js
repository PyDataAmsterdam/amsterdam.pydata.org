import React from "react";

const MapComponent = () => {
  return (
    <div className="w-full map-container">
    <div
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17807.820954814346!2d4.899551604563072!3d52.37271772363022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609abb3be496b%3A0x1a140c53c426f7c7!2sthe%20Kromhouthal!5e0!3m2!1sen!2snl!4v1713461869533!5m2!1sen!2snl" width="100%" height="350px" style="border:groove;"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      }}
    />
</div>
  );
};

export default MapComponent;