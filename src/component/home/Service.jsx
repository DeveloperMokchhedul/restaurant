import React, { useState } from 'react';
import Container from '../common/Container';
import { serviceData } from '../../api/serviceApi.js';
import Slider from './Slider';

function Service() {
  const [activeIndex, setActiveIndex] = useState(1); 

  return (
    <div className="">
      <Container>
        <div className="flex flex-wrap justify-between items-center py-[37px] px-[20px] md:px-0 gap-[20px]">
          {serviceData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center md:gap-2 cursor-pointer`}
              onClick={() => setActiveIndex(index)} 
            >
              <div
                className={`w-[26px] ${
                  activeIndex === index ? "text-[#1677bd]" : "text-[#AFAFAF]"
                }`}
              >
                {<item.icon />}
              </div>
              <h1
                className={`text-[15px] leading-[18.16px] ${
                  activeIndex === index ? "text-[#1677bd]" : "text-[#AFAFAF]"
                }`}
              >
                {item.title}
              </h1>
            </div>
          ))}
        </div>
        <Slider />
      </Container>
    </div>
  );
}

export default Service;
