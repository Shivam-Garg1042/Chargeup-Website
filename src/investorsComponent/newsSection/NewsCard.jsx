

const NewsCard = ({ title, source, date, image, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-[480px] "> 
        <div className="relative h-48 md:h-64">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <span>{source}</span>
            <span className="mx-2">•</span>
            <span>{date}</span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
          <p className="text-gray-600 flex-grow overflow-hidden line-clamp-3">{description}</p>
        </div>
      </div>
    </a>
  );
};
export default NewsCard;