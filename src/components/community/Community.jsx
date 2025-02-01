
import VideoCard from './VideoCard';
import { videoData } from './videoData';

const Community = () => {
  return (
    <div className="relative w-full bg-[#F6F4F0] py-20 px-4 overflow-x-auto scrollbar-hide">
      <h2 className="text-4xl font-bold text-center text-[#2E5077] mb-16">
        What people are saying 
      </h2>
      <div className="flex justify-center">
        <div className="flex transform  ">
          {videoData.map((video, index) => (
            <div 
              key={index}
              className={`transform ${index % 2 === 0 ? 'translate-y-8' : '-translate-y-8'}`}
            >
              <VideoCard {...video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;

