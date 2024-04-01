import React, { useContext } from "react";
import { DataContext } from "../Contexts/DataContext";
import Product from "./Product";
import ProductCreateForm from "./ProductCreateForm";

const CreateDrawer = () => {
  const {drawer,toggleDrawer,products} = useContext(DataContext);



  return (
    <div
      id="drawer-right-example"
      className={`fixed top-0 right-0 z-40 h-screen shadow-md overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 ${!drawer && " translate-x-full"}`}

    >
      <div className=" p-3 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-700">Your Product</h1>
          <h4 className="text-md text-gray-400">Manage Product</h4>
        </div>
        <button
          type="button"
          onClick={toggleDrawer}
          className="p-2 rounded-lg bg-blue-100 text-blue-600 active:scale-75 duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div id="productGroup" className="px-3">
        {products.map((product) => <Product key={product.id} product={product} />)}
      </div>
      <div className="border-t-2 p-3">
        <ProductCreateForm/>
      </div>
    </div>
  );
};

export default CreateDrawer;
