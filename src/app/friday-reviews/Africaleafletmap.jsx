"use client";
import React, { useState, useMemo } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import { Users, MapPin, TrendingUp, Info } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Component to fit bounds when data changes
function MapBounds({ geoJsonData }) {
    const map = useMap();

    React.useEffect(() => {
        if (geoJsonData && geoJsonData.features) {
            try {
                const bounds = [];
                geoJsonData.features.forEach(feature => {
                    if (feature.geometry.type === 'Polygon') {
                        feature.geometry.coordinates[0].forEach(coord => {
                            bounds.push([coord[1], coord[0]]);
                        });
                    } else if (feature.geometry.type === 'MultiPolygon') {
                        feature.geometry.coordinates.forEach(polygon => {
                            polygon[0].forEach(coord => {
                                bounds.push([coord[1], coord[0]]);
                            });
                        });
                    }
                });

                if (bounds.length > 0) {
                    map.fitBounds(bounds, { padding: [50, 50] });
                }
            } catch (error) {
                console.error('Error fitting bounds:', error);
            }
        }
    }, [geoJsonData, map]);

    return null;
}

function AfricaLeafletMap({ peopleData = {} }) {
    const [hoveredCountry, setHoveredCountry] = useState(null);
    const [geoJsonKey, setGeoJsonKey] = useState(0);

    // Regional/non-country entries to filter out
    const REGIONAL_ENTRIES = [
        'East Africa',
        'West Africa',
        'Southern Africa',
        'North Africa',
        'Central Africa',
        'Diaspora',
        'Germany',
        'Germany/Nigeria',
        'New Jersey',
        'United Kingdom'
    ];

    // Normalize country names to match GeoJSON
    const normalizeCountryName = (name) => {
        const nameMap = {
            'Côte d`Ivoire': 'Ivory Coast',
            "Côte d'Ivoire": 'Ivory Coast',
            'Democratic Republic of the Congo': 'Democratic Republic of the Congo',
            'Democratic Republic of Congo': 'Democratic Republic of the Congo',
            'Republic of the Congo': 'Republic of the Congo',
            'cameroun': 'Cameroon',
            'Malawi.': 'Malawi',
            'Central African Republic': 'Central African Republic',
            'Tanzania': 'Tanzania',
            'South Africa': 'South Africa',
        };

        return nameMap[name] || name;
    };

    // Calculate country statistics
    const countryStats = useMemo(() => {
        const stats = {};
        let totalPeople = 0;
        let maxCount = 0;

        Object.entries(peopleData).forEach(([country, people]) => {
            // Skip regional entries
            if (REGIONAL_ENTRIES.includes(country)) {
                return;
            }

            const normalizedCountry = normalizeCountryName(country);
            const count = Array.isArray(people) ? people.length : 0;

            stats[normalizedCountry] = {
                count,
                people: people,
                originalName: country
            };

            totalPeople += count;
            maxCount = Math.max(maxCount, count);
        });

        return { stats, totalPeople, maxCount, totalCountries: Object.keys(stats).length };
    }, [peopleData]);

    // Get color based on people count
    const getColor = (count) => {
        if (count === 0 || !count) return '#f3f4f6';
        if (count === 1) return '#dbeafe';
        if (count <= 3) return '#93c5fd';
        if (count <= 5) return '#3b82f6';
        if (count <= 10) return '#2563eb';
        if (count <= 15) return '#1e40af';
        return '#1a4b8b';
    };

    // Style function for GeoJSON features
    const style = (feature) => {
        const countryName = feature.properties.name;
        const data = countryStats.stats[countryName];
        const count = data ? data.count : 0;

        return {
            fillColor: getColor(count),
            weight: hoveredCountry === countryName ? 3 : 1.5,
            opacity: 1,
            color: '#03164c',
            fillOpacity: hoveredCountry === countryName ? 0.9 : 0.7,
        };
    };

    // Event handlers
    const onEachFeature = (feature, layer) => {
        const countryName = feature.properties.name;
        const data = countryStats.stats[countryName];

        layer.on({
            mouseover: (e) => {
                setHoveredCountry(countryName);
                e.target.setStyle({
                    weight: 3,
                    fillOpacity: 0.9,
                });
            },
            mouseout: (e) => {
                setHoveredCountry(null);
                setGeoJsonKey(prev => prev + 1); // Force re-render to reset style
            },
            click: () => {
                if (data) {
                    console.log(`${countryName}: ${data.count} people`, data.people);
                }
            }
        });

        // Bind popup
        if (data && data.count > 0) {
            layer.bindPopup(`
        <div style="font-family: system-ui, -apple-system, sans-serif;">
          <h3 style="font-size: 18px; font-weight: bold; margin: 0 0 8px 0; color: #1a4b8b;">
            ${countryName}
          </h3>
          <div style="font-size: 14px; color: #374151;">
            <p style="margin: 4px 0;"><strong>People:</strong> ${data.count}</p>
            <p style="margin: 4px 0; font-size: 12px; color: #6b7280;">
              Click to see full list
            </p>
          </div>
        </div>
      `);
        }
    };

    // Africa GeoJSON data (simplified - you can replace with full GeoJSON)
    const africaGeoJSON = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": { "name": "Nigeria" },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[
                        [2.691702, 6.258817], [2.749063, 7.870734], [2.723793, 8.506845],
                        [2.912308, 9.137608], [3.220352, 9.444152], [3.705438, 10.063210],
                        [3.600070, 10.332186], [3.797112, 10.734746], [3.572216, 11.327939],
                        [3.611180, 11.660167], [4.368344, 12.186557], [4.106805, 13.531921],
                        [5.443058, 13.865924], [6.445426, 13.492768], [6.820659, 13.115091],
                        [7.330746, 13.098038], [7.804671, 13.343527], [9.014933, 12.826659],
                        [9.524928, 12.851102], [10.114814, 13.277252], [10.701032, 13.246918],
                        [10.989593, 13.387323], [11.527803, 13.328980], [12.302004, 13.037189],
                        [13.083986, 13.596147], [13.318702, 13.556356], [13.995352, 12.461565],
                        [14.181336, 12.483657], [14.577178, 12.085361], [14.468192, 11.904752],
                        [14.415379, 11.572369], [13.572949, 10.798566], [13.308676, 10.160362],
                        [13.167599, 9.640626], [12.955468, 9.417772], [12.753672, 8.717763],
                        [12.218872, 8.305824], [12.063946, 7.799808], [11.839309, 7.397042],
                        [11.745774, 6.981383], [11.058788, 6.644427], [10.497375, 7.055358],
                        [10.118277, 7.038390], [9.522706, 6.453482], [9.233162, 6.444490],
                        [8.757533, 5.479666], [8.500288, 4.771983], [7.462108, 4.412108],
                        [7.082596, 4.464689], [6.698072, 4.240594], [5.898173, 4.262453],
                        [5.362805, 4.887971], [5.033574, 5.611802], [4.325607, 6.270651],
                        [3.574180, 6.258300], [2.691702, 6.258817]
                    ]]
                }
            },
            {
                "type": "Feature",
                "properties": { "name": "Kenya" },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[
                        [33.893569, -0.950000], [34.180000, -1.020000], [34.670000, -1.050000],
                        [35.030000, -1.400000], [35.298007, -1.898584], [35.817448, -1.876396],
                        [36.159078, -1.996191], [36.855093, -2.290953], [37.547408, -3.098080],
                        [37.698128, -3.097522], [37.906705, -3.594549], [38.509505, -3.589194],
                        [39.202846, -4.676383], [39.604604, -4.346789], [39.798495, -3.855870],
                        [40.770475, -3.572150], [41.181200, -3.289790], [41.855083, -1.899760],
                        [40.885374, -0.868877], [40.641766, -0.350475], [40.264648, 0.620412],
                        [40.121543, 1.142351], [39.809969, 1.427097], [39.600518, 1.683445],
                        [39.201320, 1.843284], [38.891033, 2.306474], [38.620070, 3.618720],
                        [38.120915, 3.598605], [37.696315, 3.713413], [37.105747, 4.367613],
                        [36.852530, 4.447864], [36.159078, 4.447864], [35.760887, 4.776965],
                        [35.298007, 5.506000], [34.700180, 6.594220], [34.250000, 6.820000],
                        [34.075920, 7.226447], [33.568290, 7.710340], [32.954180, 7.784659],
                        [33.294800, 8.352823], [33.825650, 8.375850], [34.041150, 7.996030],
                        [34.470000, 7.996030], [34.625000, 8.518590], [34.730000, 9.118060],
                        [34.955590, 9.451340], [34.960000, 10.860000], [34.856655, 10.860000],
                        [34.734170, 10.910170], [34.531660, 11.050000], [34.170000, 10.870000],
                        [33.960000, 9.580000], [33.940000, 9.450000], [33.960000, 8.450000],
                        [33.893569, -0.950000]
                    ]]
                }
            },
            {
                "type": "Feature",
                "properties": { "name": "Ethiopia" },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[
                        [37.906705, 3.594549], [38.120915, 3.598605], [38.620070, 3.618720],
                        [38.891033, 2.306474], [39.201320, 1.843284], [39.600518, 1.683445],
                        [39.809969, 1.427097], [40.121543, 1.142351], [40.264648, 0.620412],
                        [40.641766, 0.350475], [40.885374, 0.868877], [41.855083, 1.899760],
                        [41.181200, 3.289790], [40.770475, 3.572150], [39.798495, 3.855870],
                        [39.604604, 4.346789], [39.202846, 4.676383], [38.509505, 3.589194],
                        [37.906705, 3.594549]
                    ]]
                }
            },
            // Add more countries as needed - this is a simplified example
            // For production, you'd load a complete Africa GeoJSON file
        ]
    };

    // Top countries
    const topCountries = useMemo(() => {
        return Object.entries(countryStats.stats)
            .map(([country, data]) => ({ country, ...data }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10);
    }, [countryStats]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1a4b8b] to-[#03164c] text-white p-6 md:p-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex items-center justify-between flex-wrap gap-6">
                        <div className="flex items-center gap-4">
                            <MapPin className="w-8 h-8 md:w-10 md:h-10" />
                            <div>
                                <h1 className="text-3xl md:text-4xl font-black">Africa People Distribution</h1>
                                <p className="text-blue-200 text-sm md:text-base mt-1">Interactive choropleth map</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 md:px-6 py-3 md:py-4">
                                <div className="flex items-center gap-3">
                                    <Users className="w-5 h-5 md:w-6 md:h-6" />
                                    <div>
                                        <p className="text-xs text-blue-200 font-medium">Total People</p>
                                        <p className="text-2xl md:text-3xl font-black">{countryStats.totalPeople}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 md:px-6 py-3 md:py-4">
                                <div className="flex items-center gap-3">
                                    <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
                                    <div>
                                        <p className="text-xs text-blue-200 font-medium">Countries</p>
                                        <p className="text-2xl md:text-3xl font-black">{countryStats.totalCountries}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-7xl p-4 md:p-8">
                {/* Map Section */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 mb-8">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <h2 className="text-2xl font-bold text-gray-900">Distribution Map</h2>
                            <div className="flex items-center gap-2 text-sm text-gray-600 bg-blue-50 px-4 py-2 rounded-full">
                                <Info className="w-4 h-4 text-[#1a4b8b]" />
                                <span>Hover over countries for details</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative bg-gradient-to-br from-blue-50 to-slate-50" style={{ height: '600px' }}>
                        <MapContainer
                            center={[0, 20]}
                            zoom={3}
                            minZoom={3}
                            maxZoom={8}
                            style={{ height: '100%', width: '100%' }}
                            className="z-0"
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            <GeoJSON
                                key={geoJsonKey}
                                data={africaGeoJSON}
                                style={style}
                                onEachFeature={onEachFeature}
                            />

                            <MapBounds geoJsonData={africaGeoJSON} />
                        </MapContainer>

                        {/* Floating Country Info */}
                        {hoveredCountry && countryStats.stats[hoveredCountry] && (
                            <div className="absolute top-4 right-4 z-[1000] bg-white rounded-xl shadow-2xl border-2 border-[#1a4b8b] p-6 min-w-[280px] animate-fadeIn pointer-events-none">
                                <h3 className="text-2xl font-black text-gray-900 mb-4 border-b-2 border-[#1a4b8b] pb-2">
                                    {hoveredCountry}
                                </h3>
                                <div className="space-y-3">
                                    <div className="bg-[#1a4b8b] text-white rounded-lg px-4 py-3">
                                        <p className="text-sm font-semibold uppercase tracking-wide">People Count</p>
                                        <p className="text-3xl font-black">{countryStats.stats[hoveredCountry].count}</p>
                                    </div>
                                    <div className="text-xs text-gray-600">
                                        <p className="font-semibold mb-1">Recent entries:</p>
                                        {countryStats.stats[hoveredCountry].people.slice(0, 3).map((person, i) => (
                                            <p key={i} className="truncate">• {person}</p>
                                        ))}
                                        {countryStats.stats[hoveredCountry].people.length > 3 && (
                                            <p className="text-[#1a4b8b] font-semibold mt-1">
                                                +{countryStats.stats[hoveredCountry].people.length - 3} more
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Legend */}
                    <div className="p-6 border-t border-gray-200 bg-gray-50">
                        <h3 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
                            Concentration Level
                        </h3>
                        <div className="flex items-center gap-3 md:gap-4 flex-wrap">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded border border-gray-300" style={{ backgroundColor: '#f3f4f6' }}></div>
                                <span className="text-xs text-gray-600 font-medium">0</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded border border-gray-300" style={{ backgroundColor: '#dbeafe' }}></div>
                                <span className="text-xs text-gray-600 font-medium">1</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded border border-gray-300" style={{ backgroundColor: '#93c5fd' }}></div>
                                <span className="text-xs text-gray-600 font-medium">2-3</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded border border-gray-300" style={{ backgroundColor: '#3b82f6' }}></div>
                                <span className="text-xs text-gray-600 font-medium">4-5</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded border border-gray-300" style={{ backgroundColor: '#2563eb' }}></div>
                                <span className="text-xs text-gray-600 font-medium">6-10</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded border border-gray-300" style={{ backgroundColor: '#1e40af' }}></div>
                                <span className="text-xs text-gray-600 font-medium">11-15</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded border border-gray-300" style={{ backgroundColor: '#1a4b8b' }}></div>
                                <span className="text-xs text-gray-600 font-medium">16+</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Top Countries */}
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Top Countries</h2>
                        <TrendingUp className="w-6 h-6 text-[#1a4b8b]" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {topCountries.map((country, index) => (
                            <div
                                key={index}
                                className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200 hover:border-[#1a4b8b] hover:shadow-lg transition-all duration-300"
                                onMouseEnter={() => setHoveredCountry(country.country)}
                                onMouseLeave={() => setHoveredCountry(null)}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center justify-center w-8 h-8 bg-[#1a4b8b] text-white rounded-full text-sm font-bold">
                                            {index + 1}
                                        </span>
                                        <h3 className="font-bold text-gray-900 text-lg">{country.country}</h3>
                                    </div>
                                    <span className="text-2xl font-black text-[#1a4b8b]">
                                        {country.count}
                                    </span>
                                </div>
                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-[#1a4b8b] to-[#03164c] rounded-full transition-all duration-500"
                                        style={{ width: `${(country.count / topCountries[0].count) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
        </div>
    );
}

export default AfricaLeafletMap;