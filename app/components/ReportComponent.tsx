"use client";
import React from "react";
import { useGlobalState } from "../globalstate";
const ReportComponent = () => {
  const report = useGlobalState().report;

  return (
    <div className="Report-Component my-4 ">
      <div className="bg-white border border-black flex justify-between w-72 rounded-md">
        <div className="income p-4  text-lg w-full text-center font-medium text-black border border-black relative">
          <p>เงินเข้า</p>
          <p>{report.sumin}฿</p>
        </div>
        <div className="expend p-4 text-center w-full text-lg font-medium text-black border border-black relative">
          <p>เงินออก</p>
          <p>{report.sumex}฿</p>
        </div>
      </div>
      <div className="w-72 border border-black bg-white rounded-md">
        <div className="flex justify-between text-black text-lg py-2">
          <span className="ps-4 font-medium">เงินคงเหลือ</span>
          <span className="pe-6 font-medium">{report.result}฿</span>
        </div>
      </div>
    </div>
  );
};

export default ReportComponent;
