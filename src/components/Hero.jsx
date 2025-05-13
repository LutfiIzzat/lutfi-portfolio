import video from '/Portfolio/PortfolioVideo.mp4';

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-screen h-[1080px] overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;
