import {
  render,
  screen,
  fireEvent,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Cards from ".";
import { IMyCards } from "@/shared/types/newDeckType";

const myCards = [
  {
    code: "3D",
    image: "https://deckofcardsapi.com/static/img/3D.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/3D.svg",
      png: "https://deckofcardsapi.com/static/img/3D.png",
    },
    value: "3",
    suit: "DIAMONDS",
    showed: true,
  },
  {
    code: "6S",
    image: "https://deckofcardsapi.com/static/img/6S.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/6S.svg",
      png: "https://deckofcardsapi.com/static/img/6S.png",
    },
    value: "6",
    suit: "SPADES",
    showed: true,
  },
  {
    code: "7S",
    image: "https://deckofcardsapi.com/static/img/7S.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/7S.svg",
      png: "https://deckofcardsapi.com/static/img/7S.png",
    },
    value: "7",
    suit: "SPADES",
    showed: true,
  },
  {
    code: "9S",
    image: "https://deckofcardsapi.com/static/img/9S.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/9S.svg",
      png: "https://deckofcardsapi.com/static/img/9S.png",
    },
    value: "9",
    suit: "SPADES",
    showed: true,
  },
  {
    code: "0D",
    image: "https://deckofcardsapi.com/static/img/0D.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/0D.svg",
      png: "https://deckofcardsapi.com/static/img/0D.png",
    },
    value: "10",
    suit: "DIAMONDS",
    showed: true,
  },
];

const onCardClick = jest.fn();

describe("cards test", () => {
  const renderCards = (cards?: IMyCards[]) =>
    render(<Cards cards={cards ? cards : myCards} onCardClick={onCardClick} />);

  afterEach(() => {
    cleanup();
  });

  it("correct value", () => {
    const renderedCards = renderCards();
    const cards = screen.getAllByTestId(/card-/);
    expect(cards).toHaveLength(5);
    cards.forEach((_, index) => {
      const card = screen.getByTestId(`card-${index}`);
      expect(card).toBeInTheDocument;
      fireEvent.click(card);
      expect(onCardClick).toBeCalled();
    });

    const cardsNotFound = screen.queryByTestId("cards-not-found");
    expect(cardsNotFound).not.toBeInTheDocument();

    expect(renderedCards).toMatchSnapshot();
  });

  it("empty array", () => {
    renderCards([]);
    const cards = screen.queryAllByTestId(/card-/);
    expect(cards).toHaveLength(0);
    const cardsNotFound = screen.getByTestId("cards-not-found");
    expect(cardsNotFound).toBeInTheDocument();
    expect(cardsNotFound).toContainHTML("Cards not found");
  });
});
