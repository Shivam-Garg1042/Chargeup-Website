import { useEffect, useState } from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import { Compass, MapPin, Map, PawPrint, Route, Sparkle } from "lucide-react";

const Legend = () => (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-4">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Chargeup Networks</h3>
        <div className="space-y-3">
            <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-blue-900 mr-3"></div>
                <span>Currently Live</span>
            </div>
            <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-600 mr-3"></div>
                <span>Planned Expansion</span>
            </div>
            <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-yellow-400 mr-3"></div>
                <span>Cities</span>
            </div>
        </div>
    </div>
);

const StatsCard = () => (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-3 gap-4 text-center">
            <div>
                <h3 className="text-3xl font-bold text-blue-900">16</h3>
                <p className="text-gray-600 font-medium">Cities</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold text-blue-900">432+</h3>
                <p className="text-gray-600 font-medium">Partners</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold text-blue-900">175+</h3>
                <p className="text-gray-600 font-medium">Pincodes</p>
            </div>
        </div>
    </div>
);

const LeftSidePanel = () => (
    <div className="space-y-4">
        <Legend />
        <StatsCard />
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

    // Cities coordinates (yellow dots)
    const citiesCoordinates = [
        { name: 'Gurugram', lat: 28.4595, lon: 77.0266 },
        { name: 'Srinagar (Summer)', lat: 34.0837, lon: 74.7973 },
{ name: 'Chandigarh', lat: 30.7333, lon: 76.7794 }, // Union Territory but serves as capital
{ name: 'Bhopal', lat: 23.2599, lon: 77.4126 },
{ name: 'Indore', lat: 22.7196, lon: 75.8577 },
{ name: 'Jabalpur', lat: 23.1815, lon: 79.9864 },
{ name: 'Gwalior', lat: 26.2183, lon: 78.1828 },
{ name: 'Ujjain', lat: 23.1765, lon: 75.7885 },
{ name: 'Guwahati', lat: 26.1445, lon: 91.7362 },
{ name: 'Silchar', lat: 24.8333, lon: 92.7789 },
{ name: 'Dehradun', lat: 30.3165, lon: 78.0322 },
{ name: 'Jaipur', lat: 26.9124, lon: 75.7873 },
{ name: 'Dibrugarh', lat: 27.4728, lon: 94.9120 },
{ name: 'Amritsar', lat: 31.6340, lon: 74.8723 },
{ name: 'Ludhiana', lat: 30.9010, lon: 75.8573 },
{ name: 'Amaravati', lat: 16.5130, lon: 80.5181 },
{ name: 'Kolkata', lat: 22.5726, lon: 88.3639 },
{ name: 'Raipur', lat: 21.2514, lon: 81.6296 },
{ name: 'Patiala', lat: 30.3398, lon: 76.3869 },
{ name: 'Patna', lat: 25.5941, lon: 85.1376 },
{ name: 'Lucknow', lat: 26.8467, lon: 80.9462 },
{ name: 'Kanpur', lat: 26.4499, lon: 80.3319 },
{ name: 'Agra', lat: 27.1767, lon: 78.0081 },
{ name: 'Varanasi', lat: 25.3176, lon: 82.9739 },
{ name: 'Prayagraj (Allahabad)', lat: 25.4358, lon: 81.8463 },
{ name: 'Ghaziabad', lat: 28.6692, lon: 77.4538 },
{ name: 'Noida', lat: 28.5355, lon: 77.3910 },
{ name: 'Meerut', lat: 28.9845, lon: 77.7064 }
        // Add more coordinates to match the image
    ];
    const stateNameMapping = {
        'uttar pradesh': 'UP',
        'madhya pradesh': 'MP',
        'nct of delhi': 'Delhi',
        'himachal pradesh':'HP',
        'uttarakhand': 'UK',
        // 'daman and diu':' ',
        'dadara and nagar havelli':' ',
        'west bengal': 'WB',
        'lakshadweep':' ',
        'jammu and kashmir': 'J&K',
        
        'andhra pradesh': 'AP'
      };
    // States data - match colors with image
    const data = [
        // Currently Live (dark blue/navy)
        { 'hc-key': 'uttar pradesh', value: 1, color: '#0a3d62' },
        { 'hc-key': 'madhya pradesh', value: 1, color: '#0a3d62' },
        { 'hc-key': 'nct of delhi', value: 1, color: '#0a3d62' },
        { 'hc-key': 'rajasthan', value: 1, color: '#0a3d62' },
        { 'hc-key': 'haryana', value: 2, color: '#0a3d62' },
        { 'hc-key': 'uttarakhand', value: 2, color: '#0a3d62' },
        // Planned Expansion (green)
        
        { 'hc-key': 'punjab', value: 2, color: '#009432' },
        { 'hc-key': 'bihar', value: 2, color: '#009432' },
        { 'hc-key': 'west bengal', value: 2, color: '#009432' },
        { 'hc-key': 'chhattisgarh', value: 2, color: '#009432' },
        { 'hc-key': 'jammu and kashmir', value: 2, color: '#009432' },
        { 'hc-key': 'bihar', value: 2, color: '#009432' },
        { 'hc-key': 'jharkhand', value: 2, color: '#009432' },
        { 'hc-key': 'assam', value: 2, color: '#009432' },
        { 'hc-key': 'andhra pradesh', value: 2, color: '#009432' }
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
            enabled: false,
            buttonOptions: {
                verticalAlign: "bottom",
                style: {
                    color: 'gray'
                }
            }
        },
        colorAxis: {
            visible: false
        },
        credits: {
            enabled: false
        },
        series: [
            {
                data: data,
                name: "Chargeup",
                states: {
                    hover: {
                        brightness: 0.1, // This makes states bulge without color change
                        color: undefined // Keep same color on hover
                    }
                },
                point: {
                    events: {
                        click: function() {
                            setSelectedState(this['hc-key']);
                        }
                    }
                },
                dataLabels: {
                    enabled: true,
                    // format: "{point.name}",
                    formatter: function() {
                        const key = this.point['hc-key'];
                        // Optional: console.log(key) to debug what values are coming in
                        return stateNameMapping[key] || this.point.name;
                    },
                    style: {
                        textOutline: 'none',
                        fontWeight: 'normal',
                        color: '#2C3E50',
                        textShadow: '0px 0px 3px rgba(0,0,0,0.5)'
                    }
                },
                nullColor: "#E3F2FD",
                borderColor: '#B0BEC5',
                borderWidth: 0.5
            },
            {
                type: 'mappoint',
                name: 'Cities',
                color: '#FFEB3B',
                data: citiesCoordinates.map(coord => ({
                    name: coord.name,
                    lat: coord.lat,
                    lon: coord.lon
                })),
                marker: {
                    radius: 3,
                    fillColor: '#FFEB3B',
                    lineWidth: 1,
                    lineColor: '#FFF'
                },
                dataLabels:{
                    enabled: false,
                }
            }
        ]
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
                {/* Left Side Panel with Legend and Stats */}
                <div className="relative">
                    <LeftSidePanel />
                </div>
                
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

                
            </div>
        </div>
    );
};

export default IndiaMap;