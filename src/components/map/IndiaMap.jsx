import  { useEffect, useState } from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";

const IndiaMap = () => {
    const [mapData, setMapData] = useState(null);

    useEffect(() => {
        // Fetch the map topology data
        fetch("https://code.highcharts.com/mapdata/countries/in/custom/in-all-disputed.topo.json")
            .then(response => response.json())
            .then(data => setMapData(data))
            .catch(error => console.error("Error loading map data:", error));
    }, []);

    // Data with selective labels enabled
    const data = [
        { 'hc-key': 'madhya pradesh', value: 10, dataLabels: { enabled: true } },
        { 'hc-key': 'uttar pradesh', value: 11, dataLabels: { enabled: true } },
        { 'hc-key': 'haryana', value: 12, dataLabels: { enabled: true } },
        { 'hc-key': 'punjab', value: 13, dataLabels: { enabled: true } },
        { 'hc-key': 'west bengal', value: 14, dataLabels: { enabled: true } },
        { 'hc-key': 'rajasthan', value: 17, dataLabels: { enabled: true } },
        { 'hc-key': 'nct of delhi', value: 1, dataLabels: { enabled: true } }
    ];

    // Chart options
    const chartOptions = {
        chart: {
            map: mapData
        },
        title: {
            
            text: "Chargeup Network"
        },
        // subtitle: {
        //     text: 'Only some states show data labels'
        // },
        mapNavigation: {
            enabled: false,
            buttonOptions: {
                verticalAlign: "bottom"
            }
        },
        

        colorAxis: {
            visible :false,
            // min: 0,
            minColor: "#57CC99",
            maxColor: "#22577A"
        },
        credits:{
            enabled : false
        },
        series: [{
            data: data,
            name: "Chargeup",
            states: {
                hover: {
                    color: "#003444"
                }
            },
            dataLabels: {
                enabled: false, // Default disabled
                format: "{point.name}"
            },
            nullColor: "#71BBB2",
            borderColor: '#D3d3d3', 
            borderWidth: 0.5
        }]
    };

    return (
        <div className="w-full h-[610px] flex justify-center items-center py-6">
            {mapData ? (
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={"mapChart"}
                    options={chartOptions}
                    containerProps={{ style: { width: "100%", height: "120%" } }} // Ensures it takes full space
                />
            ) : (
                <p className="text-gray-500">Loading map...</p>
            )}
        </div>
    );
    
    
};

export default IndiaMap;
