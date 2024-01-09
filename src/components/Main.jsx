import React from "react";

const Main = () => {
  return (
    <div className='relative h-screen lg:h-[50vh] w-full flex justify-center items-center bg-[url("/background.jpeg")] bg-no-repeat bg-cover bg-center'>
      <div className="absolute top-0 left-0 h-full w-full bg-black/40" />
      <div className="z-10 px-2">
        <h1
          style={{ fontFamily: "Great Vibes", cursive: true }}
          className="text-5xl text-white text-center font-black tracking-widest"
        >
          RSVP - Joy & Loonie
        </h1>
        <div className="w-[120px] h-[10px] bg-yellow-600 my-4 rounded-full mx-auto"></div>
        <p className="text-xl text-white font-semibold text-center mb-4">
          January 15, 2023 @ 1:30 PM
        </p>
        <p className="text-xl text-white text-center">
          Newlife Catbalogan City
        </p>
      </div>
    </div>
  );
};

export default Main;
