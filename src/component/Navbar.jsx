import React, { useState } from 'react';
import Container from './common/Container';
import CommonBtn from './common/CommonBtn';
import { CiGlobe } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";

function Navbar() {
    const [query, setQuery] = useState("");
    const [locationQuery, setLocationQuery] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

    const restaurantSuggestions = [
        { name: "The Food Palace", location: "Singapore" },
        { name: "Sunrise Hotel", location: "Singapore" },
        { name: "Ocean View Restaurant", location: "Bangkok" },
        { name: "Mountain Delight", location: "Nepal" },
        { name: "City Diner", location: "New York" }
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

    return (
        <header className='border-b'>
            <Container>
                <nav className='flex justify-between pt-[46px] pb-[23px] items-center '>

                    <div className=' text-start'>
                        <img className='w-[166px]' src="images/logo.png" alt="logo" />
                    </div>


                    <div className='border rounded-full w-[50%] py-[4px] relative'>
                        <div className='w-full flex justify-between items-center'>
                            <div className='w-full relative'>
                                <input
                                    className='w-full ps-[23px] outline-none'
                                    type="text"
                                    placeholder='restaurant, hotel, service....'
                                    value={query}
                                    onChange={handleSearch}
                                />
                   
                                {filteredSuggestions.length > 0 && (
                                    <ul className='absolute bg-white border rounded shadow-md mt-1 w-full max-h-[150px] overflow-y-auto'>
                                        {filteredSuggestions.map((item, index) => (
                                            <li key={index} className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>
                                                {item.name} - {item.location}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <div className='w-full flex items-center'>
                                <span>|</span>
                                <input
                                    className='ps-[20px] w-full outline-none'
                                    type="text"
                                    placeholder='Location...'
                                    value={locationQuery}
                                    onChange={handleLocationSearch}
                                />
                            </div>

                            <div className='pr-[5px] '>
                                <IoSearchOutline className='w-[43px] h-[43px] bg-bgPrimary p-[12px] rounded-full text-white flex justify-center items-center' />
                            </div>
                        </div>
                    </div>

                    <div className=' text-end'>
                        <div className='flex gap-[13px] items-center'>
                            <CiGlobe size={"20px"} />
                            <CommonBtn className={"bg-[#1E1E1E]"}>MyFeedback for business</CommonBtn>
                        </div>
                    </div>
                </nav>
            </Container>
        </header>
    );
}

export default Navbar;
