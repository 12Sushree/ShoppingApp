import React from "react";

const Cards = ({ product }) => {
  const description = product.description.slice(0, 20);
  return (
    <div className="bg-black p-3 flex flex-col text-white hover:scale-105 duration-200">
      <div className="h-48 overflow-hidden ">
        <img src={product.image} className="h-full w-full object-contain" />
      </div>
      <div>
        <h1 className="font-bold text-lg">{product.title}</h1>
        <h2 className="text-sm text-gray-400">{description}...</h2>
      </div>
      <div className="mt-2 font-semibold text-green-400">$ {product.price}</div>
    </div>
  );
};

export default Cards;
