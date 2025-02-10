"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
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
  transactions: transactionProps["transactions"]; // transactionProps["transactions"];
  setTransactions: Dispatch<SetStateAction<transactionProps["transactions"]>>;
  togglereport: boolean;
  setTogglereport: Dispatch<SetStateAction<boolean>>;
  toggletrans: boolean;
  setToggletrans: Dispatch<SetStateAction<boolean>>;
  toggleform: boolean;
  setToggleform: Dispatch<SetStateAction<boolean>>;
  toggleeditform: boolean;
  setToggleeditform: Dispatch<SetStateAction<boolean>>;
  toggleGamebacara: boolean;
  setToggleGamebacara: Dispatch<SetStateAction<boolean>>;
  toggleGamelight: boolean;
  setToggleGamelight: Dispatch<SetStateAction<boolean>>;
  report: transactionProps["report"];
  setReport: Dispatch<SetStateAction<transactionProps["report"]>>;
  idforedit: string;
  setIdforedit: Dispatch<SetStateAction<string>>;
  randomnum: () => number;
  playerimgcard: string[];
  setPlayerimgcard: Dispatch<SetStateAction<string[]>>;
  // playerimgcard2: string;
  // setPlayerimgcard2: Dispatch<SetStateAction<string>>;
  // playerimgcard3: string;
  // setPlayerimgcard3: Dispatch<SetStateAction<string>>;
  //
  // playerpointcard1: number;
  // setPlayerpointcard1: Dispatch<SetStateAction<number>>;
  // playerpointcard2: number;
  // setPlayerpointcard2: Dispatch<SetStateAction<number>>;
  // playerpointcard3: number;
  // setPlayerpointcard3: Dispatch<SetStateAction<number>>;
  playerpoint: number;
  setPlayerpoint: Dispatch<SetStateAction<number>>;
  // playerpoint2: number;
  // setPlayerpoint2: Dispatch<SetStateAction<number>>;
  //
  bangerimgcard: string[];
  setBangerimgcard: Dispatch<SetStateAction<string[]>>;
  // bangerimgcard2: string;
  // setBangerimgcard2: Dispatch<SetStateAction<string>>;
  // bangerimgcard3: string;
  // setBangerimgcard3: Dispatch<SetStateAction<string>>;
  //
  // bangerpointcard1: number;
  // setBangerpointcard1: Dispatch<SetStateAction<number>>;
  // bangerpointcard2: number;
  // setBangerpointcard2: Dispatch<SetStateAction<number>>;
  // bangerpointcard3: number;
  // setBangerpointcard3: Dispatch<SetStateAction<number>>;
  bangerpoint: number;
  setBangerpoint: Dispatch<SetStateAction<number>>;
  // bangerpoint2: number;
  // setBangerpoint2: Dispatch<SetStateAction<number>>;
}

// ➜ สร้าง Context
const GlobalStateContext = createContext<GlobalStateType | undefined>(
  undefined
);

// ➜ สร้าง Provider
export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<
    GlobalStateType["transactions"]
  >([]);
  const [togglereport, setTogglereport] = useState<boolean>(false);
  const [toggleform, setToggleform] = useState<boolean>(false);
  const [toggletrans, setToggletrans] = useState<boolean>(false);
  const [toggleeditform, setToggleeditform] = useState<boolean>(false);
  const [toggleGamebacara, setToggleGamebacara] = useState<boolean>(true);
  const [toggleGamelight, setToggleGamelight] = useState<boolean>(true);
  const [idforedit, setIdforedit] = useState<string>("");
  const [report, setReport] = useState<GlobalStateType["report"]>({
    sumin: 0,
    sumex: 0,
    result: 0,
  });
  //
  const [playerimgcard, setPlayerimgcard] = useState<string[]>([]);
  // const [playerimgcard2, setPlayerimgcard2] = useState<string>("");
  // const [playerimgcard3, setPlayerimgcard3] = useState<string>("");
  const [bangerimgcard, setBangerimgcard] = useState<string[]>([]);
  // const [bangerimgcard2, setBangerimgcard2] = useState<string>("");
  // const [bangerimgcard3, setBangerimgcard3] = useState<string>("");
  // const [playerpointcard1, setPlayerpointcard1] = useState<number>(0);
  // const [playerpointcard2, setPlayerpointcard2] = useState<number>(0);
  // const [playerpointcard3, setPlayerpointcard3] = useState<number>(0);
  // const [bangerpointcard1, setBangerpointcard1] = useState<number>(0);
  // const [bangerpointcard2, setBangerpointcard2] = useState<number>(0);
  // const [bangerpointcard3, setBangerpointcard3] = useState<number>(0);
  const [playerpoint, setPlayerpoint] = useState<number>(0);
  // const [playerpoint2, setPlayerpoint2] = useState<number>(0);
  // const [playerpoint2,setPlayerpoint2] = useState<number>(0);
  const [bangerpoint, setBangerpoint] = useState<number>(0);
  // const [bangerpoint2, setBangerpoint2] = useState<number>(0);
  // const [bangerpoint2,setBangerpoint2] = useState<number>(0);
  const randomnum = () => Math.floor(Math.random() * 52) + 1;

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
    //
  }, [transactions]);
  return (
    <GlobalStateContext.Provider
      value={{
        randomnum,
        report,
        setReport,
        transactions,
        setTransactions,
        togglereport,
        setTogglereport,
        toggleform,
        setToggleform,
        toggleeditform,
        setToggleeditform,
        toggletrans,
        setToggletrans,
        toggleGamebacara,
        setToggleGamebacara,
        toggleGamelight,
        setToggleGamelight,
        idforedit,
        setIdforedit,
        playerpoint,
        setPlayerpoint,
        playerimgcard,
        setPlayerimgcard,
        bangerimgcard,
        setBangerimgcard,
        bangerpoint,
        setBangerpoint,
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
