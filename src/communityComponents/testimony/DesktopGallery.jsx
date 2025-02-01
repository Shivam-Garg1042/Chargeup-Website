import bgImage from "../../assets/1.png";
const DesktopGallery = ({ items }) => {
  return (
    <div 
      className="hidden md:block min-h-screen w-full relative overflow-y-auto scrollbar-hide" 
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
    >
      {/* Add CSS to hide scrollbar */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <div className="absolute inset-0 bg-black/30 fixed" />
      
      <div className="relative w-full min-h-screen">
        <div className="max-w-7xl mx-auto p-4">
          <div className="grid grid-cols-3 gap-4 p-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative group bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  {item.description && (
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopGallery;