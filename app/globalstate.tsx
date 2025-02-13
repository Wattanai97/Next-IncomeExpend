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
  playerpoint: number;
  setPlayerpoint: Dispatch<SetStateAction<number>>;
  bangerimgcard: string[];
  setBangerimgcard: Dispatch<SetStateAction<string[]>>;
  bangerpoint: number;
  setBangerpoint: Dispatch<SetStateAction<number>>;
  team: string;
  setTeam: Dispatch<SetStateAction<string>>;
}

// ➜ สร้าง Context
const GlobalStateContext = createContext<GlobalStateType | undefined>(
  undefined
);

// ➜ สร้าง Provider
export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [team,setTeam] = useState<string>("")
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

  const [bangerimgcard, setBangerimgcard] = useState<string[]>([]);

  const [playerpoint, setPlayerpoint] = useState<number>(0);

  const [bangerpoint, setBangerpoint] = useState<number>(0);

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
        team,setTeam
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
