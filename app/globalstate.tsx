'use client'
import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from "react";

interface transactionProps {
  transactions:{
    id:string
    title:string,
    amount:number,
  }[]
}
// 🎯 กำหนด Type ของ State
interface GlobalStateType {
 transactions:transactionProps["transactions"]
 setTransactions:Dispatch<SetStateAction<transactionProps["transactions"]>>
 setTogglereport:Dispatch<SetStateAction<boolean>>
 setToggleform:Dispatch<SetStateAction<boolean>>
 setToggletrans:Dispatch<SetStateAction<boolean>>
 togglereport:boolean
 toggletrans:boolean
 toggleform:boolean
}

// ➜ สร้าง Context
const GlobalStateContext = createContext<GlobalStateType | undefined>(undefined);

// ➜ สร้าง Provider
export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<transactionProps["transactions"]>([]);
  const [togglereport, setTogglereport] = useState<boolean>(false);
  const [toggleform, setToggleform] = useState<boolean>(false);
  const [toggletrans, setToggletrans] = useState<boolean>(false);
  
  return (
    <GlobalStateContext.Provider value={{ transactions, setTransactions, setTogglereport , setToggleform, setToggletrans,togglereport,toggleform,toggletrans}}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// ➜ สร้าง Hook เพื่อใช้งานง่ายขึ้น
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
