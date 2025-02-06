"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
  use,
} from "react";

interface transactionProps {
  transactions: {
    id: string;
    title: string;
    amount: number;
  }[];
  report: {
    sumin: number;
    sumex: number;
    result: number;
  };
}
// 🎯 กำหนด Type ของ State
interface GlobalStateType {
  transactions: transactionProps["transactions"];
  setTransactions: Dispatch<SetStateAction<transactionProps["transactions"]>>;
  setTogglereport: Dispatch<SetStateAction<boolean>>;
  setToggleform: Dispatch<SetStateAction<boolean>>;
  setToggleeditform: Dispatch<SetStateAction<boolean>>;
  setToggletrans: Dispatch<SetStateAction<boolean>>;
  togglereport: boolean;
  toggletrans: boolean;
  toggleform: boolean;
  toggleeditform:boolean;
  report: transactionProps["report"];
  setReport: Dispatch<SetStateAction<transactionProps["report"]>>;
  idforedit:string
  setIdforedit:Dispatch<SetStateAction<string>>
}

// ➜ สร้าง Context
const GlobalStateContext = createContext<GlobalStateType | undefined>(
  undefined
);

// ➜ สร้าง Provider
export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<
    transactionProps["transactions"]
  >([]);
  const [togglereport, setTogglereport] = useState<boolean>(false);
  const [toggleform, setToggleform] = useState<boolean>(false);
  const [toggletrans, setToggletrans] = useState<boolean>(false);
  const [toggleeditform, setToggleeditform] = useState<boolean>(false);
  const [idforedit,setIdforedit] = useState<string>("")
  const [report, setReport] = useState<transactionProps["report"]>({
    sumin: 0,
    sumex: 0,
    result: 0,
  });

  useEffect(() => {
    const sumin = transactions
      .filter((item) => item.amount > 0)
      .map((e) => e.amount)
      .reduce((prev, cur) => prev + cur, 0);
    //
    const sumex = transactions
      .filter((item) => item.amount < 0)
      .map((e) => e.amount)
      .reduce((prev, cur) => prev + cur, 0);

    //
    setReport({
      sumin: sumin,
      sumex: sumex,
      result: sumin + sumex,
    });

    console.log(transactions);
    
  }, [transactions]);
  return (
    <GlobalStateContext.Provider
      value={{
        report,
        setReport,
        transactions,
        setTransactions,
        setTogglereport,
        setToggleform,
        setToggleeditform,
        setToggletrans,
        togglereport,
        toggleform,
        toggleeditform,
        toggletrans,
        setIdforedit,
        idforedit
      }}
    >
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
