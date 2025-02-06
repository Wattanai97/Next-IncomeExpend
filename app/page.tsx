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
    <>
      <div className="header flex justify-center text-4xl font-bold my-4">
        <p>Income Expend App</p>
      </div>
      <div className="header flex justify-center text-4xl font-bold my-4">
        <DropdownComponent />
      </div>
      <div className="header flex justify-center text-4xl font-bold my-4">
        {!togglereport && <ReportComponent />}
      </div>
      <div className="header flex justify-center text-4xl font-bold my-4">
        {!toggleform && <FormComponent />}
      </div>
      <div className="header flex justify-center text-4xl font-bold my-4">
        {toggleeditform && <EditformComponent />}
      </div>
      <div className="header flex justify-center text-4xl font-bold my-4">
        {!toggletrans && <TransactionsComponent />}
      </div>
    </>
  );
}
