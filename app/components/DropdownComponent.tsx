// 'use client';
import React, { useState, useEffect } from "react";
import { Dropdown } from "flowbite-react";
import { useGlobalState } from "../globalstate";
import Link from "next/link";

const DropdownComponent = () => {
  const { setTogglereport, setToggleform, setToggletrans, setToggleeditform } =
    useGlobalState();
  const [dropdownSize, setDropdownSize] = useState<"sm" | "xl" | "lg">("xl");
  const user: string = "Wattanai97";
  const id: number = 1;

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 250) {
        setDropdownSize("sm");
      } else if (window.innerWidth < 330) {
        setDropdownSize("lg");
      } else {
        setDropdownSize("xl");
      }
    };
    //
    updateSize(); // กำหนดค่าเริ่มต้น
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <div className="Trans-Component my-2">
      <Dropdown className="text-lg" size={dropdownSize} label="Open Menu">
        <Dropdown.Item
          onClick={() => {
            setTogglereport((prev: boolean) => !prev);
          }}
          className="text-lg font-bold"
        >
          Report
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setToggleform((prev: boolean) => !prev);
            setToggleeditform(false);
          }}
          className="text-lg font-bold"
        >
          Form
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setToggletrans((prev: boolean) => !prev);
          }}
          className="text-lg font-bold"
        >
          Tranasctions
        </Dropdown.Item>
        <Dropdown.Item className="text-lg font-bold">
          <div>
            <Link href={`/gamepage/${user}/${id}`}>Gamepage</Link>
          </div>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default DropdownComponent;
