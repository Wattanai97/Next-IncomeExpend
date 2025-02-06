import React, { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { useGlobalState } from "../globalstate";
import { v4 as uuidv4 } from "uuid";

const FormComponent = () => {
  const setTransactions = useGlobalState().setTransactions;
  //
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  //
  const changetitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const changeamount = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };
  const formsubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (title.trim().length === 0 || amount.trim().length === 0) {
      return alert("โปรดกรอกข้อมูลให้ครบถ้วน");
    }
    const newtransaction = await {
      id: uuidv4(),
      title: title,
      amount: Number(amount),
    };
    if (await newtransaction) {
      const CF = await confirm("ยืนยันการเพิ่มข้อมูล ?");
      if (CF) {
        await setTransactions((prev) => [...prev, newtransaction]);
        alert("เพิ่มรายการสำเร็จ");
        setAmount("");
        setTitle("");
      }
      return;
    }
    return;
  };
  return (
    <div className="Trans-Component my-4">
      <form
        onSubmit={formsubmit}
        className="max-w-md mx-auto bg-gray- p-6 w-72 rounded-md border-2 border-green-600"
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={changetitle}
            value={title}
            type="text"
            name="title"
            id="title"
            className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="title"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            ชื่อรายการ
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            value={amount}
            onChange={changeamount}
            type="text"
            name="amount"
            id="amount"
            className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="amount"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            จำนวนเงิน
          </label>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
