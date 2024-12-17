import React from 'react';
import Description from './Description';

function Cart({ title, description, review, rating, image }) {
  return (
    <div className="bg-[#F8F8F8] rounded-[14px]">
      <img className="w-full" src={image} alt="" />
      <div className="md:pl-[14px] py-[13px]">
        <p className="font-roboto text-19px leading-[22.27px] font-semibold text-[#232323]">
          {title}
        </p>
        <Description>{description}</Description>
        <div className="flex items-center text-[16px] pt-[24px]">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`${
                index + 1 <= Math.floor(rating) ? "text-[#ffc107]" : "text-[#e4e5e9]"
              }`}
            >
              ★
            </span>
          ))}
          <p className="ml-2 text-[14px] font-semibold font-roboto leading-[16.41px]">
            {rating}.0 <span className="font-normal text-[#7A7A7A]">({review} reviews)</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
