"use client";
import React, { FC } from "react";
import { useParams } from "next/navigation";
import SelectgameComponent from "@/app/gamescomponents/SelectgameComponent";
import MonitorBacara from "@/app/gamescomponents/game/MonitorBacara";
import MonitorLight from "@/app/gamescomponents/game/MonitorLight";
import { useGlobalState } from "@/app/globalstate";

const bacarapage: FC = () => {
  const { username, id } = useParams();
  const {toggleGamebacara,toggleGamelight} = useGlobalState();

  if (!id && !username) return <p>Loading...</p>; // ป้องกัน error ตอนโหลด

  return (
    <div className="">
      <div>
        <p className="text-center font-bold xxs:text-3xl  text-white my-5 italic">
          GoodGame
        </p>
        <div className="xxs:mx-3  xxs:text-start xs:text-center my-3 text-white font-bold">
          <p className="xxs:ps-8 xs:px-0">{`Username : ${username}  `}</p>
          <p className="xxs:ps-8 xs:px-0">{`You id : ${id}`}</p>
        </div>
      </div>
      {/*  */}
      <div className="Dropdown-selectgame-Component my-2 flex justify-center">
        <SelectgameComponent />
      </div>
      {/*  */}
      <div className={toggleGamebacara === true ? "hidden" : "Monitor-Bacara my-2.5 flex justify-center"}>
        {!toggleGamebacara && <MonitorBacara /> }
      </div>
      <div className="Monitor-Light my-2.5 flex justify-center">
        {!toggleGamelight && <MonitorLight /> }
      </div>
    </div>
  );
};

export default bacarapage;
