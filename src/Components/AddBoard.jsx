import React from "react";
import AddImage from "../assets/addImage.jpg";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.png";

const AddBoard = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden shadow-sm"
      style={{ backgroundImage: `url(${AddImage})` }}
    >
      <div className="w-full h-full bg-black/60 p-4 sm:p-8">

        <div className="flex items-center justify-center w-full pb-4 sm:pb-8">
          <h1 className="text-sm sm:text-2xl font-extrabold bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent">
            www.Dilka Center.com
          </h1>
        </div>

        {/* Images Display layout row adjusting image counts based on device size breakpoints */}
        <div className="flex items-center w-full gap-3 sm:gap-8 justify-center">
          <div className="flex-1 max-w-[120px]">
            <img src={img1} alt="" className="aspect-[2/4] rounded-full object-cover w-full" />
          </div>
          <div className="flex-1 max-w-[120px]">
            <img src={img2} alt="" className="aspect-[2/4] rounded-full object-cover w-full" />
          </div>
          <div className="flex-1 max-w-[120px]">
            <img src={img3} alt="" className="aspect-[2/4] rounded-full object-cover w-full bg-gradient-to-r from-[#263A51] via-[#427AB8] to-[#263A51]" />
          </div>
          <div className="hidden sm:block flex-1 max-w-[120px]">
            <img src={img4} alt="" className="aspect-[2/4] rounded-full object-cover w-full" />
          </div>
          <div className="hidden md:block flex-1 max-w-[120px]">
            <img src={img5} alt="" className="aspect-[2/4] rounded-full object-cover w-full bg-gradient-to-r from-[#230401] via-[#500707] to-[#230401]" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full mt-4 sm:mt-6 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent">
            Dilka Center
          </h1>
          <p className="text-[11px] sm:text-[14px] text-white mt-1">Every smell brings back a feeling.</p>
        </div>
      </div>
    </div>
  );
};

export default AddBoard;