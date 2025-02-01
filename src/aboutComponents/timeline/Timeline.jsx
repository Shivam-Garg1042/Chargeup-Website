

const TimelineCard = ({ title, description, year, isRight }) => (
    <div 
      className={`
        absolute 
        ${isRight ? 'left-[60%]' : 'right-[60%]'} 
        w-[40%] 
        h-48
        bg-white 
        rounded-lg 
        shadow-md 
        p-6 
        transform 
        -translate-y-1/2
        transition-all
        duration-300
        hover:-translate-y-[calc(50%+4px)]
        hover:shadow-lg
        overflow-auto
      `}
    >
      <h3 className={`text-2xl font-bold mb-2 ${isRight ? 'text-primary' : 'text-accent'}`}>
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
  
  const TimelineMarker = ({ year }) => (
    <div className="
      absolute 
      left-1/2 
      transform 
      -translate-x-1/2 
      -translate-y-1/2
    ">
      <div className="
        w-12 
        h-12 
        rounded-full 
        bg-white 
        border-4 
        border-secondary 
        flex 
        items-center 
        justify-center
      ">
        <span className="text-secondary font-bold">
          {year}
        </span>
      </div>
    </div>
  );
  
  const VerticalTimeline = () => {
    const events = [
      {
        year: 2020,
        title: "Expansion year",
        description: "Expansion started with opening of two stores in an Arab like model lUt tempor exercitation reprehenderit pariatur exercitation ad eu anim tempor. Sit in officia in labore id ad consequat. Eu fugiat tempor minim esse id est dolore dolor culpa commodo. Occaecat ullamco in non irure ut labore elit excepteur aliquip ullamco culpa consectetur aliqua nisi. Nisi occaecat do officia Lorem ullamco cillum. Velit sit cillum commodo magna Lorem esse. Exercitation aliquip sint labore nulla sunt enim ea ullamco dolor quis.",
        isRight: true
      },
      {
        year: 2021,
        title: "Market 1000 D",
        description: "Market 1000 dealer is our community network with 85 outlets.",
        isRight: false
      },
      {
        year: 2022,
        title: "Ev Startup",
        description: "Recognized as EV startup of the year",
        isRight: true
      },
      {
        year: 2023,
        title: "Ev Startup",
        description: "Completed half a decade, identifying as India's leading Mobility Platform",
        isRight: false
      }
    ];
  
    return (
      <div className="relative min-h-screen bg-[#E8F0F2] overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          {/* Events */}
          <div className="relative py-40">
            {/* Center line that only spans between first and last years */}
            <div className="
              absolute 
              left-1/2 
              w-1 
              bg-secondary
              transform 
              -translate-x-1/2
            " 
            
            style={{
                top: '32px',  // Starts at the first year marker
                height: `calc(100% - 64px)`, // Ends at the last year marker
              }}
            />
            
            {events.map((event, index) => (
              <div key={event.year} className="relative h-64">
                <TimelineMarker year={event.year} />
                <TimelineCard {...event} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default VerticalTimeline;