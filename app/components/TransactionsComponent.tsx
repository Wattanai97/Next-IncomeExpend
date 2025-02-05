import React from "react";
import { useGlobalState } from "../globalstate";

const TransactionsComponent = () => {
  const transactions = useGlobalState().transactions;

  if (!transactions || transactions.length == 0) {
    return <p className="text-center text-4xl font-bold text-white my-4">ไม่พบรายการของคุณ</p>
  }
  return (
    <div className="Trans-Component my-4">
      <ul>
        {transactions.map((e) => (
          <li key={e.id}
            className={
              e.amount > 0
                ? "w-72 px-6 py-3 my-3 text-black font-medium text-lg flex justify-between rounded-md bg-white shadow-xl shadow-green-600/90"
                : "w-72 px-6 py-3 my-3 text-black font-medium text-lg flex justify-between rounded-md bg-white shadow-xl shadow-red-600/90"
            }
          >
            <span>{e.title}</span>
            <span>{e.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsComponent;
