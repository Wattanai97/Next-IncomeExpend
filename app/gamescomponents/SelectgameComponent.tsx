// 'use client'
import React from "react";
import { Dropdown } from "flowbite-react";
import Link from "next/link";
const SelectgameComponent = () => {
  return (
    <div>
      <Dropdown label="SelectGame" size="md" className="font-bold text-lg">
        <Dropdown.Item className="text-lg font-bold italic">
          Bacara_Game
        </Dropdown.Item>
        <Dropdown.Item className="text-lg font-bold italic">
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
