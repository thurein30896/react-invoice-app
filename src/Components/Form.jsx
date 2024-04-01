import React, { useContext, useRef } from "react";
import { DataContext } from "../Contexts/DataContext";

const Form = () => {
  const {products,addRecord} = useContext(DataContext);

  const formRef = useRef();
  const handleAddBtn = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current)
    const product = products.find((product) => product.id === parseInt(formData.get("productName")));
    const cost = formData.get("productQuantity") * product.price;

    const newRecord = {
      id : Date.now(),
      productId : parseInt(formData.get("productName")),
      name : product.name,
      price : product.price,
      quantity : parseInt(formData.get("productQuantity")),
      cost : cost
    }
    // console.log(newRecord);
    addRecord(newRecord);
    formRef.current.reset();
  }

  return (
    <section className="mb-10 block print:hidden">
      <form ref={formRef} action="#" id="createForm">
        <div className="grid grid-cols-3 gap-3 items-end">
          <div>
            <label
              htmlFor="productSelect"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Your Product
            </label>
            <select
              id="productSelect"
              name="productName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              {products.map((product) => <option key={product.id} value={product.id}>{product.name}</option>)}
            </select>
          </div>
          <div>
            <label
              htmlFor="quantityInput"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Quantity
            </label>
            <input
              type="number"
              name="productQuantity"
              id="quantityInput"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div >
            <button
            onClick={handleAddBtn}
              id="addBtn"
              type="submit"
              className="font-heading w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 active:scale-95 duration-200"
            >
              Buy
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
