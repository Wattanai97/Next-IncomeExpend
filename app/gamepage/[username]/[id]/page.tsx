
'use client';
import React, { FC } from "react";
import { useParams } from "next/navigation";
import SelectgameComponent from "@/app/gamescomponents/SelectgameComponent";
import MonitorBacara from "@/app/gamescomponents/game/MonitorBacara";

const bacarapage: FC = () => {
  const { username, id } = useParams();

  if (!id && !username) return <p>Loading...</p>; // ป้องกัน error ตอนโหลด

  return (
    <div className="">
      <div>
        <p className="text-center font-bold text-3xl text-white my-5 italic">
          GoodGame
        </p>
        <p className="text-center  my-3 text-white font-bold">
          {`Hello Username : ${username}  You id : ${id}`}
        </p>
      </div>
      {/*  */}
      <div className="Dropdown-selectgame-Component my-2 flex justify-center">
        <SelectgameComponent/>
      </div>
      {/*  */}
      <div className="Monitor-Bacara my-2.5 flex justify-center">
        <MonitorBacara/>
      </div>
    </div>
  );
};

export default bacarapage;
