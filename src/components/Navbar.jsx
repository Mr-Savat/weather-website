import React, { useState } from 'react';

function Navbar({ onSearch, initialCity = 'Phnom Penh' }) {
    const [city, setCity] = useState(initialCity);

    const handleSearch = () => {
        if (city.trim()) {
            onSearch(city.trim());
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && city.trim()) {
            onSearch(city.trim());
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between py-4 gap-4">
                    {/* Title */}
                    <div className="flex items-center">
                        <div className="text-2xl mr-2">🌤️</div>
                        <h1 className="text-xl sm:text-2xl font-bold text-blue-600">
                            ព្យាករណ៍អាកាសធាតុ
                        </h1>
                    </div>

                    {/* Search Box */}
                    <div className="w-full lg:w-auto max-w-lg">
                        <div className="flex flex-col sm:flex-row gap-2">
                            <div className="flex-1">
                                <input
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="ស្វែងរកទីក្រុង..."
                                    className="w-full px-4 py-2 border-2 border-blue-400 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                            </div>
                            <button
                                onClick={handleSearch}
                                className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                            >
                                ស្វែងរក
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;