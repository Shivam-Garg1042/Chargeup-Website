import { useEffect } from 'react';
import backgroundVideo from '../../assets/background-video.mp4';
import AOS from 'aos';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
        <div className="absolute bottom-0 left-16 w-full z-10 flex flex-col justify-end items-start px-6 md:px-20 max-w-7xl mx-auto pb-10">
          <div data-aos="fade-up" data-aos-delay="200">
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-4">
              India's Driver {' '}
              <span className="text-[#79D7BE]">Platform</span>
            </h1>
            <p className="text-white text-xl max-w-2xl mb-8">
             Easy EV ownership with higher earnings
            </p>
            <button className="bg-[#79D7BE] hover:bg-[#5bc7a7] text-[#003444] font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Discover More
            </button>
          </div>
        </div>


      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[#003444]/50 to-transparent"
        style={{ mixBlendMode: 'multiply' }}
      />
    </div>
  );
};

export default Home;