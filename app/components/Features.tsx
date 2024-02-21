import Image from "next/image";
import React from "react";
import Feature1 from "../../public/assets/feature-1.svg";
import Feature2 from "../../public/assets/feature-2.svg";
import Feature3 from "../../public/assets/feature-3.svg";
import Check from "../../public/assets/check.svg";
import bluebutton from "../../public/assets/blue-button.svg";
import greenbutton from "../../public/assets/green-button.svg";
import pinkbutton from "../../public/assets/pink-button.svg";

const Features = () => {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
      <div className="flex flex-col lg:flex-row-reverse gap-x-6">
        <Image
          src={Feature1}
          alt="Feature 1 image"
          className="hidden w-1/2 lg:block"
        />
        <div className="sm:w-1/2 lg:pt-[56px] lg:pr-[56px]">
          <h3 className="text-[#0085FF] font-medium lg:text-[18px]">
            Sales Monitoring
          </h3>
          <h1 className="text-[#172026] text-[24px] font-medium pt-[12px] lg:text-[42px] leading-[58px]">
            Simplify your sales monitoring
          </h1>
          <Image
            src={Feature1}
            alt="Feature 1 image"
            className="pt-[24px] lg:hidden"
          />
          <p className="text-[#36485C] py-[24px] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.{" "}
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Consectetur adipiscing elit
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>

          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px]">
            Learn More
            <span>
              <Image src={bluebutton} alt="Learn More" />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-x-6">
        <Image
          src={Feature2}
          alt="Feature 1 image"
          className="hidden w-1/2 lg:block"
        />
        <div className="sm:w-1/2 lg:pt-[56px] lg:pl-[56px]">
          <h3 className="text-[#00A424] font-medium lg:text-[18px]">
            Customer Support
          </h3>
          <h1 className="text-[#172026] text-[24px] font-medium pt-[12px] lg:text-[42px] leading-[58px]">
            Get in touch with your customers
          </h1>
          <Image
            src={Feature2}
            alt="Feature 1 image"
            className="pt-[24px] lg:hidden"
          />
          <p className="text-[#36485C] py-[24px] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.{" "}
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Consectetur adipiscing elit
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>

          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px]">
            Learn More
            <span>
              <Image src={greenbutton} alt="Learn More" />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse gap-x-6">
        <Image
          src={Feature3}
          alt="Feature 1 image"
          className="hidden w-1/2 lg:block"
        />
        <div className="sm:w-1/2 lg:pt-[56px] lg:pr-[56px]">
          <h3 className="text-[#EB2891] font-medium lg:text-[18px]">
            Growth Monitoring
          </h3>
          <h1 className="text-[#172026] text-[24px] font-medium pt-[12px] lg:text-[42px] leading-[58px]">
            Monitor your site’s new subscribers
          </h1>
          <Image
            src={Feature3}
            alt="Feature 1 image"
            className="pt-[24px] lg:hidden"
          />
          <p className="text-[#36485C] py-[24px] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.{" "}
          </p>
          
          <div className="flex w-full items-center gap-x-[24px]">
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium">100+</h3>
              <p className="text-[#5F7896]">Conse adipiscing elit</p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium">800+</h3>
              <p className="text-[#5F7896]">Lorem ipsum dolor sit</p>
            </div>
          </div>

          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#EB2891] lg:text-[18px]">
            Learn More
            <span>
              <Image src={pinkbutton} alt="Learn More" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
