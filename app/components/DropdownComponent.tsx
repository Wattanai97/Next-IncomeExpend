// 'use client';
import React from "react";
import { Dropdown } from "flowbite-react";
import { useGlobalState } from "../globalstate";
import Link from "next/link";

const DropdownComponent = () => {
  const { setTogglereport, setToggleform, setToggletrans, setToggleeditform } =
    useGlobalState();
    const user:string = "Wattanai97"
    const id:number = 1

  return (
    <div className="Trans-Component my-2">
      <Dropdown className="text-lg" size="lg" label="Open Menu">
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
