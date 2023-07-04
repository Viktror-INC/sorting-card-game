"use client";
import { addToPiles, getMyCardsData, returnCards } from "@/shared/requests";
import { IMyCards, INewDeck } from "@/shared/types/newDeckType";
import { Button, LinearProgress } from "@mui/material";
import Image from "next/image";
import React, { use, useCallback, useEffect, useState } from "react";
import Cards from "./cards";
import { cartSort } from "./helpers/cart-sort";

interface IMainPageView {
  newDeck: INewDeck;
}

const pileName = "player1";

const MainPageView = (props: IMainPageView) => {
  const [isLoading, setIsLoading] = useState(false);
  const { newDeck } = props;
  const [myCards, setMyCards] = useState<IMyCards[]>([]);
  const [isRestart, setIsRestart] = useState(false);


  const getMyCards = useCallback(async () => {
    setIsLoading(true);

    await returnCards(newDeck.deck_id, pileName);

    const { data } = await getMyCardsData(newDeck.deck_id, "5");
    const cards = (data.cards as IMyCards[]).map((card) => ({
      ...card,
      showed: false,
    }));
    await addToPiles(
      newDeck.deck_id,
      pileName,
      cards.map((card) => card.code).join(",")
    );

    setMyCards(cards);
    setIsLoading(false);
  }, [newDeck.deck_id]);

  const onCardClick = (cardIndx: number) => {
    let updatedCards = myCards.map((card, index) => {
      if (index === cardIndx) {
        return { ...card, showed: true };
      }
      return card;
    });

    const isOpenedAll = updatedCards.every((card) => card.showed);

    if (isOpenedAll) {
      updatedCards = cartSort(updatedCards) as IMyCards[];

      setIsRestart(true);
    }

    setMyCards(updatedCards);
  };

  useEffect(() => {
    getMyCards();
  }, [getMyCards]);


  return (
    <div className=" flex flex-col gap-y-10 justify-center min-h-screen">
      <h1 className="text-5xl flex mx-auto"> Open your cards</h1>
      {isLoading ? (
        <LinearProgress color="secondary" />
      ) : (
        <Cards cards={myCards} onCardClick={onCardClick} />
      )}
      {isRestart && (
        <div className="flex mx-auto w-full max-w-[300px] items-center ">
          <Button
            className=" w-full"
            variant="contained"
            onClick={() => {
              setIsRestart(false);
              getMyCards();
            }}
          >
            restart
          </Button>
        </div>
      )}
    </div>
  );
};

export default MainPageView;
