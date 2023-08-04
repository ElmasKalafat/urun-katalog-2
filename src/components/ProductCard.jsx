import React from "react";

const ProductCard = ({ prd }) => {
  return (
    <div className="hover:scale-105 transform transition duration-300 ease-out w-1/5 h-96 min-w-[300px] border rounded-xl m-2 flex flex-col item-center p-1 space-y-2 bg-gray-100">
      <img
        onClick={() => (window.location = `detail/${prd.id}`)}
        className="h-32 object-cover relative "
        src={prd?.image}
        alt=""
      />
      <div className="font-bold text-center mt-2 h-16">
        {(prd?.title).substring(0, 35)}...
      </div>
      <div className="text-center opacity-70 text-sm py-4">
        {(prd?.description).substring(0, 45)}..........
      </div>
      <div className="font-bold text-lg text-center">{prd?.price}</div>
      <button className="h-11 bg-[#87677be1] w-full p-2 rounded-xl font-light  text-white">
        Ekle
      </button>
    </div>
  );
};

export default ProductCard;
