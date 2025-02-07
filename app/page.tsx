"use client";
import Image from "next/image";
import { useGlobalState } from "./globalstate";
import DropdownComponent from "./components/DropdownComponent";
import ReportComponent from "./components/ReportComponent";
import FormComponent from "./components/FormComponent";
import TransactionsComponent from "./components/TransactionsComponent";
import EditformComponent from "./components/EditformComponent";
export default function Home() {
  const { togglereport, toggleform, toggletrans, toggleeditform } =
    useGlobalState();

  return (
    <div className="mx-4 xs:mx-6 ">
      <div className="header my-4">
        <p className="text-2xl font-bold xs:text-2xl md:text-4xl text-center">Income Expend App</p>
      </div>
      <div className="header flex justify-center text-4xl font-bold my-4">
        <DropdownComponent />
      </div>
      <div className="header flex justify-center text-4xl font-bold mt-4 mb-1">
        {!togglereport && <ReportComponent />}
      </div>
      <div className="header flex justify-center text-4xl font-bold my-1">
        {!toggleform && <FormComponent />}
      </div>
      <div className="header flex justify-center text-4xl font-bold my-1">
        {toggleeditform && <EditformComponent />}
      </div>
      <div className="header flex justify-center text-4xl font-bold my-1">
        {!toggletrans && <TransactionsComponent />}
      </div>
    </div>
  );
}
