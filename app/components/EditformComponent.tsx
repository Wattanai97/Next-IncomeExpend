import React, { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { useGlobalState } from "../globalstate";
import { v4 as uuidv4 } from "uuid";

const EditformComponent = () => {
  const {
    setToggleeditform,
    setToggleform,
    transactions,
    idforedit,
    setTransactions,
    setIdforedit,
  } = useGlobalState();
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
    const CF = await confirm("ยืนยันแก้ไขข้อมูล?");
    if (await !CF) {
      return null;
    }
    await setTransactions((prevtrans) =>
      prevtrans.map((item) =>
        item.id === idforedit
          ? { ...item, title: title, amount: Number(amount) }
          : item
      )
    );
    alert("Update Successfully!");
    setTitle("");
    setAmount("");
    setIdforedit("");
    setToggleeditform(false);
    setToggleform(false);
  };
  return (
    <div className="Trans-Component my-4">
      <form
        onSubmit={formsubmit}
        className="max-w-md mx-auto bg-gray-900/100 px-6 py-4 w-72 rounded-md border-2 border-red-600"
      >
        <p className="text-center text-red-500 font-medium my-1 p-2">Edit</p>
        {transactions
          .filter((element) => element.id === idforedit)
          .map((e) => (
            <div key={e.id} className="mt-0.5 mb-6">
              <p className="text-start text-sm ">Old-Title : {e.title}</p>
              <p className="text-start text-sm ">Old-Amount : {e.amount}</p>
            </div>
          ))}
        <div className="relative z-0 w-full mb-5 group mt-2.5">
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

export default EditformComponent;
