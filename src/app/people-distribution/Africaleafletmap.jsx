"use client";
import React, { useState, useMemo, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import { Users, MapPin, TrendingUp, Info, Award, Globe } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Component to fit bounds when data changes - Focus on Africa only
function MapBounds({ geoJsonData }) {
    const map = useMap();

    React.useEffect(() => {
        if (geoJsonData && geoJsonData.features && geoJsonData.features.length > 0) {
            try {
                const bounds = [];
                geoJsonData.features.forEach(feature => {
                    if (feature.geometry && feature.geometry.type === 'Polygon') {
                        feature.geometry.coordinates[0].forEach(coord => {
                            bounds.push([coord[1], coord[0]]);
                        });
                    } else if (feature.geometry && feature.geometry.type === 'MultiPolygon') {
                        feature.geometry.coordinates.forEach(polygon => {
                            polygon[0].forEach(coord => {
                                bounds.push([coord[1], coord[0]]);
                            });
                        });
                    }
                });

                if (bounds.length > 0) {
                    // Fit bounds with padding to show only Africa
                    map.fitBounds(bounds, {
                        padding: [30, 30],
                        maxZoom: 4.5
                    });
                }
            } catch (error) {
                console.error('Error fitting bounds:', error);
                // Fallback to Africa bounds
                map.fitBounds([[-35, -20], [38, 52]], { padding: [30, 30] });
            }
        }
    }, [geoJsonData, map]);

    return null;
}

function AfricaLeafletMap({ peopleData = {} }) {
    const [geoJsonKey, setGeoJsonKey] = useState(0);
    const [geoJsonData, setGeoJsonData] = useState(null);
    const [isLoadingGeo, setIsLoadingGeo] = useState(true);

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

    // Comprehensive country name normalization
    const normalizeCountryName = (name) => {
        const nameMap = {
            'Côte d`Ivoire': 'Ivory Coast',
            "Côte d'Ivoire": 'Ivory Coast',
            'Democratic Republic of the Congo': 'Democratic Republic of the Congo',
            'Democratic Republic of Congo': 'Democratic Republic of the Congo',
            'Republic of the Congo': 'Republic of the Congo',
            'Congo': 'Republic of the Congo',
            'cameroun': 'Cameroon',
            'Malawi.': 'Malawi',
            'Central African Republic': 'Central African Republic',
            'Tanzania': 'Tanzania',
            'United Republic of Tanzania': 'Tanzania',
            'South Africa': 'South Africa',
        };

        return nameMap[name] || name;
    };

    // Reverse mapping: GeoJSON names → your data's country names
    const matchGeoJSONToData = (geoName) => {
        const reverseMap = {
            'Ivory Coast': 'Côte d`Ivoire',
            "Côte d'Ivoire": 'Côte d`Ivoire',
            'Democratic Republic of the Congo': 'Democratic Republic of the Congo',
            'Dem. Rep. Congo': 'Democratic Republic of the Congo',
            'Congo (Kinshasa)': 'Democratic Republic of the Congo',
            'Republic of the Congo': 'Republic of the Congo',
            'Congo': 'Republic of the Congo',
            'Congo (Brazzaville)': 'Republic of the Congo',
            'United Republic of Tanzania': 'Tanzania',
            'Tanzania': 'Tanzania',
            'Central African Republic': 'Central African Republic',
            'C.A.R.': 'Central African Republic',
        };

        return reverseMap[geoName] || geoName;
    };

    // Fetch complete Africa GeoJSON from reliable source
    useEffect(() => {
        const fetchGeoJSON = async () => {
            try {
                setIsLoadingGeo(true);
                const response = await fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson');
                const data = await response.json();

                const africanCountries = [
                    'Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi',
                    'Cameroon', 'Cape Verde', 'Central African Republic', 'Chad', 'Comoros',
                    'Republic of the Congo', 'Democratic Republic of the Congo',
                    'Ivory Coast', "Côte d'Ivoire", 'Djibouti', 'Egypt', 'Equatorial Guinea',
                    'Eritrea', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau',
                    'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali',
                    'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 'Namibia', 'Niger',
                    'Nigeria', 'Rwanda', 'São Tomé and Príncipe', 'Senegal', 'Seychelles',
                    'Sierra Leone', 'Somalia', 'South Africa', 'South Sudan', 'Sudan',
                    'Swaziland', 'Eswatini', 'Tanzania', 'Togo', 'Tunisia', 'Uganda',
                    'Zambia', 'Zimbabwe', 'Western Sahara'
                ];

                const africaFeatures = data.features.filter(feature => {
                    const name = feature.properties.ADMIN ||
                        feature.properties.name ||
                        feature.properties.NAME ||
                        feature.properties.sovereignt;
                    return africanCountries.includes(name);
                });

                console.log(`Loaded ${africaFeatures.length} African countries`);

                setGeoJsonData({
                    type: 'FeatureCollection',
                    features: africaFeatures
                });
                setIsLoadingGeo(false);
            } catch (error) {
                console.error('Error loading GeoJSON:', error);
                setIsLoadingGeo(false);
            }
        };

        fetchGeoJSON();
    }, []);

    // Calculate country statistics
    const countryStats = useMemo(() => {
        const stats = {};
        let totalPeople = 0;
        let maxCount = 0;

        Object.entries(peopleData).forEach(([country, people]) => {
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

    // IMPROVED: More concentrated color scale with better visual hierarchy
    const getColor = (count) => {
        if (count === 0 || !count) return '#e5e7eb'; // Gray for no data

        // Progressive color intensity - deeper blues for more concentration
        if (count === 1) return '#bfdbfe'; // Very light blue
        if (count === 2) return '#93c5fd'; // Light blue
        if (count === 3) return '#60a5fa'; // Medium-light blue
        if (count <= 5) return '#3b82f6'; // Medium blue
        if (count <= 8) return '#2563eb'; // Strong blue
        if (count <= 12) return '#1d4ed8'; // Deep blue
        if (count <= 18) return '#1e40af'; // Very deep blue
        if (count <= 25) return '#1a3a8a'; // Darker blue
        return '#0f1f47'; // Darkest blue for highest concentration
    };

    // Get intensity label for legend
    const getIntensityLabel = (count) => {
        if (count === 0) return 'No Fellows';
        if (count === 1) return 'Minimal';
        if (count <= 3) return 'Low';
        if (count <= 8) return 'Moderate';
        if (count <= 18) return 'High';
        return 'Very High';
    };

    // Style function for GeoJSON features
    const style = (feature) => {
        const geoCountryName = feature.properties.ADMIN ||
            feature.properties.name ||
            feature.properties.NAME ||
            feature.properties.sovereignt;

        const matchedName = matchGeoJSONToData(geoCountryName);
        const data = countryStats.stats[matchedName] || countryStats.stats[geoCountryName];
        const count = data ? data.count : 0;

        return {
            fillColor: getColor(count),
            weight: 1.5,
            opacity: 1,
            color: count > 0 ? '#1e293b' : '#cbd5e1', // Darker border for countries with data
            fillOpacity: count > 0 ? 0.85 : 0.5, // More opaque for data countries
        };
    };

    // Event handlers
    const onEachFeature = (feature, layer) => {
        const geoCountryName = feature.properties.ADMIN ||
            feature.properties.name ||
            feature.properties.NAME ||
            feature.properties.sovereignt;

        const matchedName = matchGeoJSONToData(geoCountryName);
        const data = countryStats.stats[matchedName] || countryStats.stats[geoCountryName];

        // Hover effect
        layer.on({
            mouseover: (e) => {
                const layer = e.target;
                if (data && data.count > 0) {
                    layer.setStyle({
                        weight: 3,
                        color: '#0f172a',
                        fillOpacity: 0.95
                    });
                }
            },
            mouseout: (e) => {
                const layer = e.target;
                const count = data ? data.count : 0;
                layer.setStyle({
                    weight: 1.5,
                    color: count > 0 ? '#1e293b' : '#cbd5e1',
                    fillOpacity: count > 0 ? 0.85 : 0.5
                });
            },
            click: () => {
                if (data) {
                    console.log(`${geoCountryName}: ${data.count} people`, data.people);
                }
            }
        });

        // Enhanced popup
        if (data && data.count > 0) {
            layer.bindPopup(`
                <div style="font-family: system-ui, -apple-system, sans-serif; min-width: 200px;">
                    <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 12px; margin: -12px -12px 12px -12px; border-radius: 8px 8px 0 0;">
                        <h3 style="font-size: 18px; font-weight: bold; margin: 0; color: white;">
                            ${geoCountryName}
                        </h3>
                    </div>
                    <div style="padding: 4px 0;">
                        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                            <div style="background: #dbeafe; padding: 8px; border-radius: 8px; display: flex; align-items: center; gap: 6px; flex: 1;">
                                <svg width="20" height="20" fill="#1e40af" viewBox="0 0 24 24">
                                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                                </svg>
                                <div>
                                    <p style="margin: 0; font-size: 24px; font-weight: bold; color: #1e40af;">${data.count}</p>
                                    <p style="margin: 0; font-size: 11px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Fellows</p>
                                </div>
                            </div>
                        </div>
                        <div style="background: ${getColor(data.count)}; padding: 6px 10px; border-radius: 6px; text-align: center;">
                            <p style="margin: 0; font-size: 12px; color: white; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                ${getIntensityLabel(data.count)} Activity
                            </p>
                        </div>
                        ${data.originalName !== geoCountryName ? `
                            <p style="margin: 8px 0 0 0; font-size: 11px; color: #94a3b8; font-style: italic;">
                                Listed as: ${data.originalName}
                            </p>
                        ` : ''}
                    </div>
                </div>
            `);
        } else {
            layer.bindPopup(`
                <div style="font-family: system-ui, -apple-system, sans-serif;">
                    <h3 style="font-size: 16px; font-weight: bold; margin: 0 0 8px 0; color: #64748b;">
                        ${geoCountryName}
                    </h3>
                    <div style="background: #f1f5f9; padding: 8px; border-radius: 6px;">
                        <p style="margin: 0; font-size: 13px; color: #64748b;">No fellows data available</p>
                    </div>
                </div>
            `);
        }
    };

    // Top countries
    const topCountries = useMemo(() => {
        return Object.entries(countryStats.stats)
            .map(([country, data]) => ({ country, ...data }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 8);
    }, [countryStats]);

    return (
        <div className="w-full h-full">
            {/* Map Container */}
            <div className="relative w-full h-full">
                {isLoadingGeo ? (
                    <div className="flex items-center justify-center h-full min-h-[500px]">
                        <div className="text-center">
                            <div className="w-16 h-16 border-4 border-[#1a4b8b] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                            <p className="text-gray-700 font-semibold text-lg">Loading Africa map...</p>
                            <p className="text-gray-500 text-sm mt-2">Fetching geographic data for all 54 countries</p>
                        </div>
                    </div>
                ) : geoJsonData ? (
                    <div className="w-full h-full">
                        <MapContainer
                            center={[2, 20]}
                            zoom={3.5}
                            minZoom={3}
                            maxZoom={8}
                            maxBounds={[[-40, -25], [40, 60]]}
                            maxBoundsViscosity={1.0}
                            style={{ height: '100%', width: '100%' }}
                            className="z-0 rounded-2xl"
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                bounds={[[-40, -25], [40, 60]]}
                            />

                            <GeoJSON
                                key={geoJsonKey}
                                data={geoJsonData}
                                style={style}
                                onEachFeature={onEachFeature}
                            />

                            <MapBounds geoJsonData={geoJsonData} />
                        </MapContainer>

                        {/* Enhanced Legend - Positioned over map */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-4 border border-gray-200 z-[1000]">
                            <div className="flex items-center justify-between gap-4 mb-3">
                                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide flex items-center gap-2">
                                    <div className="w-1 h-5 bg-gradient-to-b from-[#1a4b8b] to-[#3b82f6] rounded-full"></div>
                                    Fellows Concentration
                                </h3>
                                <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                    Darker = More Active
                                </div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
                                {[
                                    { color: '#e5e7eb', label: '0', desc: 'No Data' },
                                    { color: '#bfdbfe', label: '1', desc: 'Minimal' },
                                    { color: '#93c5fd', label: '2', desc: 'Low' },
                                    { color: '#60a5fa', label: '3', desc: 'Low' },
                                    { color: '#3b82f6', label: '4-5', desc: 'Moderate' },
                                    { color: '#2563eb', label: '6-8', desc: 'Moderate' },
                                    { color: '#1d4ed8', label: '9-12', desc: 'High' },
                                    { color: '#1e40af', label: '13-18', desc: 'High' },
                                    { color: '#0f1f47', label: '19+', desc: 'Very High' },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex flex-col items-center gap-1.5">
                                        <div
                                            className="w-full h-8 rounded-lg border-2 border-gray-300 shadow-sm transition-transform hover:scale-110"
                                            style={{ backgroundColor: item.color }}
                                        ></div>
                                        <div className="text-center">
                                            <span className="text-xs font-bold text-gray-700 block">{item.label}</span>
                                            <span className="text-[10px] text-gray-500">{item.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full min-h-[500px]">
                        <div className="text-center">
                            <p className="text-red-600 font-semibold text-lg">Failed to load map data</p>
                            <p className="text-sm text-gray-600 mt-2">Please refresh the page to try again</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AfricaLeafletMap;