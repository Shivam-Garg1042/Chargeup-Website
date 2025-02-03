import { useState } from 'react';
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react";

const VideoTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => prev === 0 ? testimonialData.length - 1 : prev - 1);
  };

  return (
    <section className="py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[400px,1fr] gap-24">
          {/* Left column */}
          <div className=" space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Hear what our customers are saying
            </h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                {/* <p className="text-gray-600">Follow us on</p> */}
                <div className="flex gap-4">
                  
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-bold text-gray-900">{String(currentIndex + 1).padStart(2, '0')}</span>
                  <span className="text-gray-400">/ {String(testimonialData.length).padStart(2, '0')}</span>
                </div>
                <div className="flex gap-3">
                  <button onClick={prevTestimonial} className="p-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-50">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextTestimonial} className="p-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-50">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        
          <div className="flex items-start justify-center lg:justify-start">
            <div className="w-full lg:w-[400px]">
              <div className="overflow-hidden rounded-xl shadow-lg bg-white">
                <div className="relative aspect-video bg-gray-200">
                  <img 
                    src={testimonialData[currentIndex].thumbnail} 
                    alt="Video thumbnail" 
                    className="w-full h-full object-cover"
                  />
                  <button 
                    onClick={() => setSelectedVideo(testimonialData[currentIndex])} 
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                  >
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white">
                      <Play className="w-8 h-8 ml-1" />
                    </div>
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonialData[currentIndex].avatar} 
                      alt={testimonialData[currentIndex].name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonialData[currentIndex].name}</h3>
                      <p className="text-gray-500">{testimonialData[currentIndex].role} · {testimonialData[currentIndex].company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {selectedVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full mx-4 relative animate-scale-in">
            <div className="relative aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                title={selectedVideo.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
            <button 
              onClick={() => setSelectedVideo(null)} 
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

const testimonialData = [
  {
    id: 1,
    videoId: "dQw4w9WgXcQ",
    thumbnail: "",
    avatar: "",
    name: "ABC",
    role: "ZXCVBNM",
    company: "Chargeup",
    quote: "Nisi elit sunt et tempor officia nulla sit irure enim esse amet cillum anim quis. Minim occaecat excepteur ipsum incididunt qui magna ut tempor dolore enim cupidatat veniam irure sunt. Aliquip velit culpa quis ipsum culpa et eiusmod laboris. Pariatur incididunt amet dolore dolore pariatur veniam tempor esse officia eiusmod magna adipisicing nulla cupidatat.",
  },
  {
    id: 2,
    videoId: "dQw4w9WgXcQ",
    thumbnail: "",
    avatar: "",
    name: "ASDFGHJKL",
    role: "ABCD",
    company: "CHargeup",
    quote: "Nisi elit sunt et tempor officia nulla sit irure enim esse amet cillum anim quis. Minim occaecat excepteur ipsum incididunt qui magna ut tempor dolore enim cupidatat veniam irure sunt. Aliquip velit culpa quis ipsum culpa et eiusmod laboris. Pariatur incididunt amet dolore dolore pariatur veniam tempor esse officia eiusmod magna adipisicing nulla cupidatat.",
  },
];

export default VideoTestimonials;