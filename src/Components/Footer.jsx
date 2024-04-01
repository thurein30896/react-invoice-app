import React, { useContext } from "react";
import { DataContext } from "../Contexts/DataContext";

const Footer = () => {
  const {toggleDrawer} = useContext(DataContext);
  const printBtnHandler = () => {
    print();
  }

  return (
    <footer className="py-3 flex print:hidden gap-2 justify-end mt-auto">
      <button
        type="button"
        onClick={toggleDrawer}
        id="manageProductBtn"
        className="text-blue-700 border border-blue-700 hover:bg-blue-300 hover:text-blue-800 hover:border-blue-300   font-medium rounded-lg text-xs px-3 py-2 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-300 active:scale-90 duration-200"
      >
        Manage Product
      </button>
      <button
        onClick={printBtnHandler}
        id="printBtn"
        className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800   dark:bg-blue-600 dark:hover:bg-blue-700 active:scale-90 duration-200"
      >
        Print
      </button>
    </footer>
  );
};

export default Footer;
