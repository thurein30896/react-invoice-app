import React from "react";

const Product = ({product:{id,name,price}}) => {

  return (
    <div className="border border-gray-200 rounded-lg p-3 flex justify-between items-center mb-2 shadow-pink-100 shadow-md">
      <p className="product-name">{name}</p>
      <p className="product-price">{price}</p>
    </div>
  );
};

export default Product;
