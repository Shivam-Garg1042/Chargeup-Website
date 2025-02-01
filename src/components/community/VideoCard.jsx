

const VideoCard = ({ videoId, title }) => {
  return (
    <div className="min-w-[300px] h-[200px] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-xl">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="bg-white"
      ></iframe>
    </div>
  );
};

export default VideoCard;



