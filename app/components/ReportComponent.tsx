import React from "react";

const ReportComponent = () => {
  return (
    <div className="Report-Component my-4">
      <div className="bg-white border border-black flex justify-between w-72 ">
        <div className="income p-4  text-lg w-full text-center font-medium text-black border border-black">
          <p>เงินเข้า</p>
          <p>0B</p>
        </div>
        <div className="expend p-4 text-center w-full text-lg font-medium text-black border border-black">
          <p>เงินออก</p>
          <p>0B</p>
        </div>
      </div>
      <div className="w-72 border border-black bg-white">
        <div className="flex justify-between text-black text-lg py-2">
          <span className="ps-4 ">เงินคงเหลือ</span>
          <span className="pe-6">0B</span>
        </div>
      </div>
    </div>
  );
};

export default ReportComponent;
