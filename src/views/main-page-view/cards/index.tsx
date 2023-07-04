import { IMyCards } from "@/shared/types/newDeckType";
import React from "react";
import Image from "next/image";

interface ICards {
  cards: IMyCards[];
  onCardClick: (index: number) => void;
}

const cardBack = "https://www.deckofcardsapi.com/static/img/back.png";

const Cards = (props: ICards) => {
  const { cards, onCardClick } = props;
  if (cards.length > 0) {
    return (
      <ul className="flex align-middle items-center justify-center gap-x-5">
        {cards.map((item, index) => (
          <li
            data-testid={`card-${index}`}
            onClick={() => {
              onCardClick(index);
            }}
            className="flex"
            key={`${item.code}_${index}`}
          >
            <Image
              src={item.showed ? item.image : cardBack}
              width={200}
              height={400}
              alt={item.code}
            />
          </li>
        ))}
      </ul>
    );
  }

  return <h2 data-testid='cards-not-found'>Cards not found</h2>;
};

export default Cards;
