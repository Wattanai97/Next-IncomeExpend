"use client";
import React from "react";
import { Dropdown } from "flowbite-react";
import { useGlobalState } from "../globalstate";
const DropdownComponent = () => {
    const settogglereport = useGlobalState().setTogglereport;
    
  return (
    <div className="Trans-Component my-4">
      <Dropdown className="font text-lg" size="lg" label="Open Menu">
        <Dropdown.Item onClick={()=>{settogglereport((prev:boolean)=>!prev)}}
         className="text-lg font-bold">Report</Dropdown.Item>
        <Dropdown.Item className="text-lg font-bold">Form</Dropdown.Item>
        <Dropdown.Item className="text-lg font-bold">
          Tranasctions
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default DropdownComponent;
