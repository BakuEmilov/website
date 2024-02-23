import Image from "next/image";
import React from "react";
import Arrow from "../../public/assets/arrow.png";

const Cta = () => {
  return (
    <div className="w-full rounded-[16px] bg-gradient-to-r from-pink-500 to-rose-500 py-[56px] px-[32px] text-center lg:my-[60px] lg:px-[324px] lg:py-[89px]">
      <h1 className="text-[32px] font-medium text-white lg:text-[56px] leading-[64px]">
        Monitor your website like a pro
      </h1>
      <p className="text-white pt-6 lg:pt-[48px] lg:text-[18px]">
        Join over 800+ happy site owners boosting productivity and efficiency!
      </p>

      <div className="mt-[40px] flex flex-col w-full items-center lg:mt-[56px] lg:flex-row lg:justify-center gap-x-[40px]">
        <button className="font-medium py-[16px] px-[32px] bg-white rounded-[4px] text-pink-500 w-fit">
          Try for free
        </button>

        <button className="w-full flex items-center justify-center gap-x-3 mt-[32px] text-white font-medium lg:w-fit lg:mt-0 ">
          Contact Sales
          <span>
            <Image src={Arrow} alt="Learn More" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Cta;
