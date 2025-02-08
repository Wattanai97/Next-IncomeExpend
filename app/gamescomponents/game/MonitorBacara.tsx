import React, { useEffect, useState, MouseEvent } from "react";
import { useGlobalState } from "@/app/globalstate";

const MonitorBacara = () => {
  const randomnum = useGlobalState().randomnum;

  const [playerimgcard1, setPlayerimgcard1] = useState<string>("");
  const [playerimgcard2, setPlayerimgcard2] = useState<string>("");
  const [bangerimgcard1, setBangerimgcard1] = useState<string>("");
  const [bangerimgcard2, setBangerimgcard2] = useState<string>("");
  const [playerpointcard1, setPlayerpointcard1] = useState<number>(0);
  const [playerpointcard2, setPlayerpointcard2] = useState<number>(0);
  const [bangerpointcard1, setBangerpoincard1] = useState<number>(0);
  const [bangerpointcard2, setBangerpoincard2] = useState<number>(0);
  //
  const cardData: Record<number, { img: string; point: number }> = {
    1: { img: "/img/a1.jpg", point: 1 },
    2: { img: "/img/a2.jpg", point: 2 },
    3: { img: "/img/a3.jpg", point: 3 },
    4: { img: "/img/a4.jpg", point: 4 },
    5: { img: "/img/a5.jpg", point: 5 },
    6: { img: "/img/a6.jpg", point: 6 },
    7: { img: "/img/a7.jpg", point: 7 },
    8: { img: "/img/a8.jpg", point: 8 },
    9: { img: "/img/a9.jpg", point: 9 },
    10: { img: "/img/a10.jpg", point: 0 },
    11: { img: "/img/a11.jpg", point: 0 },
    12: { img: "/img/a12.jpg", point: 0 },
    13: { img: "/img/a13.jpg", point: 0 },
    14: { img: "/img/b1.jpg", point: 1 },
    15: { img: "/img/b2.jpg", point: 2 },
    16: { img: "/img/b3.jpg", point: 3 },
    17: { img: "/img/b4.jpg", point: 4 },
    18: { img: "/img/b5.jpg", point: 5 },
    19: { img: "/img/b6.jpg", point: 6 },
    20: { img: "/img/b7.jpg", point: 7 },
    21: { img: "/img/b8.jpg", point: 8 },
    22: { img: "/img/b9.jpg", point: 9 },
    23: { img: "/img/b10.jpg", point: 0 },
    24: { img: "/img/b11.jpg", point: 0 },
    25: { img: "/img/b12.jpg", point: 0 },
    26: { img: "/img/b13.jpg", point: 0 },
    27: { img: "/img/c1.jpg", point: 1 },
    28: { img: "/img/c2.jpg", point: 2 },
    29: { img: "/img/c3.jpg", point: 3 },
    30: { img: "/img/c4.jpg", point: 4 },
    31: { img: "/img/c5.jpg", point: 5 },
    32: { img: "/img/c6.jpg", point: 6 },
    33: { img: "/img/c7.jpg", point: 7 },
    34: { img: "/img/c8.jpg", point: 8 },
    35: { img: "/img/c9.jpg", point: 9 },
    36: { img: "/img/c10.jpg", point: 0 },
    37: { img: "/img/c11.jpg", point: 0 },
    38: { img: "/img/c12.jpg", point: 0 },
    39: { img: "/img/c13.jpg", point: 0 },
    40: { img: "/img/d1.jpg", point: 1 },
    41: { img: "/img/d2.jpg", point: 2 },
    42: { img: "/img/d3.jpg", point: 3 },
    43: { img: "/img/d4.jpg", point: 4 },
    44: { img: "/img/d5.jpg", point: 5 },
    45: { img: "/img/d6.jpg", point: 6 },
    46: { img: "/img/d7.jpg", point: 7 },
    47: { img: "/img/d8.jpg", point: 8 },
    48: { img: "/img/d9.jpg", point: 9 },
    49: { img: "/img/d10.jpg", point: 0 },
    50: { img: "/img/d11.jpg", point: 0 },
    51: { img: "/img/d12.jpg", point: 0 },
    52: { img: "/img/d13.jpg", point: 0 },
  };
  //
  const gamestart = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert(" เกมส์จะเริ่มให้ 3 วิ ");
    setTimeout(async () => {
      const num = await randomnum();
      const card = cardData[num];
      if (card) {
        setPlayerimgcard1(card.img);
        setPlayerpointcard2(card.point);
      }
      console.log(num);
    }, 3000);
  };

  useEffect(() => {
    console.log(`img : ${playerimgcard1}`);
    console.log(`point : ${playerpointcard1}`);
  }, [playerimgcard1, playerpointcard1]);

  return (
    <div>
      <div
        className="
mainMonitor-component
 bg-black border-2 border-gray-500 rounded-md xxs:w-[250px] xs:w-[330px] sm:w-[550px] md:w-[830px] xxs:h-[320px] xs:h-[390px] sm:h-[490px] xs:mx-3 my-4"
      >
        <p className="text-center p-4 m-4 text-green-500 font-bold">
          Monitor-Bacara-Game
        </p>
        {playerimgcard1.trim().length !== 0 && (
          <div className="HeadName flex justify-between xxs:mx-2 xs:mx-2 sm:mx-20 md:mx-32 xxs:my-4">
            <div className="xxs:mx-0">
              <span className="text-blue-600 text-2xl xxs:ps-8 xxs:font-medium xxs:text-sm md:text-2xl md:font-bold xxs:m-0 xs:ms-3 xs:text-xl xs:font-bold sm:ms-2 md:ms-2 ">
                Player
              </span>
            </div>
            <div className="xxs:mx-0">
              <span className="text-red-600 text-2xl xxs:pe-8 xxs:font-medium xxs:text-sm md:text-2xl  md:font-bold xxs:m-0 xs:me-3 xs:text-xl xs:font-bold sm:me-2 md:me-2 ">
                Banger
              </span>
            </div>
          </div>
        )}
        <div className="maincard flex justify-between xxs:mx-0 xs:mx-2 sm:mx-8 md:mx-10 mb-2">
          {/*  */}
          <div className="playercard flex xxs:mx-1 xs:mx-2.5 sm:mx-10 mx-16">
            <span className="PlayerCard1 xxs:mx-0.5">
              {playerimgcard1.trim().length !== 0 && (
                <img
                  src={playerimgcard1}
                  className="xxs:w-40 xs:w-44 sm:w-44 md:w-32 sm:h-32 md:h-48"
                  alt="Loading..."
                />
              )}
            </span>
            <span className="PlayerCard2">
              {playerimgcard2.trim().length !== 0 && (
                <img
                  src={playerimgcard2}
                  className="xxs:w-40 xs:w-44 sm:w-44 md:w-32 sm:h-32 md:h-48"
                  alt="Loading..."
                />
              )}
            </span>
          </div>
          <div className="bangercard flex xxs:mx-1 xs:mx-2.5 sm:mx-10 mx-16">
            <span className="BangerCard1 ">
              {bangerimgcard1.trim().length !== 0 && (
                <img
                  src={bangerimgcard1}
                  className="xxs:w-40 xs:w-44 sm:w-44 md:w-32 sm:h-32 md:h-48"
                  alt="Loading..."
                />
              )}
            </span>
            <span className="BangerCard2 xxs:mx-0.5">
              {bangerimgcard2.trim().length !== 0 && (
                <img
                  src={bangerimgcard2}
                  className="xxs:w-40 xs:w-44 sm:w-44 md:w-32 sm:h-32 md:h-48"
                  alt="Loading..."
                />
              )}
            </span>
          </div>
        </div>
        {/*  */}
        <div className="HeadPoint flex justify-between xxs:mx-2 xs:mx-2 sm:mx-20 md:mx-32 xxs:my-4">
          {playerimgcard1.trim().length !== 0 ||
            (playerimgcard2.trim().length !== 0 && (
              <div className="xxs:ms-10 xs:ms-8">
                <span className="text-blue-600 text-2xl xxs:ps-0 xxs:font-medium xxs:text-sm md:text-2xl md:font-bold xxs:m-0 xs:ms-3 xs:text-xl xs:font-bold sm:ms-3 md:ms-3">
                  Point
                </span>
              </div>
            ))}
          {/*  */}
          {playerimgcard1.trim().length !== 0 ||
            (playerimgcard2.trim().length !== 0 && (
              <div className="xxs:me-10 xs:me-8">
                <span className="text-red-600 text-2xl xxs:pe-0 xxs:font-medium xxs:text-sm md:text-2xl md:font-bold xxs:m-0 xs:me-3 xs:text-xl xs:font-bold sm:me-3 md:ms-3">
                  Point
                </span>
              </div>
            ))}
          {/*  */}
        </div>
      </div>
      <div className="btn flex justify-center">
        <button
          type="button"
          onClick={gamestart}
          className="bg-violet-700 text-white px-4 w-48 text-center py-2 rounded hover:border-2 hover:boder-white"
        >
          เริ่มเกมส์
        </button>
      </div>
    </div>
  );
};

export default MonitorBacara;
