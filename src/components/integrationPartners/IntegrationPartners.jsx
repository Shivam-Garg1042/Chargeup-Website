
import Marquee from "react-fast-marquee";
import { Card } from '../../components/ui/card';

const IntegrationPartners = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-full mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Driver Focused Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering drivers with innovative solutions
          </p>
        </div>
        <div className="space-y-8">
          {integrationData.map((row, index) => (
            <div key={row.id} className="relative">
              {/* Enhanced gradient overlays with more blur */}
              <div className="absolute inset-y-0 left-0  w-0 sm:w-40 bg-gradient-to-r from-blue-50 via-blue-50/90 to-transparent z-10 " />
              <div className="absolute inset-y-0 right-0  w-0 sm:w-40 bg-gradient-to-l from-blue-50 via-blue-50/90 to-transparent z-10" />
              
              <Marquee
                direction={index % 2 === 0 ? "left" : "right"}
                gradient={false}
                speed={25 + (index * 5)}
                pauseOnHover={true}
              >
                <div className="flex py-2">
                  {[...row.items, ...row.items].map((integration, idx) => (
                    <div key={`${integration.id}-${idx}`} className="mx-3">
                      <IntegrationCard {...integration} />
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IntegrationCard = ({ icon, name, category }) => {
  return (
    <Card className="bg-white p-4  hover:scale-105 hover:bg-blue-50/30 shadow-lg hover:shadow-xl transition-all duration-300 w-[250px]">
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 flex-shrink-0">
          <div className="absolute inset-0 bg-blue-100 rounded-full opacity-20" />
          <img 
            src={icon} 
            alt={name}
            className="w-full h-full object-contain p-2"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">
            {name}
          </h3>
          <p className="text-sm text-gray-600 truncate">
            {category}
          </p>
        </div>
      </div>
    </Card>
  );
};

const integrationData = [
  {
    id: 1,
    items: [
      { id: 'miro1', name: "Miro", category: "NBFC", icon: "/api/placeholder/48/48" },
      { id: 'twilio1', name: "Twilio", category: "NBFC", icon: "/api/placeholder/48/48" },
      { id: 'slack1', name: "Slack", category: "NBFC", icon: "/api/placeholder/48/48" },
      { id: 'zoom1', name: "Zoom", category: "NBFC", icon: "/api/placeholder/48/48" },
      { id: 'notion1', name: "Notion", category: "NBFC", icon: "/api/placeholder/48/48" },
    ]
  },
  {
    id: 2,
    items: [
      { id: 'zendesk1', name: "Zendesk", category: "Customer Support", icon: "/api/placeholder/48/48" },
      { id: 'salesforce1', name: "Salesforce", category: "CRM", icon: "/api/placeholder/48/48" },
      { id: 'box1', name: "Box", category: "File Management", icon: "/api/placeholder/48/48" },
      { id: 'dropbox1', name: "Dropbox", category: "Storage", icon: "/api/placeholder/48/48" },
      { id: 'asana1', name: "Asana", category: "Project Management", icon: "/api/placeholder/48/48" },
    ]
  },
  {
    id: 3,
    items: [
      { id: 'stripe1', name: "Stripe", category: "Payments", icon: "/api/placeholder/48/48" },
      { id: 'gcal1', name: "Google Calendar", category: "Events", icon: "/api/placeholder/48/48" },
      { id: 'gdrive1', name: "Google Drive", category: "File Management", icon: "/api/placeholder/48/48" },
      { id: 'microsoft1', name: "Microsoft", category: "Productivity", icon: "/api/placeholder/48/48" },
      { id: 'adobe1', name: "Adobe", category: "Creative", icon: "/api/placeholder/48/48" },
    ]
  }
];

export default IntegrationPartners;