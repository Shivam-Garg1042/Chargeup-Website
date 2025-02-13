import { useEffect, useState } from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import { Compass, MapPin, Map, PawPrint, Route, Sparkle } from "lucide-react";

const CustomCard = ({ title, data, description, className = "" }) => (
    <div className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 transition-all duration-300 ${className}`}>
        <h3 className="text-2xl font-bold capitalize mb-4 text-blue-900">{title}</h3>
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-600">Chargeup Networks</p>
                    <p className="text-2xl font-bold text-blue-900">{data.stations}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-600">Active Users</p>
                    <p className="text-2xl font-bold text-green-900">{data.activeUsers.toLocaleString()}</p>
                </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-purple-600">Growth Rate</p>
                <p className="text-2xl font-bold text-purple-900">{data.growth}</p>
            </div>
            <p className="text-gray-600 mt-4 p-2 bg-gray-50 rounded-lg">{description}</p>
        </div>
    </div>
);

const IndiaMap = () => {
    const [mapData, setMapData] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        fetch("https://code.highcharts.com/mapdata/countries/in/custom/in-all-disputed.topo.json")
            .then(response => response.json())
            .then(data => setMapData(data))
            .catch(error => console.error("Error loading map data:", error));

        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const stateDetails = {
        'nct of delhi': { 
            stations: 245,
            activeUsers: 18500,
            growth: "+35%",
            description: "Capital region with highest station density"
        },
        'madhya pradesh': { 
            stations: 156,
            activeUsers: 12000,
            growth: "+23%",
            description: "Central hub with rapid expansion"
        },
        'uttar pradesh': { 
            stations: 203,
            activeUsers: 15000,
            growth: "+31%",
            description: "Highest density of charging networks"
        },
        // Add more states as needed
    };

    const data = [
        { 'hc-key': 'madhya pradesh', value: 10 },
        { 'hc-key': 'uttar pradesh', value: 11 },
        { 'hc-key': 'haryana', value: 12 },
        { 'hc-key': 'punjab', value: 13 },
        { 'hc-key': 'west bengal', value: 14 },
        { 'hc-key': 'rajasthan', value: 17 },
        { 'hc-key': 'nct of delhi', value: 1 }
    ];

    const chartOptions = {
        chart: {
            map: mapData,
            backgroundColor: 'transparent',
            events: {
                load: function() {
                    if (window.innerWidth < 768) {
                        // For mobile - zoom more and center on upper India
                        this.mapZoom(32, 2800, 700);
                    } else {
                        // For desktop - wider view
                        this.mapZoom(2, 1250, 800);
                    }
                }
            }
        },
        title: {
            text: "Chargeup Network",
            style: {
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#2C3E50'
            }
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: "bottom",
                style: {
                    color: 'gray'
                }
            }
        },
        colorAxis: {
            visible: false,
            minColor: "#80CED7",
            maxColor: "#007EA7"
        },
        credits: {
            enabled: false
        },
        series: [{
            data: data,
            name: "Chargeup",
            states: {
                hover: {
                    color: "#003444"
                }
            },
            point: {
                events: {
                    click: function() {
                        setSelectedState(this['hc-key']);
                    },
                    mouseOver: function() {
                        this.setState('hover');
                    },
                    mouseOut: function() {
                        this.setState('');
                    }
                }
            },
            dataLabels: {
                enabled: true,
                format: "{point.name}",
                style: {
                    textOutline: 'none',
                    fontWeight: 'normal',
                    color: '#2C3E50',
                    textShadow: 'none'
                }
            },
            nullColor: "#E3F2FD",
            borderColor: '#B0BEC5',
            borderWidth: 0.5
        }]
    };

    return (
        <div className="relative w-full h-screen bg-gradient-to-br from-blue-50 to-green-50 p-8">
            {/* Background Icons Layer */}
            <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                <Map className="absolute top-16 left-16 text-blue-200 opacity-20" size={100} />
                <Compass className="absolute top-24 right-24 text-green-200 opacity-20" size={70} />
                <MapPin className="absolute bottom-32 left-1/3 text-indigo-200 opacity-20" size={90} />
                <Sparkle className="absolute top-1/3 left-24 text-purple-200 opacity-20" size={80} />
                <PawPrint className="absolute top-1/2 right-1/4 text-yellow-200 opacity-20" size={64} />
                <Route className="absolute bottom-12 right-1/3 text-red-200 opacity-20" size={70} />
            </div>

            <div className={`grid ${!isMobile ? 'grid-cols-3' : 'grid-cols-1'} gap-5 h-full`}>
                {/* Map Container */}
                <div className={`relative ${!isMobile ? 'col-span-2' : ''}`} style={{ zIndex: 1 }}>
                    <div className="h-full w-full">
                        {mapData ? (
                            <HighchartsReact
                                highcharts={Highcharts}
                                constructorType="mapChart"
                                options={chartOptions}
                                containerProps={{ className: "w-full h-full" }}
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full">
                                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Details Panel - Only show on desktop */}
                {!isMobile && (
                    <div className="relative">
                        {selectedState && stateDetails[selectedState] ? (
                            <CustomCard
                                title={selectedState.replace(/-/g, ' ')}
                                data={stateDetails[selectedState]}
                                description={stateDetails[selectedState].description}
                                className="absolute inset-0"
                            />
                        ) : (
                            <CustomCard
                                title="NCT of Delhi"
                                data={stateDetails['nct of delhi']}
                                description={stateDetails['nct of delhi'].description}
                                className="absolute inset-0"
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default IndiaMap;