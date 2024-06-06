import * as React from "react";

const SponsorVideoSection = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayPause = () => {
    const video = document.getElementById("sponsor-video");
    if (isPlaying) {
      video.pause();
      video.style.filter = "brightness(50%)"; // Dim the video when paused
    } else {
      video.play();
      video.style.filter = "brightness(100%)"; // Brighten the video when playing
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative flex items-center justify-center bg-gray-900 py-8">
      <div
        className="relative w-2/3 cursor-pointer"
        onClick={handlePlayPause}
      >
        <video
          id="sponsor-video"
          loop
          muted
          className="w-full h-full object-cover"
          style={{
            zIndex: "-1",
            filter: isPlaying ? "brightness(100%)" : "brightness(50%)",
            transition: "filter 0.3s ease",
          }}
        >
          <source src="/videos/hero_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className={`absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 transition-opacity ${
            isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
          }`}
        >
          <button
            onClick={handlePlayPause}
            className="flex items-center justify-center"
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SponsorVideoSection;