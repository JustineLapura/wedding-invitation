import Image from "next/image";
import React from "react";

const ImageSlider = () => {
  return (
    <div className="w-full max-w-[1000px] mx-auto p-5 mt-8">
      <Image
        className="w-full"
        src="/wedding5.png"
        width={100}
        height={100}
        alt="image"
      />
    </div>
  );
};

export default ImageSlider;
