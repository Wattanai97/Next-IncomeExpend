'use client';
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
    <div className="xxs:mx-4 xs:mx-6 sm:mx-4">
      <div className="header mt-6">
        <p className="xxs:text-2xl font-bold xs:text-3xl sm:text-4xl text-center">Income Expend App</p>
      </div>
      <div className="header flex justify-center text-4xl font-bold my-2">
        <DropdownComponent />
      </div>
      <div className="header flex justify-center text-4xl font-bold mt-2 mb-1">
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
