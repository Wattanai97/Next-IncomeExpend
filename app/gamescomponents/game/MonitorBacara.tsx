import React, { useEffect, useState, MouseEvent } from "react";
import { useGlobalState } from "@/app/globalstate";
import Image from "next/image";

const MonitorBacara = () => {
  const {
    randomnum,
    playerimgcard,
    setPlayerimgcard,
    bangerimgcard,
    setBangerimgcard,
    playerpoint,
    setPlayerpoint,
    bangerpoint,
    setBangerpoint,
  } = useGlobalState();

  // const cardData = Array.from({ length: 52 }, (_, i) => ({
  //   img: `/img/${String.fromCharCode(97 + Math.floor(i / 13))}${
  //     (i % 13) + 1
  //   }.jpg`,
  //   point: [1, 10, 10, 10].includes((i % 13) + 1) ? 10 : (i % 13) + 1,
  // }));

  // 🃏 ปรับปรุงโครงสร้างให้ตรงกับไพ่ของคุณ
  const suits = ["a", "b", "c", "d"];
  const cardData: Record<number, { img: string; point: number }> = {};

  let index = 1;
  for (let suit of suits) {
    for (let rank = 1; rank <= 13; rank++) {
      cardData[index] = {
        img: `/img/${suit}${rank}.jpg`,
        point: rank > 9 ? 0 : rank, // ไพ่ 10, J, Q, K = 0
      };
      index++;
    }
  }

  const [playerCardsDrawn, setPlayerCardsDrawn] = useState(0);
  const [bangerCardsDrawn, setBangerCardsDrawn] = useState(0);
  const [textendgame, setTextendgame] = useState("เกมส์จบแล้วครับ");
  const resetGame = () => {
    setPlayerCardsDrawn(0);
    setBangerCardsDrawn(0);
    setPlayerpoint(0);
    setBangerpoint(0);
    setPlayerimgcard([]);
    setBangerimgcard([]);
  };

  const drawCard = async (isPlayer: boolean) => {
    const num = randomnum();
    const card = cardData[num];
    if (!card) return;

    if (isPlayer) {
      setPlayerimgcard((prev) => [...prev, card.img]);
      setPlayerpoint((prev) => (prev + card.point) % 10);
      setPlayerCardsDrawn((prev) => prev + 1);
    } else {
      setBangerimgcard((prev) => [...prev, card.img]);
      setBangerpoint((prev) => (prev + card.point) % 10);
      setBangerCardsDrawn((prev) => prev + 1);
    }
  };

  const Alertendgame = async () => {
    alert(textendgame);
  };
  const gamestart = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert("เกมส์จะเริ่มใน 3 วิ...");
    resetGame();
    await new Promise((res) => setTimeout(res, 3000));

    await drawCard(true);
    await new Promise((res) => setTimeout(res, 3000));
    await drawCard(false);
    await new Promise((res) => setTimeout(res, 3000));
    await drawCard(true);
    await new Promise((res) => setTimeout(res, 3000));
    await drawCard(false);
  };

  const drawExtraCardForPlayer = async () => {
    await new Promise((res) => setTimeout(res, 1000));
    await drawCard(true);
    await new Promise((res) => setTimeout(res, 3000));
    await drawCard(false);
    await new Promise((res) => setTimeout(res, 2000));
    alert("เกมส์จบแล้วครับ");
    // resetGame();
  };

  useEffect(() => {
    if (bangerCardsDrawn === 2 && playerCardsDrawn === 2 && playerpoint <= 3) {
      setTimeout(drawExtraCardForPlayer, 1000);
    }
    //
    if (bangerCardsDrawn === 2 && playerCardsDrawn === 2 && playerpoint > 3) {
      setTimeout(Alertendgame, 1000);
    }
  }, [playerpoint, playerCardsDrawn, bangerCardsDrawn]);

  return (
    <div>
      <div className="mainMonitor-component bg-black border-2 border-gray-500 rounded-md xxs:h-[300px] xxs:w-[230px] xs:w-[280px]">
        <p className="text-center p-2 m-2 text-green-500 font-bold">
          Monitor-Bacara-Game
        </p>
        <div className="HeadName flex justify-between ...">
          {playerimgcard.length > 0 && (
            <span className="text-blue-600 xxs:text-lg font-semibold ps-7">
              Player
            </span>
          )}
          {bangerimgcard.length > 0 && (
            <span className="text-red-600 xxs:text-lg font-semibold pe-7">
              Banger
            </span>
          )}
        </div>

        <div className="maincard grid grid-cols-2 xxs:px-0.5">
          {[playerimgcard, bangerimgcard].map((cards, idx) => (
            <div key={idx} className={idx === 0 ? "playercard" : "bangercard"}>
              <div className="grid grid-cols-2 xxs:mx-0.5">
                {cards.slice(0, 2).map((img, i) => (
                  <Image
                    key={i}
                    width={500}
                    height={600}
                    src={img}
                    className="w-40 h-20"
                    alt="Card"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="Card3 grid grid-cols-2 ">
          {[playerimgcard[2], bangerimgcard[2]].map((img, i) =>
            img ? (
              <Image
                key={i}
                width={500}
                height={600}
                src={img}
                className="xxs:ms-7 xxs:my-0 xxs:py-0 w-14 h-22 rotate-90"
                alt="Card"
              />
            ) : null
          )}
        </div>
        {playerCardsDrawn > 1 ? (
          <div className="HeadPoint flex justify-between ">
            <span className="text-blue-600 text-1xl xxs:ps-10">
              {playerpoint} : P
            </span>

            {bangerCardsDrawn > 1 ? (
              <span className="text-red-600 text-1xl xxs:pe-10">
                {bangerpoint} : P
              </span>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="btn flex justify-center">
        <button
          onClick={gamestart}
          className="bg-violet-700 text-white px-4 w-48 py-2 rounded"
        >
          เริ่มเกมส์
        </button>
      </div>
    </div>
  );
};

export default MonitorBacara;
