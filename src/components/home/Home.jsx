
// import backgroundVideo from '../../assets/background-video.mp4'; // Add your video to assets folder

const Home = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      {/* 
       */}

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-20 max-w-7xl mx-auto">
        <h1 className="text-white text-6xl font-bold leading-tight mb-4">
        Powering Million  {' '}
          <span className="text-[#79D7BE]">Drivers</span>
        </h1>
        <p className="text-white text-xl max-w-2xl">
        India’s leading EV financing and asset management company 
        </p>
      </div>

      {/* Optional Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[#2E5077]/30 to-transparent"
        style={{ mixBlendMode: 'multiply' }}
      />
    </div>
  );
};

export default Home;
