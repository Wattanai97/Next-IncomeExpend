"use client";
import React from "react";
import { Dropdown } from "flowbite-react";
import { useGlobalState } from "../globalstate";
const DropdownComponent = () => {
    const {setTogglereport,setToggleform,setToggletrans} = useGlobalState()
    
  return (
    <div className="Trans-Component my-4">
      <Dropdown className="font text-lg" size="lg" label="Open Menu">
        <Dropdown.Item onClick={()=>{setTogglereport((prev:boolean)=>!prev)}}
         className="text-lg font-bold">Report</Dropdown.Item>
        <Dropdown.Item onClick={()=>{setToggleform((prev:boolean)=>!prev)}}
        className="text-lg font-bold">Form</Dropdown.Item>
        <Dropdown.Item onClick={()=>{setToggletrans((prev:boolean)=>!prev)}}
        className="text-lg font-bold">
          Tranasctions
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default DropdownComponent;
