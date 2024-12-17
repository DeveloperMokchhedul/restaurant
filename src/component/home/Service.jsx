import React from 'react';
import Container from '../common/Container';
import { serviceData } from '../../api/serviceApi.js';
import Slider from './Slider';

function Service() {
  return (
    <div className="">
      <Container>
        <div className='flex flex-wrap justify-between items-center py-[37px] px-[20px] md:px-0 gap-[20px] '>
          {serviceData.map((item, index) => (
            <div key={index} className=" flex flex-col items-center md:gap-2">
              <div className="w-[26px] ">{<item.icon />}</div>
              <h1 className="text-[15px] leading-[18.16px] text-[#AFAFAF]">{item.title}</h1>
            </div>
          ))}
        </div>
        <Slider />


      </Container>
    </div>
  );
}

export default Service;
