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
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8 lg:pr-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Hear what our
              <span className="block text-blue-600">customers are saying</span>
            </h2>
            
            <div className="flex items-center gap-6">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold text-gray-900 font-mono">{String(currentIndex + 1).padStart(2, '0')}</span>
                <span className="text-gray-400 font-mono">/ {String(testimonialData.length).padStart(2, '0')}</span>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={prevTestimonial} 
                  className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextTestimonial} 
                  className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="relative aspect-[16/9]">
                <img 
                  src={testimonialData[currentIndex].thumbnail} 
                  alt={testimonialData[currentIndex].name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <button 
                  onClick={() => setSelectedVideo(testimonialData[currentIndex])} 
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                >
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/90 group-hover:bg-white transition-all duration-300 group-hover:scale-110 shadow-lg">
                    <Play className="w-10 h-10 text-blue-600 group-hover:text-blue-700 transition-colors ml-1" fill="currentColor" />
                  </div>
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonialData[currentIndex].avatar} 
                    alt={testimonialData[currentIndex].name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-gray-100"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{testimonialData[currentIndex].name}</h3>
                    <p className="text-gray-500">{testimonialData[currentIndex].role} · {testimonialData[currentIndex].company}</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 leading-relaxed text-lg italic">"{testimonialData[currentIndex].quote}"</blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
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
    thumbnail: "/api/placeholder/640/360",
    avatar: "/api/placeholder/48/48",
    name: "Raju",
    role: "Founder",
    company: "Chargeup",
    quote: "Within a short time of becoming a Business Partner, we have achieved significant milestones in terms of revenues and rides.",
  },
  {
    id: 2,
    videoId: "dQw4w9WgXcQ",
    thumbnail: "/api/placeholder/640/360",
    avatar: "/api/placeholder/48/48",
    name: "Aakash",
    role: "CEO",
    company: "Chargeup",
    quote: "The platform has transformed how we handle deliveries. The efficiency gains and customer satisfaction improvements have been remarkable.",
  },
  {
    id: 3,
    videoId: "dQw4w9WgXcQ",
    thumbnail: "/api/placeholder/640/360",
    avatar: "/api/placeholder/48/48",
    name: "David Chen",
    role: "Operations Director",
    company: "Metro Express",
    quote: "The integration process was seamless, and the support team has been exceptional. Our drivers love the user-friendly interface.",
  }
];

export default VideoTestimonials;