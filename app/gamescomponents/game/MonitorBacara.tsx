import React, { useEffect, useState, MouseEvent } from "react";
import { useGlobalState } from "@/app/globalstate";
import Image from "next/image";

const MonitorBacara = () => {
  const {
    randomnum,
    playerimgcard1,
    playerimgcard2,
    playerimgcard3,
    playerpointcard1,
    setPlayerimgcard1,
    setPlayerimgcard2,
    setPlayerimgcard3,
    setPlayerpointcard1,
    playerpoint,
    setPlayerpoint,
    bangerimgcard1,
    bangerimgcard2,
    bangerimgcard3,
    bangerpointcard1,
    setBangerimgcard1,
    setBangerimgcard2,
    setBangerimgcard3,
    setBangerpointcard1,
    bangerpoint,
    setBangerpoint,
  } = useGlobalState();

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
    10: { img: "/img/a10.jpg", point: 10 },
    11: { img: "/img/a11.jpg", point: 10 },
    12: { img: "/img/a12.jpg", point: 10 },
    13: { img: "/img/a13.jpg", point: 10 },
    14: { img: "/img/b1.jpg", point: 1 },
    15: { img: "/img/b2.jpg", point: 2 },
    16: { img: "/img/b3.jpg", point: 3 },
    17: { img: "/img/b4.jpg", point: 4 },
    18: { img: "/img/b5.jpg", point: 5 },
    19: { img: "/img/b6.jpg", point: 6 },
    20: { img: "/img/b7.jpg", point: 7 },
    21: { img: "/img/b8.jpg", point: 8 },
    22: { img: "/img/b9.jpg", point: 9 },
    23: { img: "/img/b10.jpg", point: 10 },
    24: { img: "/img/b11.jpg", point: 10 },
    25: { img: "/img/b12.jpg", point: 10 },
    26: { img: "/img/b13.jpg", point: 10 },
    27: { img: "/img/c1.jpg", point: 1 },
    28: { img: "/img/c2.jpg", point: 2 },
    29: { img: "/img/c3.jpg", point: 3 },
    30: { img: "/img/c4.jpg", point: 4 },
    31: { img: "/img/c5.jpg", point: 5 },
    32: { img: "/img/c6.jpg", point: 6 },
    33: { img: "/img/c7.jpg", point: 7 },
    34: { img: "/img/c8.jpg", point: 8 },
    35: { img: "/img/c9.jpg", point: 9 },
    36: { img: "/img/c10.jpg", point: 10 },
    37: { img: "/img/c11.jpg", point: 10 },
    38: { img: "/img/c12.jpg", point: 10 },
    39: { img: "/img/c13.jpg", point: 10 },
    40: { img: "/img/d1.jpg", point: 1 },
    41: { img: "/img/d2.jpg", point: 2 },
    42: { img: "/img/d3.jpg", point: 3 },
    43: { img: "/img/d4.jpg", point: 4 },
    44: { img: "/img/d5.jpg", point: 5 },
    45: { img: "/img/d6.jpg", point: 6 },
    46: { img: "/img/d7.jpg", point: 7 },
    47: { img: "/img/d8.jpg", point: 8 },
    48: { img: "/img/d9.jpg", point: 9 },
    49: { img: "/img/d10.jpg", point: 10 },
    50: { img: "/img/d11.jpg", point: 10 },
    51: { img: "/img/d12.jpg", point: 10 },
    52: { img: "/img/d13.jpg", point: 10 },
  };
  //
  const [playerCardsDrawn, setPlayerCardsDrawn] = useState<number>(0);
  const [bangerCardsDrawn, setBangerCardsDrawn] = useState<number>(0);
  const SetStateToDefault = async () => {
    setPlayerCardsDrawn(0);
    setPlayerpoint(0);
    setBangerpoint(0);
    setPlayerimgcard1("");
    setPlayerimgcard2("");
    setPlayerimgcard3("");
    setBangerimgcard1("");
    setBangerimgcard2("");
    setBangerimgcard3("");
  };
  const gamestart = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert(" เกมส์จะเริ่มให้ 3 วิ ");
    setTimeout(async () => {
      const num = await randomnum();
      const card = await cardData[num];
      if (card) {
        setPlayerimgcard1(card.img);
        setPlayerpoint((prev) => (prev + card.point) % 10);
        setPlayerCardsDrawn((prev) => prev + 1);
        console.log(card.point);
      }
      setTimeout(async () => {
        const num = await randomnum();
        const card = cardData[num];
        if (card) {
          setBangerimgcard1(card.img);
          setBangerpoint((prev) => (prev + card.point) % 10);
          setBangerCardsDrawn((prev) => prev + 1);
        }
        setTimeout(async () => {
          const num = await randomnum();
          const card = cardData[num];
          if (card) {
            setPlayerimgcard2(card.img);
            setPlayerpoint((prev) => (prev + card.point) % 10);
            setPlayerCardsDrawn((prev) => prev + 1);
          }
          setTimeout(async () => {
            const num = await randomnum();
            const card = cardData[num];
            if (card) {
              setBangerimgcard2(card.img);
              setBangerpoint((prev) => (prev + card.point) % 10);
              setBangerCardsDrawn((prev) => prev + 1);
            }
          }, 3000);
        }, 3000);
      }, 3000);
    }, 3000);
    //
  };

  const drawExtraCardForPlayer = async () => {
    setTimeout(async () => {
      const num = await randomnum();
      const card = cardData[num];
      if (card) {
        setPlayerimgcard3(card.img);
        setPlayerpoint((prev) => (prev + card.point) % 10);
      }
      setTimeout(async () => {
        const num = await randomnum();
        const card = cardData[num];
        if (card) {
          setBangerimgcard3(card.img);
          setBangerpoint((prev) => (prev + card.point) % 10);
        }
        setTimeout(() => {
          SetStateToDefault();
          alert("เกมส์จบแล้วครับ");
        }, 2000);
      }, 3000);
    }, 1000);
  };

  useEffect(() => {
    if (playerCardsDrawn === 2) {
      if (playerpoint <= 3) {
        setTimeout(() => {
          console.log("จั่วไพ่ใบที่ 3 ให้ผู้เล่น...");
          drawExtraCardForPlayer();
        }, 3000);
      } else {
        console.log(`จบการทำงาน`);
      }
    }
    //
    // if (playerCardsDrawn === 2 && bangerCardsDrawn === 2 && playerpoint > 3) {
    //   console.log("ไม่มีการจั่วไพ่ใบที่ 3, คืนค่า state...");
    //   setTimeout(() => {
    //     SetStateToDefault();
    //     alert("เกมส์จบแล้วครับ");
    //   }, 5000);
    // }
  }, [playerpoint, bangerpoint, playerCardsDrawn, bangerCardsDrawn]);
  return (
    <div>
      <div
        className="
mainMonitor-component
 bg-black border-2 border-gray-500 rounded-md xxs:w-[250px] xs:w-[330px] sm:w-[550px] md:w-[830px] xxs:h-[320px] xs:h-[390px] sm:h-[490px] md:h-[600px] xs:mx-3 my-2"
      >
        <p className="text-center p-2 m-2 text-green-500 font-bold">
          Monitor-Bacara-Game
        </p>

        <div className="HeadName flex justify-between xxs:mx-2 xs:mx-2 sm:mx-20 md:mx-32 xxs:my-2">
          {playerimgcard1.trim().length !== 0 && (
            <div className="Player xxs:mx-0">
              <span className="text-blue-600 text-2xl xxs:ps-8 xxs:font-medium xxs:text-sm md:text-2xl md:font-bold xxs:m-0 xs:ms-3 xs:text-xl xs:font-bold sm:ms-2 md:ms-2 ">
                Player
              </span>
            </div>
          )}
          {bangerimgcard1.trim().length !== 0 && (
            <div className="Banger xxs:mx-0">
              <span className="text-red-600 text-2xl xxs:pe-8 xxs:font-medium xxs:text-sm md:text-2xl  md:font-bold xxs:m-0 xs:me-3 xs:text-xl xs:font-bold sm:me-2 md:me-2 ">
                Banger
              </span>
            </div>
          )}
        </div>

        <div className="maincard grid grid-cols-2 xxs:mt-0 xxs:my-0 xxs:pt-0 xxs:py-0 xs:mx-2 sm:mx-8 md:mx-10">
          {/*  */}
          <div className="playercard xxs:mx-0 xs:mx-2.5 sm:mx-10 mx-16 my-0">
            <div className="grid grid-cols-2">
              <div className="PlayerCard1 ">
                {playerimgcard1.trim().length !== 0 && (
                  <Image
                    width={500}
                    height={600}
                    src={playerimgcard1}
                    className="xxs:w-40 xs:w-44 sm:w-44 md:w-32 xxs:h-20 xs:h-24 sm:h-32 md:h-48 ease-in-out delay-150 duration-300 translate-x-1.5"
                    alt="Loading..."
                  />
                )}
              </div>
              <div className="PlayerCard2">
                {playerimgcard2.trim().length !== 0 && (
                  <Image
                    width={500}
                    height={600}
                    src={playerimgcard2}
                    className="xxs:w-40 xs:w-44 sm:w-44 md:w-32 xxs:h-20 xs:h-24 sm:h-32 md:h-48 ease-in-out delay-150 duration-300"
                    alt="Loading..."
                  />
                )}
              </div>
            </div>
          </div>
          <div className="bangercard xxs:mx-1 xs:mx-2.5 sm:mx-10 mx-16 my-0">
            <div className="grid grid-cols-2">
              <div className="BangerCard1 ">
                {bangerimgcard1.trim().length !== 0 && (
                  <Image
                    width={500}
                    height={600}
                    src={bangerimgcard1}
                    className="xxs:w-40 xs:w-44 sm:w-44 md:w-32 xxs:h-20 xs:h-24 sm:h-32 md:h-48 ease-in-out delay-150 duration-300 translate-x-1.5"
                    alt="Loading..."
                  />
                )}
              </div>
              <div className="BangerCard2 xxs:mx-0.5">
                {bangerimgcard2.trim().length !== 0 && (
                  <Image
                    width={500}
                    height={600}
                    src={bangerimgcard2}
                    className="xxs:w-40 xs:w-44 sm:w-44 md:w-32 xxs:h-20 xs:h-24 sm:h-32 md:h-48 ease-in-out delay-150 duration-300"
                    alt="Loading..."
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="Card3 xxs:grid xxs:grid-cols-2 xxs:ms-8 xs:ms-12 sm:m-0 md:mx-10 my-0 xxs:w-full">
          <div className="PlayerCard3 my-0 py-0 sm:ms-28">
            {playerimgcard3.trim().length !== 0 && (
              <Image
                width={500}
                height={600}
                src={playerimgcard3}
                className="xxs:w-14 xxs:h-22 xs:w-[62px] xs:h-22 sm:w-[80px] sm:h-32 md:w-32 md:h-48 ease-in-out delay-150 duration-300 rotate-90"
                alt="Loading..."
              />
            )}
          </div>
          <div className="BangerCard3 my-0 py-0 sm:ms-20 sm:ps-2">
            {bangerimgcard3.trim().length !== 0 && (
              <Image
                width={500}
                height={600}
                src={bangerimgcard3}
                className=" xxs:w-14 xxs:h-22 xs:w-[62px] xs:h-22 sm:w-[80px] sm:h-32 md:w-32 md:h-48 ease-in-out delay-150 duration-300 rotate-90"
                alt="Loading..."
              />
            )}
          </div>
        </div>
        {/*  */}
        <div className="HeadPoint flex justify-between xxs:mx-2 xs:mx-2 sm:mx-20 md:mx-32 xxs:my-4">
          {playerimgcard2.trim().length !== 0 && (
            <div className="xxs:ms-10 xs:ms-8">
              <span className="text-blue-600 text-1xl xxs:ps-0 xxs:font-medium xxs:text-sm md:text-2xl md:font-bold xxs:m-0 xs:ms-3 xs:text-xl xs:font-bold sm:ms-3 md:ms-3">
                {playerpoint} :
              </span>
              <span className="text-blue-600 text-1xl xxs:ps-0 xxs:font-medium xxs:text-sm md:text-2xl md:font-bold xxs:m-0 xs:ms-3 xs:text-xl xs:font-bold sm:ms-3 md:ms-3">
                P
              </span>
            </div>
          )}
          {/*  */}
          {bangerimgcard2.trim().length !== 0 && (
            <div className="xxs:me-10 xs:me-8">
              <span className="text-red-600  text-1xl xxs:pe-0 xxs:font-medium xxs:text-sm md:text-2xl md:font-bold xxs:m-0 xs:me-3 xs:text-xl xs:font-bold sm:me-3 md:ms-3">
                {bangerpoint} :
              </span>
              <span className="text-red-600  text-1xl xxs:pe-0 xxs:font-medium xxs:text-sm md:text-2xl md:font-bold xxs:m-0 xs:me-3 xs:text-xl xs:font-bold sm:me-3 md:ms-3">
                P
              </span>
            </div>
          )}
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
