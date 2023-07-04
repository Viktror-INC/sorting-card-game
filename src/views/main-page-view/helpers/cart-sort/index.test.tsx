import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { cartSort } from ".";

const cards = [
  {
    code: "5S",
    image: "https://deckofcardsapi.com/static/img/5S.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/5S.svg",
      png: "https://deckofcardsapi.com/static/img/5S.png",
    },
    value: "5",
    suit: "SPADES",
    showed: true,
  },
  {
    code: "4S",
    image: "https://deckofcardsapi.com/static/img/4S.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/4S.svg",
      png: "https://deckofcardsapi.com/static/img/4S.png",
    },
    value: "4",
    suit: "SPADES",
    showed: true,
  },
  {
    code: "2D",
    image: "https://deckofcardsapi.com/static/img/2D.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/2D.svg",
      png: "https://deckofcardsapi.com/static/img/2D.png",
    },
    value: "2",
    suit: "DIAMONDS",
    showed: true,
  },
  {
    code: "AD",
    image: "https://deckofcardsapi.com/static/img/aceDiamonds.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/aceDiamonds.svg",
      png: "https://deckofcardsapi.com/static/img/aceDiamonds.png",
    },
    value: "ACE",
    suit: "DIAMONDS",
    showed: true,
  },
  {
    code: "2C",
    image: "https://deckofcardsapi.com/static/img/2C.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/2C.svg",
      png: "https://deckofcardsapi.com/static/img/2C.png",
    },
    value: "2",
    suit: "CLUBS",
    showed: true,
  },
];

const sortedCards = [
  {
    code: "AD",
    image: "https://deckofcardsapi.com/static/img/aceDiamonds.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/aceDiamonds.svg",
      png: "https://deckofcardsapi.com/static/img/aceDiamonds.png",
    },
    value: "ACE",
    suit: "DIAMONDS",
    showed: true,
  },
  {
    code: "2D",
    image: "https://deckofcardsapi.com/static/img/2D.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/2D.svg",
      png: "https://deckofcardsapi.com/static/img/2D.png",
    },
    value: "2",
    suit: "DIAMONDS",
    showed: true,
  },
  {
    code: "2C",
    image: "https://deckofcardsapi.com/static/img/2C.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/2C.svg",
      png: "https://deckofcardsapi.com/static/img/2C.png",
    },
    value: "2",
    suit: "CLUBS",
    showed: true,
  },
  {
    code: "4S",
    image: "https://deckofcardsapi.com/static/img/4S.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/4S.svg",
      png: "https://deckofcardsapi.com/static/img/4S.png",
    },
    value: "4",
    suit: "SPADES",
    showed: true,
  },
  {
    code: "5S",
    image: "https://deckofcardsapi.com/static/img/5S.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/5S.svg",
      png: "https://deckofcardsapi.com/static/img/5S.png",
    },
    value: "5",
    suit: "SPADES",
    showed: true,
  },
];

describe("cartSort test", () => {
  afterEach(() => {
    cleanup();
  });

  it("correct value", () => {
    expect(cartSort(cards)).toEqual(sortedCards);
  });

  it("not correct value", () => {
    expect(cartSort([])).toEqual(' - is not array or empty array');
    
  });
});
