import Image from "next/image";
import React from "react";

const Program = () => {
  return (
    <div className="w-full max-w-[1000px] mx-auto grid lg:grid-cols-2 gap-8 p-5 bg-yellow-100">
      <Image className="w-full" src="/wedding1.png" width={100} height={100} alt="wedding1" />
      <Image className="w-full" src="/wedding2.png" width={100} height={100} alt="wedding2" />
      <Image className="w-full" src="/wedding3.png" width={100} height={100} alt="wedding3" />
      <Image className="w-full" src="/wedding4.png" width={100} height={100} alt="wedding4" />
    </div>
  );
};

export default Program;
