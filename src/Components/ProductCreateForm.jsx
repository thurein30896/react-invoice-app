import React, { useContext, useRef } from "react";
import { DataContext } from "../Contexts/DataContext";
import Swal from "sweetalert2"

const ProductCreateForm = () => {
    const {addProduct} = useContext(DataContext);
    const formRef = useRef();
    const handleClick = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const newProduct = {
            id : Date.now(),
            name : formData.get("new_product_name"),
            price : formData.get("new_product_price")
        }

        const Toast = Swal.mixin({
            toast: true,
            position: "bottom-start",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Product Add Successfully"
          });
        addProduct(newProduct);
        formRef.current.reset();
    }
  return (
    <form ref={formRef} id="newProductForm">
      <div>
        <div>
          <label
            htmlFor="newProductName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            New Product Name
          </label>
          <input
            type="text"
            id="newProductName"
            name="new_product_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-end gap-2">
          <div className="flex-grow">
            <label
              htmlFor="newProductPrice"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Price
            </label>
            <input
              type="number"
              id="newProductPrice"
              name="new_product_price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <button
            onClick={handleClick}
            className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProductCreateForm;
