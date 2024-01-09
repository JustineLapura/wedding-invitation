import React from "react";

const Confirmation = () => {
  return (
    <div className="w-full px-8 py-10 bg-yellow-100 flex flex-col">
      <p className="text-lg font-bold text-center leading-8 mb-4 lg:text-sm">
        PLEASE CLICK THIS BUTTON FOR YOUR CONFIRMATION OF ATTENDANCE SO WE CAN
        RESERVE A SEAT FOR YOU,
      </p>
      <p className="text-lg font-bold text-center leading-8 lg:text-sm">
        KINDLY RESPOND BY 10 JANUARY 2023, THANK YOU :)
      </p>
      <button
        style={{ fontFamily: "Playfair Display, serif" }}
        className="w-full max-w-[900px] mx-auto  border rounded py-2 mt-4 font-semibold border-yellow-500 bg-yellow-50 tracking-wider text-lg"
      >
        RVSP CONFIRMATION
      </button>
    </div>
  );
};

export default Confirmation;
