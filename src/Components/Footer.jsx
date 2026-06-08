import React from "react";
import { FiInstagram, FiTwitter, FiLinkedin, FiFacebook } from "react-icons/fi";
import Logo from "../assets/Logo.svg?react";
import bgImage from "../assets/addImage.jpg";

const Footer = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat mt-12 md:mt-20 grayscale"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full bg-black/65 px-6 sm:px-12 md:px-20 py-12 md:py-16">
        
        {/* Main Columns wrapper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6 justify-between">
          
          {/* Left Column Description */}
          <div className="max-w-xs">
            <Logo className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] text-white" />
            <p className="text-white/80 text-[15px] md:text-[17px] leading-relaxed mt-4 md:mt-6">
              Discover a world of exquisite fragrances and luxury essentials. Curated for the discerning individual.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-white text-[24px] md:text-[32px] font-medium">Company</h3>
            <div className="grid grid-cols-2 gap-2 mt-4 md:mt-6 text-white/80 text-[14px] md:text-[16px]">
              <span>About</span>
              <span>Contact</span>
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
              <span>Return Policy</span>
              <span>Refund Policy</span>
            </div>
          </div>

          {/* Newsletter section */}
          <div className="w-full max-w-md md:col-span-2 lg:col-span-1">
            <h3 className="text-white text-[24px] md:text-[32px] font-medium">Newsletter</h3>
            <p className="text-white/70 text-[15px] mt-2">Stay updated with our latest arrivals and offers.</p>

            <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-6">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full h-[50px] md:h-[56px] bg-[#171717] rounded-xl px-5 text-white outline-none text-sm"
              />
              <button className="w-full sm:w-[160px] h-[50px] md:h-[56px] rounded-full bg-white text-black font-medium shrink-0 text-sm md:text-base">
                Subscribe
              </button>
            </div>

            {/* Social Icons row links */}
            <div className="flex items-center gap-6 mt-6 text-white text-[20px]">
              <FiFacebook className="cursor-pointer hover:text-gray-300" />
              <FiInstagram className="cursor-pointer hover:text-gray-300" />
              <FiTwitter className="cursor-pointer hover:text-gray-300" />
              <FiLinkedin className="cursor-pointer hover:text-gray-300" />
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/20 mt-10 md:mt-14" />

        {/* Bottom Bar items row matching */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 md:mt-8 gap-4 text-center sm:text-left">
          <p className="text-white/70 text-[14px] md:text-[16px]">
            © 2026 Dilka Perfumes. All rights reserved.
          </p>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="text-white/80 text-[14px] md:text-[16px]">Payment Methods:</span>
            <div className="flex items-center gap-2">
              <div className="bg-white rounded px-2.5 py-1 text-black text-[11px] font-semibold">tabby</div>
              <div className="bg-white rounded px-2.5 py-1 text-black text-[11px] font-semibold">tamara</div>
              <div className="bg-white rounded px-2.5 py-1 text-black text-[11px] font-semibold">COD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;