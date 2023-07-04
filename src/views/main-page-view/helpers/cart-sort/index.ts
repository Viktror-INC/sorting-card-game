import { IMyCards } from "@/shared/types/newDeckType";

const theRightOrder = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "J",
  "Q",
  "K",
];

export const cartSort = (cards: IMyCards[]) => {
  if (Array.isArray(cards) && cards.length > 0 && typeof(cards)) {
    return cards.sort(
      (a, b) =>
        theRightOrder.indexOf(a.code.charAt(0)) -
        theRightOrder.indexOf(b.code.charAt(0))
    );
  }

  return `${cards} - is not array or empty array`
};
