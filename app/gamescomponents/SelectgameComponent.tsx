// 'use client'
import React from "react";
import { Dropdown } from "flowbite-react";
import Link from "next/link";
import { useGlobalState } from "../globalstate";
const SelectgameComponent = () => {
  const {setToggleGamebacara,setToggleGamelight} = useGlobalState()

  return (
    <div>
      <Dropdown label="SelectGame" size="md" className="font-bold text-lg">
        <Dropdown.Item onClick={()=>{setToggleGamebacara((prev:boolean)=>!prev)
          setToggleGamelight(true)
        }} className="text-lg font-bold italic">
        Bacara_Game
        </Dropdown.Item>
        <Dropdown.Item onClick={()=>{setToggleGamelight((prev:boolean)=>!prev)
          setToggleGamebacara(true)
        }} className="text-lg font-bold italic">
          Light_Game
        </Dropdown.Item>
        <Dropdown.Item className="text-lg font-bold italic">
          <Link href="/gamepage/Wattanai97/1/reccord">Reccord</Link>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default SelectgameComponent;
