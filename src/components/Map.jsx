import React from "react";

const Map = () => {
  return (
    <div className="flex flex-col justify-center items-center px-5">
      <iframe
        className="w-[99vw] lg:w-[80vw] h-[300px] my-6 px-5"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.462762901483!2d124.8632481740319!3d11.802828139425902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3309b55492d18b21%3A0x4629f631e6780022!2sNew%20Life%20Catbalogan!5e0!3m2!1sen!2sph!4v1704779590119!5m2!1sen!2sph"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <h1
        style={{ fontFamily: "Lora, serif", fontStyle: "italic" }}
        className="text-2xl font-bold text-yellow-600"
      >
        Newlife Center, Catbalogan City
      </h1>
      <p
        style={{ fontFamily: "Lora, serif" }}
        className="text-gray-600 text-lg mt-4"
      >
        Church Wedding Venue
      </p>
    </div>
  );
};

export default Map;
