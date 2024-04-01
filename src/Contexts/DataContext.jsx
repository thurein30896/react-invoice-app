import React, { createContext, useState } from 'react'

export const DataContext = createContext();

const DataContextProvider = ({children}) => {

  const [drawer,setDrawer] = useState(false);
  const toggleDrawer = () => {
    setDrawer(!drawer);
  }

  const [products,setProduct] = useState([
    { id: 1, name: 'Apple', price: 500 },
    { id: 2, name: 'Banana', price: 100 },
    { id: 3, name: 'Orange', price: 400 },
    { id: 4, name: 'Grapes', price: 800 },
  ])

  const addProduct = (newProduct) => {
      setProduct([...products,newProduct])
  }

  const [records,setRecords] = useState([]);

  const addRecord = (newRecord) => {
    const isExitedRecord = records.find((record) => record.productId === newRecord.productId);
    if(isExitedRecord){
      updateRecord(isExitedRecord.id,newRecord.quantity)
    }else{
      setRecords([...records,newRecord]);
    }
  }

  const deleteRecord = (id) => {
    setRecords(records.filter((record) => record.id != id));
  }

  const updateRecord = (id,quantity) => {
    setRecords(records.map((record) => {
      if(record.id === id){
        const newQuantity = record.quantity + quantity;
        const newCost = newQuantity * record.price;
        return {
          ...record,quantity : newQuantity,cost : newCost
        }
      }
      return record;
    }))
  }


  return (
    <DataContext.Provider value={{drawer,toggleDrawer,products,addProduct,records,addRecord,deleteRecord,updateRecord}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider