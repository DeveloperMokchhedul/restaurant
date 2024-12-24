import React, { useState, useEffect } from 'react';
import Container from './common/Container';
import CommonBtn from './common/CommonBtn';
import { CiGlobe } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";

function Navbar() {
    const [query, setQuery] = useState("");
    const [locationQuery, setLocationQuery] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

    const restaurantSuggestions = [
        { name: "Kakune restau, ", location: "paris..." },
        { name: "Kakunexy delux,", location: "rome..." },
        { name: "kakune,", location: "new york" },
        { name: "City Diner", location: "Dakar plateau..." }
    ];

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);

        const suggestions = restaurantSuggestions.filter(item =>
            item.name.toLowerCase().includes(value.toLowerCase()) &&
            (locationQuery ? item.location.toLowerCase().includes(locationQuery.toLowerCase()) : true)
        );

        setFilteredSuggestions(value || locationQuery ? suggestions : []);
    };

    const handleLocationSearch = (e) => {
        const value = e.target.value;
        setLocationQuery(value);

        const suggestions = restaurantSuggestions.filter(item =>
            item.location.toLowerCase().includes(value.toLowerCase()) &&
            (query ? item.name.toLowerCase().includes(query.toLowerCase()) : true)
        );

        setFilteredSuggestions(query || value ? suggestions : []);
    };

    // Dynamic dark mode detection based on system settings
    useEffect(() => {
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    return (
        <header className="border-b px-[20px] bg-white dark:bg-gray-900 dark:border-gray-800">
            <Container>
                {/* Mobile view */}
                <div className="md:hidden">
                    <div className="flex justify-between pt-[20px] md:pt-[46px] pb-[23px] items-center">
                        <div className="text-start">
                            <img className="w-[150px] mt-[15px]" src="images/logo.png" alt="logo" />
                        </div>
                        <div className="text-end">
                            <div className="flex gap-[13px] items-center">
                                <CommonBtn className="bg-[#1E1E1E] text-[10px] px-[10px] md:text-[28px] text-white">
                                    MyFeedback for business
                                </CommonBtn>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded-full w-[100%] py-[4px] relative bg-gray-100 dark:bg-gray-800">
                        <div className="w-full flex justify-between items-center">
                            <div className="w-full relative">
                                <input
                                    className="w-full ps-[23px] outline-none bg-transparent text-black dark:text-white"
                                    type="text"
                                    placeholder="restaurant, hotel, service...."
                                    value={query}
                                    onChange={handleSearch}
                                />

                                {filteredSuggestions.length > 0 && (
                                    <ul className="absolute bg-white dark:bg-gray-700 border dark:border-gray-600 rounded shadow-md mt-1 w-full max-h-[150px] overflow-y-auto">
                                        {filteredSuggestions.map((item, index) => (
                                            <li
                                                key={index}
                                                className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
                                            >
                                                {item.name} - {item.location}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <div className="w-full flex items-center">
                                <span className="text-gray-500 dark:text-gray-400">|</span>
                                <input
                                    className="ps-[20px] w-full outline-none bg-transparent text-black dark:text-white"
                                    type="text"
                                    placeholder="Location..."
                                    value={locationQuery}
                                    onChange={handleLocationSearch}
                                />
                            </div>

                            <div className="pr-[5px]">
                                <IoSearchOutline className="w-[43px] h-[43px] bg-bgPrimary dark:bg-gray-700 p-[12px] rounded-full text-white flex justify-center items-center" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop site */}
                <nav className="hidden md:flex justify-between pt-[46px] pb-[23px] items-center">
                    <div className="text-start">
                        <img className="w-[166px]" src="images/logo.png" alt="logo" />
                    </div>

                    <div className="border rounded-full w-[50%] py-[4px] relative bg-gray-100 dark:bg-gray-800">
                        <div className="w-full flex justify-between items-center">
                            <div className="w-full relative">
                                <input
                                    className="w-full ps-[23px] outline-none bg-transparent text-black dark:text-white"
                                    type="text"
                                    placeholder="restaurant, hotel, service...."
                                    value={query}
                                    onChange={handleSearch}
                                />

                                {filteredSuggestions.length > 0 && (
                                    <ul className="absolute bg-white dark:bg-gray-700 border dark:border-gray-600 rounded shadow-md mt-1 w-full max-h-[150px] overflow-y-auto">
                                        {filteredSuggestions.map((item, index) => (
                                            <li
                                                key={index}
                                                className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
                                            >
                                                {item.name} - {item.location}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <div className="w-full flex items-center">
                                <span className="text-gray-500 dark:text-gray-400">|</span>
                                <input
                                    className="ps-[20px] w-full outline-none bg-transparent text-black dark:text-white"
                                    type="text"
                                    placeholder="Location..."
                                    value={locationQuery}
                                    onChange={handleLocationSearch}
                                />
                            </div>

                            <div className="pr-[5px]">
                                <IoSearchOutline className="w-[43px] h-[43px] bg-bgPrimary dark:bg-gray-700 p-[12px] rounded-full text-white flex justify-center items-center" />
                            </div>
                        </div>
                    </div>

                    <div className="text-end">
                        <div className="flex gap-[13px] items-center">
                            <CiGlobe size={"20px"} className="text-black dark:text-white" />
                            <CommonBtn className="bg-[#1E1E1E] text-white">MyFeedback for business</CommonBtn>
                        </div>
                    </div>
                </nav>
            </Container>
        </header>
    );
}

export default Navbar;
