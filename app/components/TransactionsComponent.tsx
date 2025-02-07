"use client";
import React, { useEffect } from "react";
import { useGlobalState } from "../globalstate";
import { Dropdown } from "flowbite-react";
const TransactionsComponent = () => {
  const {
    setToggleform,
    setToggleeditform,
    setTransactions,
    transactions,
    setIdforedit,
  } = useGlobalState();

  const hanlerDelete = async (id: string) => {
    const filteredtran = await transactions.filter((item) => item.id !== id);
    if (await !filteredtran) {
      return alert("Error : ไม่พบข้อมูลที่ต้องการลบ!");
    }
    const CF = await confirm("ยืนยันลบข้อมูลหรือไม่ ?");
    if (await !CF) {
      return;
    }
    await setTransactions(filteredtran);
    await setToggleeditform(false);
    alert("ลบข้อมูลสำเร็จ");
  };
  //
  const hanlerEdit = (id: string) => {
    setToggleeditform((prev) => !prev);
    setToggleform(true);
    setIdforedit(id);
  };

  if (!transactions || transactions.length == 0) {
    return (
      <p className="text-center text-2xl xs:text-2.5xl md:text-3xl font-bold text-white my-4">
        ไม่พบรายการของคุณ
      </p>
    );
  }

  return (
    <div className="Trans-Component my-4">
      <ul>
        {transactions.map((e) => (
          <li
            key={e.id}
            className={
              e.amount > 0
                ? "w-72 px-6 py-3 my-3 text-black font-medium text-lg flex justify-between rounded-md bg-white shadow-xl shadow-green-600/90 relative"
                : "w-72 px-6 py-3 my-3 text-black font-medium text-lg flex justify-between rounded-md bg-white shadow-xl shadow-red-600/90 relative"
            }
          >
            <span className="ps-2.5">{e.title}</span>
            <span className="pe-3.5">{e.amount}</span>
            <div className="drop-down absolute top-0 right-0">
              <Dropdown className="" size="xxs">
                <Dropdown.Item
                  onClick={() => {
                    hanlerEdit(e.id);
                  }}
                >
                  Edit
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    hanlerDelete(e.id);
                  }}
                >
                  Delete
                </Dropdown.Item>
              </Dropdown>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsComponent;
